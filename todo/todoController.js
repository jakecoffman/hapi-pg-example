module.exports = {
  listTodos() {
    return [{"id": 1}, {"id": 2}, {"id": 3}]
  },
  createTodo() {
    return {id: 9}
  },
  getTodo(request) {
    return {id: request.params.id}
  },
  updateTodo(request) {
    return {id: request.params.id}
  },
  deleteTodo() {

  }
}
