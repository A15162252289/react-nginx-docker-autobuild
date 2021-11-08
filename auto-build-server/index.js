// app.js
const http = require('http')
const { spawn } = require('child_process')
const createHandler = require('github-webhook-handler')
// git仓库创建webhook的接口地址,以及密码
const handler = createHandler({ path: '/webhook', secret: '123456' })
const PORT = 3010
handler.on('issues', function(event) {
    console.log(
      'Received an issue event for %s action=%s: #%d %s',
      event.payload.repository.name,
      event.payload.action,
      event.payload.issue.number,
      event.payload.issue.title
    )
})
function runCommand(cmd, args, callback) {
    let response = ''
    const child = spawn(cmd, args)
    child.stdout.on('data', buffer => {
      response += buffer.toString()
    })
    child.stdout.on('end', () => callback(response))
}
handler.on('error', err => {
  console.error('Error:', err.message)
})
// 监听到push事件的时候执行我们的自动化脚本
handler.on('push', event => {
  console.log(
    'Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref
  )
  // push请求且为master执行shell脚本
  event.payload.ref === 'refs/heads/master' && runCommand('sh', ['./build.sh'], console.log)
})

http
  .createServer((req, res) => {
    handler(req, res, () => {
      res.statusCode = 404
      res.end('no such location')
    })
  })
  .listen(PORT)