require('dotenv').config(); // ✅ Load .env FIRST

const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Initialize Socket.IO
initializeSocket(server);

server.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
