const service = require('./todoService')

module.exports = {
  listTodos(request) {
    return service.listTodos(request.query)
  },

  async createTodo(request, h) {
    const result = await service.createTodo(request.payload)
    if (result) {
      return result
    }
    return h.response('error creating todo').code(500)
  },

  async getTodo(request, h) {
    const todo = await service.getTodo(request.params.id)
    if (todo) {
      return todo
    }
    return h.response('todo not found').code(404)
  },

  async updateTodo(request, h) {
    const todo = await service.updateTodo(request.params.id, request.payload)
    if (todo) {
      return todo
    }
    return h.response('todo not found').code(404)
  },

  async deleteTodo(request, h) {
    const ok = await service.deleteTodo(request.params.id)
    if (ok) {
      return h.response(null).code(204)
    }
    return h.response('todo not found').code(404)
  }
}
