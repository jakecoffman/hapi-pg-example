const db = require('../db').connect()

module.exports = {
  async listTodos(query) {
    return db('todo').select('*').limit(query.limit)
  },
  async createTodo(entry) {
    const result = await db('todo').insert(entry).returning('*')
    return result[0]
  },
  async getTodo(id) {
    const result = await db('todo').where('id', id)
    if (result.length) {
      return result[0]
    }
    return null
  },
  async updateTodo(id, entry) {
    const result = await db('todo').update(entry).where('id', id).returning('*')
    if (result.length) {
      return result[0]
    }
    return null
  },
  async deleteTodo(id) {
    const result = await db('todo').delete().where('id', id).returning('*')
    return result.length > 0
  }
}
