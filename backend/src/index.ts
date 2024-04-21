import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import instances from './controllers/instances'

const app = new Hono()

app.route('/instances', instances)
app.use('/instances/*', cors())

const port = 2999
console.log(`Backend Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
