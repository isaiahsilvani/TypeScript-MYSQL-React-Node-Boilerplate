import express from 'express'
import controller from '../controllers/books'

const router = express.Router()

router.get('/', controller.getRequest)

export = router