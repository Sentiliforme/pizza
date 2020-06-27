import createError, { HttpError } from 'http-errors'
import { Express, Router } from 'express'
import bodyParser from 'body-parser'
import * as ENV from './ENV'
import logger from './service/Logger'
import { createConnection } from 'typeorm'
// Pre routes
const cors = (req, res, next) => {
  // For user account authentication
  const ALLOWED_ORIGINS = [] // List of allowed domains
  if (ENV.IS_DEV) ALLOWED_ORIGINS.push(req.headers.origin)
  if (ALLOWED_ORIGINS.includes(req.headers.origin)) {
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Credentials', 'true')
  } else {
    res.header('Access-Control-Allow-Origin', '*')
  }
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  )
  //intercepts OPTIONS method (preflight requests)
  if ('OPTIONS' === req.method) {
    res.sendStatus(200)
  } else {
    next()
  }
}
const setupInitialMiddlewares = (app: Express) => {
  app.use(bodyParser.json())
  app.use(cors)
  app.use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      extended: true
    })
  )
}

const notFoundHandler = (req, res, next) => {
  next(createError(404))
}

// Post routes
const errorHandler = (err: HttpError, req, res, next) => {
  if (req.app.get('env') === 'development') {
    logger.error(err.stack)
  }
  // render the error page
  res.status(err.status || 500)
  res.send(err)
}

const setupErrorHandler = (app: Express) => {
  app.use(notFoundHandler)
  app.use(errorHandler)
}

export const setup = (app: Express, routes: Router) => {
  setupInitialMiddlewares(app)
  app.use(routes)
  setupErrorHandler(app)
}
export const setupPassport = (app: Express, routes: Router) => {
  setupInitialMiddlewares(app)
  createConnection()
  app.use(routes)
  setupErrorHandler(app)
}
