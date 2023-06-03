import queryString from 'query-string';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import сourses from '../data/courses';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCoures(courses, key) {
  // функция сортировки, принимает массив курсов и ключ, по которому мы хотим отсортировать объкты в массиве
  const sortedCoures = [...courses];

  if (!key || !SORT_KEYS.includes(key)) {
    // если ключа нет или он есть, но его нет в массиве SORT_KEYS
    return sortedCoures; // вернем исходный массив курсов
  }

  // console.log(sortedCoures);

  sortedCoures.sort((a, b) => (a[key] > b[key] ? 1 : -1)); // соритровка по возрастанию
  return sortedCoures;
}

function Courses() {
  const navigate = useNavigate();
  const location = useLocation(); // возвращает объект информации, полученной из текущей ссылки
  const queryParse = queryString.parse(location.search);
  let [sortedKey, setSortedKey] = useState(queryParse.sort);
  // отсортированные курсы по определенному свойству объекту (title,slug,id)
  const [sortCourses, setSortedCourses] = useState(
    sortCoures(сourses, sortedKey)
  );

  function selectCoursesSirting(type) {
    setSortedKey((sortedKey = type));
  }

  useEffect(() => {
    if (!SORT_KEYS.includes(sortedKey)) {
      navigate('.'); // так как мы находимся на этой же страницы, то удалим просто строку запроса
      setSortedKey(); // обнулим ключ по которому мы сортируем, тогда sortedKey будет undefined
      setSortedCourses([...сourses]); // берем оригинальный массив сourses и делаем с него новый массив, чтобы не делать с него ссылку
    }
  }, [sortedKey, navigate]);
  // console.log(sortedKey); // при первом рендеринге мы видим, например id, когда оно  присутствует в адресной строке, а при последующем - undefined

  return (
    <div>
      <h1>{sortedKey ? `Courses sordet by ${sortedKey}` : 'Courses'}</h1>
      <select onChange={(e) => selectCoursesSirting(e.target.value)}>
        <option value="sss" disabled selected hidden>
          Choose
        </option>
        {SORT_KEYS.map((key, index) => (
          <option key={index} value={key}>
            {key}
          </option>
        ))}
      </select>
      {sortCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {/* <Link to={course.id.toString()} className="courseLink"> */}
            {course.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Courses;
