const fastify = require('fastify')({logger: true})

fastify.get('/', (request, reply) => {
  reply.send("test")
})


fastify.listen({ host: '0.0.0.0', port: 3000 })
