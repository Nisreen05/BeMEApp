// Import ฟังก์ชันที่จำเป็นจาก Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ข้อมูล config ของโปรเจกต์คุณ (ก็อปจาก Firebase console มา)
const firebaseConfig = {
  apiKey: "AIzaSyAqtUA2bhiv9lIo0NYouxR3sOx_n14HDME",
  authDomain: "bemeapp-3ef5d.firebaseapp.com",
  projectId: "bemeapp-3ef5d",
  storageBucket: "bemeapp-3ef5d.appspot.com",
  messagingSenderId: "220846783354",
  appId: "1:220846783354:web:8a731a654a4ed30b5ef4c3",
  measurementId: "G-D9730MKPNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore ออกไปใช้งาน
export const db = getFirestore(app);
