import bodyParser from 'body-parser'
import compress from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import routes from './routes'
import { ROOT_DIR } from '../config'

const rootDir = ROOT_DIR

// Init express app
const app = express()

// ==============================================================================
// APPLICATION MIDDLEWARE
// ==============================================================================
app.use(cors())

// Parse the cookies on the request.
app.use(cookieParser())

// Add the logging middleware.
app.use(morgan('dev'))

// support json encoded bodies.
app.use(bodyParser.json())

// support encoded bodies.
app.use(bodyParser.urlencoded({ extended: true }))

// serve gzip
app.use(compress())

// define the folders that will be used for static content.
app.use(express.static(path.join(rootDir, 'root')))
app.use('/css', express.static(path.join(rootDir, 'css')))
app.use('/images', express.static(path.join(rootDir, 'images')))
app.use('/js', express.static(path.join(rootDir, 'js')))

// ==============================================================================
// VIEW CONFIGURATION (No need to use a view engine. Serving plain html.)
// ==============================================================================
// app.set('views', path.join(__dirname, '..', 'dist'))
// app.set('view engine', 'pug')

// ==============================================================================
// ROUTES
// ==============================================================================
app.use('/', routes)

// ==============================================================================
// ERROR HANDLER
// ==============================================================================
app.use((err, req, res, next) => {
  let msg = 'An error has occured'
  let info = 'If the error persists you are welcome to debug :)'
  const status = err.status || 500

  if (app.get('env') === 'production') {
    msg = `${err.message} (${status})`
    info = err.stack
  }

  // eslint-disable-next-line no-console
  console.log('err: ', err)

  res.status(status)
  res.render('error', { msg, info })
  next()
})

export default app
