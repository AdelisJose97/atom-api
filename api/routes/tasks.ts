import { Router } from 'express'
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from '../controllers/tasks/task.controller'

const router = Router()

router.get('/', getTasks)
router.post('/', createTask)
router.put('/:taskId', updateTask)
router.delete('/:taskId', deleteTask)

export default router
