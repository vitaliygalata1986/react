const getAllTodos = async () => {
  const responce = await fetch('https://jsonplaceholder.typicode.com/todos/5');
  return await responce.json();
};

export { getAllTodos };
