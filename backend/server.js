const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

const app = express();
const port = 3001;

// 🔥 ต้องเอาไฟล์ serviceAccountKey.json ของ Firebase มาวาง แล้ว import ตรงนี้
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.use(cors());
app.use(express.json());

// 🟢 อ่าน Good Stories
app.get('/goodStories', async (req, res) => {
  try {
    const snapshot = await db.collection('goodStories').get();
    const stories = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(stories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting good stories');
  }
});

// 🔴 อ่าน Bad Stories
app.get('/badStories', async (req, res) => {
  try {
    const snapshot = await db.collection('badStories').get();
    const stories = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(stories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting bad stories');
  }
});

// ✏️ แก้ไขเรื่องราว (Good)
app.patch('/goodStories/:id', async (req, res) => {
  const { id } = req.params;
  const { story } = req.body;
  try {
    await db.collection('goodStories').doc(id).update({ story });
    res.send('Good story updated');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating good story');
  }
});

// ✏️ แก้ไขเรื่องราว (Bad)
app.patch('/badStories/:id', async (req, res) => {
  const { id } = req.params;
  const { story } = req.body;
  try {
    await db.collection('badStories').doc(id).update({ story });
    res.send('Bad story updated');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating bad story');
  }
});

// ❌ ลบเรื่องราว (Good)
app.delete('/goodStories/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection('goodStories').doc(id).delete();
    res.send('Good story deleted');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting good story');
  }
});

// ❌ ลบเรื่องราว (Bad)
app.delete('/badStories/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection('badStories').doc(id).delete();
    res.send('Bad story deleted');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting bad story');
  }
});

// 🚀 Start Server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
