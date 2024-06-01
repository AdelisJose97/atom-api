import { Router } from 'express'
import { createUser, verifyUser } from '../controllers/users/user.controller'

const router = Router()

router.get('/:email', verifyUser)
router.post('/', createUser)

export default router
