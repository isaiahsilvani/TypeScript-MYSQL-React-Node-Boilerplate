import express from 'express'
import controller from '../controllers/books'

const router = express.Router()

router.get('/', controller.getRequest)
router.post('/', controller.postRequest)

export = router