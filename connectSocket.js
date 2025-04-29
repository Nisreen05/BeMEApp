// connectSocket.js
import { io } from 'socket.io-client';

const SERVER_URL = 'http://<YOUR_IP_ADDRESS>:3000'; // แก้เป็น IP ของเครื่องที่รัน server

const socket = io(SERVER_URL, {
  transports: ['websocket'], 
});

export default socket;
