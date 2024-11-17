import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

export const isAlive = functions.https.onRequest(async (req, res) => {
  try {
    await db.collection('test').doc('testDoc').get();
    res.status(200).send('Database is ready');
  } catch (error) {
    res.status(500).send('Database is not ready');
  }
});
