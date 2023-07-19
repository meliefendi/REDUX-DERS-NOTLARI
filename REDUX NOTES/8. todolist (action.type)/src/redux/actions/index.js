
//burası dispatch ile tetiklecek
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  
export default addTodo;
  