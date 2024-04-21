import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import instances from './controllers/instances'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/instances', instances)

const port = 2999
console.log(`Backend Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
