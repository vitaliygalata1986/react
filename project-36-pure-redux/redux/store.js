// создадим магазин Redux
// используем скомпилированную внешнюю библиотеку
import { configureStore } from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@2.2.1/+esm';
import reducer from './reducer.js';

export default configureStore({
  // создадим магазин Redux на основании редюсеры, который указываем ниже
  reducer: reducer,
});
