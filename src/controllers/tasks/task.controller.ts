import { Request, Response } from 'express'
import { db } from '../../services/firebase'

export async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await db
      .collection('tasks')
      .orderBy('createdAt', 'desc')
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => doc.data())
      })

    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error })
  }
}
export async function createTask(req: Request, res: Response) {
  try {
    const payload = req.body

    await db.collection('tasks').doc(payload.id).set(payload)
    const task = await db
      .collection('tasks')
      .doc(payload.id)
      .get()
      .then((doc) => doc.data())
    res.json(task)
  } catch (error) {
    res.status(500).json({ error })
  }
}
export async function updateTask(req: Request, res: Response) {
  try {
    const payload = req.body
    await db.collection('tasks').doc(req.params.taskId).set(payload, {
      merge: true,
    })
    const task = await db
      .collection('tasks')
      .doc(payload.id)
      .get()
      .then((doc) => doc.data())
    res.json(task)
  } catch (error) {
    res.status(500).json({ error })
  }
}
export async function deleteTask(req: Request, res: Response) {
  try {
    await db.collection('tasks').doc(req.params.taskId).delete()

    res.status(200).json({
      message: 'Taks deleted successfully',
    })
  } catch (error) {
    res.status(500).json({ error })
  }
}
