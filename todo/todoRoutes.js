const Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/todo',
    options: {
      handler: function (request, h) {
        return [{"id": 1}, {"id": 2}, {"id": 3}]
      },
      description: 'List todos',
      tags: ['api'],
      validate: {
        query: Joi.object({
          limit: Joi.number().optional().description('Limit the amount of todos returned'),
        })
      }
    },
  },
  {
    method: 'POST',
    path: '/todo',
    options: {
      handler: function (request, h) {
        return "Hello, world!";
      },
      description: 'Add a todo',
      tags: ['api'],
      validate: {
        payload: Joi.object({
          entry: Joi.string().required().description("the todo body")
        })
      }
    },
  },
  {
    method: 'GET',
    path: '/todo/{id}',
    options: {
      handler: function (request, h) {
        return "Hello, world!";
      },
      description: 'Get a todo',
      tags: ['api'],
      validate: {
        params: Joi.object({
          id: Joi.number().required().description('the id for the todo item'),
        })
      }
    },
  },
  {
    method: 'PUT',
    path: '/todo/{id}',
    options: {
      handler: function (request, h) {
        return "Hello, world!";
      },
      description: 'Update a todo',
      tags: ['api'],
      validate: {
        params: Joi.object({
          id: Joi.number().required().description('the id for the todo item'),
        }),
        payload: Joi.object({
          entry: Joi.string().required().description("the todo body")
        })
      }
    },
  },
  {
    method: 'DELETE',
    path: '/todo/{id}',
    options: {
      handler: function (request, h) {
        return "Hello, world!";
      },
      description: 'Delete a todo',
      tags: ['api'],
      validate: {
        params: Joi.object({
          id: Joi.number().required().description('the id for the todo item'),
        })
      }
    },
  },
]
