import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 2999
console.log(`Backend Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
