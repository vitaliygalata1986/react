import store from './redux/store.js';
// import getCurrentTime from './utils/getCurrentTime.js';
import { addCurrentTime, clearTimes } from './redux/actionCreators.js';
const btnAddTime = document.getElementById('addTime');
const btnClearTimes = document.getElementById('clearTimes');
const timeslist = document.getElementById('timeList');
// console.log(store);
// console.log(store.getState()); // []
/*
const unsubscribe = store.subscribe(() =>
  console.log(`Redux store just changed! ${store.getState()}`)
);

store.dispatch({
  type: 'ADD_CURRENT_TIME',
  payload: '11:30:00',
});
unsubscribe();

// console.log(store.getState()); // состояние изменилось ['11:30:00']

store.dispatch({
  type: 'ADD_CURRENT_TIME',
  payload: '11:32:00',
});

// console.log(store.getState());

store.dispatch({
  type: 'CLEAR_CURRENT_TIMES',
});

// console.log(store.getState()); // []
*/

btnAddTime.addEventListener('click', () =>
  // отправим событие в магазин
  /*
  store.dispatch({
    type: 'ADD_CURRENT_TIME',
    payload: getCurrentTime(),
  })
  */
  store.dispatch(addCurrentTime())
);
btnClearTimes.addEventListener('click', () =>
  // отправим событие в магазин
  /*
  store.dispatch({
    type: 'CLEAR_CURRENT_TIMES',
  })
  */
  store.dispatch(clearTimes())
);
/*
store.subscribe(() => {
  const times = store.getState();
  const html = times.map((time) => `<li>${time}</li>`);
  timeslist.innerHTML = html.join('');
});
*/

// подписываемся на изменение состояния в ReduxStore
store.subscribe(() => {
  timeslist.innerHTML = ''; // чтобы перед каждыйм новым выводом очищать timeslist (предыдущие записи)
  const times = store.getState();
  // если массив times будет пустой, то коллбек функция внутри forEach не будет вызвана
  times.forEach((time) => {
    let li = document.createElement('li');
    li.innerText = time;
    timeslist.appendChild(li);
  });
});
