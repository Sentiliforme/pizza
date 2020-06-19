import 'reflect-metadata'
import { createConnection, Connection, getManager, ObjectType, EntitySchema } from 'typeorm'
import * as ENV from '../ENV'
import logger from './logger'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

let connection: Connection

export async function init(): Promise<Connection> {
  if (!connection) {
    logger.info(`initializing db connection to ${ENV.MYSQL_DB}`)
    connection = await createConnection({
      type: 'mysql',
      host: ENV.MYSQL_HOST,
      port: ENV.MYSQL_PORT,
      database: ENV.MYSQL_DB,
      username: ENV.MYSQL_USER,
      password: ENV.MYSQL_ROOT_PASSWORD,
      entities: ENV.ENTITIES_PATH,
      //logging: true
    })
  }

  if (ENV.IS_DEV) {
    await connection.synchronize()
  }
  return connection
}

export async function insertIgnore<T>(
  entityTarget: ObjectType<T> | EntitySchema<T> | string,
  values: QueryDeepPartialEntity<T> | QueryDeepPartialEntity<T>[]
) {
  return getManager()
    .createQueryBuilder()
    .insert()
    .into(entityTarget)
    .values(values)
    .orIgnore(true)
    .execute()
}
