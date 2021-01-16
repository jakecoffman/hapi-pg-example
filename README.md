# hapi-pg-example

Showing [Hapi](https://hapi.dev/)'s best feature: [hapi-swagger](https://github.com/glennjones/hapi-swagger).

Hapi has request validation via [Joi](https://github.com/sideway/joi) that [looks like this](https://github.com/jakecoffman/hapi-pg-example/blob/master/todo/todoRoutes.js).

Query validation:
```
validate: {
  query: Joi.object({
    limit: Joi.number().optional().default(1000).min(0).max(1000).description('Limit the amount of todos returned'),
  })
```

Body validation:
```
validate: {
  payload: Joi.object({
    entry: Joi.string().required().description("the todo body"),
    metadata: Joi.object().optional().default({})
  })
}
```

URL Param validation:
```
validate: {
  params: Joi.object({
    id: Joi.number().required().description('the id for the todo item'),
  })
}
```

hapi-swagger takes these validations and turns them into OpenAPI specification.

This is very powerful because in addition to reducing the amount of code you need to write to do validation, it also generates a spec that can be used as documentation or to generate client code. No need to learn OpenAPI itself.

