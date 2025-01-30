import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

// unitários: unidade da sua aplicação
// integração: comunicação entre duas ou mais unidades
/* e2e - ponta a ponta: simula um usuário operando na nossa aplicação
 * front-end: abre a página de login, digite o texto lucas@gmail.com no campo com ID email, clique no botão
 * back-end: chamadas HTTP. websockets
 */
// Pirâmide de testes: E2E (não dependem de nenhuma tecnologia, não dependem de arquitetura)

export const app = fastify()

// cuidar pra estar na ordem correta
app.register(cookie)

// middleware global
// app.addHook('preHandler', async (request) => {
//   console.log(`[${request.method}] ${request.url}`)
// })

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
