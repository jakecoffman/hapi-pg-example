const controller = require('./todoController')
const service = require('./todoService')

test('list', async () => {
  const request = {query: {}}
  service.listTodos = jest.fn(() => Promise.resolve([]))

  const response = await controller.listTodos(request)

  expect(response).toEqual([])
  expect(service.listTodos).toHaveBeenCalledWith(request.query)
})
