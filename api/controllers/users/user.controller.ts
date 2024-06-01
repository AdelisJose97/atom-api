import { Request, Response } from 'express'
import { db } from '../../services/firebase'

export async function createUser(req: Request, res: Response) {
  try {
    const email = req.body.email
    await db.collection('users').doc(email).set({ email })

    return res.status(200).json({
      message: 'User created successfully',
    })
  } catch (error) {
    res.status(500).json({ error })
  }
}
export async function verifyUser(req: Request, res: Response) {
  try {
    const email = req.params.email
    if (email.length > 0) {
      const user = await db.collection('users').doc(email).get()
      if (!user.exists) {
        return res.status(401).json({
          message: 'Error',
          exists: false,
        })
      }
      return res.status(200).json({
        message: 'Success',
        exists: true,
      })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}
