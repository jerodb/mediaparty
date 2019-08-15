import 'core-js/stable'
import 'regenerator-runtime/runtime'
import http from 'http'
import https from 'https'
import fs from 'fs'
import app from './app'

const {
  HOST, NODE_ENV, PORT, SSL_PORT, SSL_CERT
} = process.env

const env = NODE_ENV || 'development'
const port = normalizePort(PORT) || 4000
const sslPort = normalizePort(SSL_PORT) || 4003

const options = {
  cert: fs.readFileSync(`${SSL_CERT}chained.pem`),
  key: fs.readFileSync(`${SSL_CERT}domain.key`),
  dhparam: fs.readFileSync(`${SSL_CERT}dhparam.pem`),
}
const server = https.createServer(options, app)

server.on('error', onError)
server.on('listening', onListening)
server.listen(sslPort)

// Redirect from http to https
http.createServer((req, res) => {
  res.writeHead(301, {
    Location: `${HOST.slice(0, -1)}${req.url}`
  })
  res.end()
}).listen(port)

/**
 * Event listener for HTTP routes "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  let errorMsg

  switch (error.code) {
    case 'EACCES':
      errorMsg = `${bind} requires elevated privileges`
      break
    case 'EADDRINUSE':
      errorMsg = `${bind} is already in use`
      break
    default:
      errorMsg = `${bind} failed`
      break
  }

  // eslint-disable-next-line no-console
  console.error(`Error connecting to ${bind}: `, errorMsg)

  throw error
}

/**
 * Event listener for HTTP routes "listening" event.
 */
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
  // eslint-disable-next-line no-console
  console.info(`Server running on ${bind} [${env}]`)
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const portParsed = parseInt(val, 10)

  if (Number.isNaN(portParsed)) {
    // named pipe
    return val
  }

  if (portParsed >= 0) {
    // port number
    return portParsed
  }

  return false
}
