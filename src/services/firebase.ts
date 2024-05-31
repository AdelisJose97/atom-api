import * as admin from 'firebase-admin'

/* admin.initializeApp(); */
const buff = Buffer.from(
  process.env.FIREBASE_SERVICE_ACCOUNT as string,
  'base64'
)
const text = buff.toString('ascii')

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(text)),
})

const db = admin.firestore()
export { admin, db }
