import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
// import NotFound from './NotFound';

function SingleCourse() {
  const params = useParams();
  const navigate = useNavigate(); // хук возвращает функцию, с помощью которой можно изменять локацию
  const course = courses.find((course) => course.slug === params.slug);
  /*
  if (!course) {
    // если нет такого курса
      return (
        <>
          <NotFound />
          <Link to=".." relative="path">
            All courses
          </Link>
        </>
      );
  }
   */
  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' }); // мы выходим на один уровень выше относительно текущего пути
      // navigate('../not-found', { relative: 'route' }); // переходим на уровень корневого марщрута / и после него добавить not-found
    }
  }, [course, navigate]); // добавим course в массив зависимостей, каждый раз, когда меняется значение course - будет вызываться колбек функция

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      {/* <Link to="/courses">All courses</Link> */}
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
}

export default SingleCourse;
