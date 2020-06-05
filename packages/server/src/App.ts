import express, { Express } from 'express'
import * as Database from './service/Database'
import router from './Routes'
import 'reflect-metadata'
import { setup } from './Express'

export const createApp = async (): Promise<Express> => {
  await Database.init()
  const app = express()
  setup(app, router)
  return app
}
