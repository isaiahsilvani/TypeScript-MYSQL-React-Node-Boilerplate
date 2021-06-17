import  { Request, Response, NextFunction } from 'express'
import logging from '../config/logging'
import { Connect, Query } from '../config/mysql'

const NAMESPACE = 'Books'


const getRequest = (req: Request, res: Response ) => {
  logging.info(NAMESPACE, 'Getting all books')

  let query = 'SELECT * FROM books'

  Connect()
  .then(connection => {
    Query(connection, query)
    .then(results => {
      return res.status(200).json({
        results
      })
    })
    .catch(error => {
      logging.error(NAMESPACE, error.message, error)
  
      return res.status(500).json({
        message: error.message,
        error
      })
    })
    .finally(() => {
      connection.end()
    })
  })
}

const postRequest = (req: Request, res: Response ) => {
  logging.info(NAMESPACE, 'Creating book.')
  console.log('req body here!!!!', req.body)
  let { author, title } = req.body
  console.log('-----', author, title)
  let query = `INSERT INTO books (author, title) VALUES ("${author}", "${title}")`

  Connect()
  .then(connection => {
    Query(connection, query)
    .then(result => {
      return res.status(200).json({
        result
      })
    })
    .catch(error => {
      logging.error(NAMESPACE, error.message, error)
  
      return res.status(500).json({
        message: error.message,
        error
      })
    })
    .finally(() => {
      connection.end()
    })
  })
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRequest,
  postRequest
}