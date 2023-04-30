import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  todos,
  completedTodosExist,
}) {
  console.log(completedTodosExist); // false - задача не завершена
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist} // если нет завершенных задач, то делаем кнопку не активную, так как прилетает false, то !false => true
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
export default TodosActions;
