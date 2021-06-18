import { NextFunction, Request, Response } from 'express'
import logging from '../config/logging'
import bcryptjs from 'bcryptjs'
import signJWT from '../functions/signJWT'
import { Connect, Query } from '../config/mysql'
import IUser from '../interfaces/user'
import IMySQLResult from '../interfaces/result'

const NAMESPACE = "User"

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Token validated, user authorized")

    return res.status(200).json({
        message: "Authorized"
    })
}

const register = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body
    console.log(username, password)

    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError)
        {
            return res.status(500).json({
                message: hashError.message,
                error: hashError
            })
        }
            // TODO: Insert user into DB here
        let query = `INSERT INTO users (username, password) VALUES ("${username}", "${hash}")`

        Connect()
        .then(connection => {
            Query(connection, query)
            .then((result:any) => {
                logging.info(NAMESPACE, `User with id ${result.insertId} inserted`)
                return res.status(201).json(result)
            })
            .catch(error => {
                logging.error(NAMESPACE, error.message, error)
    
                return res.status(500).json({
                    message: error.message,
                    error
                })
            })
            connection.end()
        })
        .catch(error => {
            logging.error(NAMESPACE, error.message, error)

            return res.status(500).json({
                message: error.message,
                error
            })
        })
    })
}

const login = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body.data
    console.log(req.body)
    let query = `SELECT * FROM users WHERE username = '${username}'`

    Connect()
    .then(connection => {
        Query(connection, query)
        .then((users:any) => {
            if (!users[0]) {
                return res.status(201).json({
                    message: "User does not exist"
                })
            }
            console.log(users[0])
            bcryptjs.compare(password, users[0].password, (error, result) => {

                if (error)
                {
                    return res.status(401).json({
                        message: error.message,
                        error
                    })
                }
                else if (result)
                {
                    signJWT(users[0], (_error, token) => {
                        if (_error)
                        {
                            return res.status(401).json({
                                message: "Unable to Sign JWT",
                                error: _error
                            })
                        }
                        else if (token)
                        {
                            return res.status(200).json({
                                message: 'Auth Successful',
                                token,
                                user: users[0]
                            })
                        }
                    })
                }
            })
        })
        .catch(error => {
            logging.error(NAMESPACE, error.message, error)

            return res.status(500).json({
                message: error.message,
                error
            })
        })

        connection.end()
    })
    .catch(error => {
        logging.error(NAMESPACE, error.message, error)

        return res.status(500).json({
            message: error.message,
            error
        })
    })
}

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    let query = `SELECT _id, username FROM users`

    Connect()
    .then(connection => {
        Query(connection, query)
        .then((users:any) => {
            return res.status(200).json({
                users,
                count: users.length
            })
        })
        .catch(error => {
            logging.error(NAMESPACE, error.message, error)

            return res.status(500).json({
                message: error.message,
                error
            })
        })
        connection.end()
    })
    .catch(error => {
        logging.error(NAMESPACE, error.message, error)

        return res.status(500).json({
            message: error.message,
            error
        })
    })
}

// eslint-disable-next-line
export default { validateToken, register, login, getAllUsers }