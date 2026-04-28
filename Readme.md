# 🎯 Realtime Shared Grid App

A real-time multiplayer grid application where users can click and claim blocks. All changes are reflected instantly across all connected users using Socket.io.

---

## 🚀 Live Features

- 📦 20x20 interactive grid (400 blocks)
- 👤 Multiple users can join simultaneously
- 🖱️ Click to claim a block
- 🎨 Each user gets a unique color
- ⚡ Real-time updates using WebSockets (Socket.io)
- 🔒 Conflict handling (no overwrite allowed)
- ❌ Error alert if block is already claimed

---

## 🧠 Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- Socket.io-client

### Backend:
- Node.js
- Express.js
- Socket.io

---

## 📁 Project Structure

### Client

// ├── src/
// │   ├── components/
// │   │   ├── Grid.jsx
// │   │   ├── Cell.jsx
// │   │
// │   ├── pages/
// │   │   ├── Home.jsx
// │   │
// │   ├── hooks/
// │   │   ├── useSocket.js
// │   │
// │   ├── services/
// │   │   ├── socketService.js
// │   │
// │   ├── utils/
// │   │   ├── generateColor.js
// │   │
// │   ├── App.jsx
// │   ├── main.jsx
// │
// ├── index.html
// ├── tailwind.config.js


### Server

// ├── src/
// │   ├── config/
// │   │   ├── db.js
// │   │
// │   ├── models/
// │   │   ├── Block.js
// │   │
// │   ├── sockets/
// │   │   ├── gridSocket.js
// │   │
// │   ├── controllers/
// │   │   ├── blockController.js
// │   │
// │   ├── routes/
// │   │   ├── blockRoutes.js
// │   │
// │   ├── app.js
// │   ├── server.js
// │
// ├── package.json


---

## ⚙️ How It Works

1. User connects → server assigns unique socket ID + color  
2. Server sends full grid (`init_grid`)  
3. User clicks a block → `claim_tile` event sent  
4. Server checks:
   - If block is free → assign owner + color  
   - If already taken → send error  
5. Server broadcasts update to all users (`tile_updated`)  
6. UI updates in real-time

---

## 🔌 Socket Events

### Client → Server
- `claim_tile` → claim a block

### Server → Client
- `init_grid` → send full grid
- `tile_updated` → update a block
- `tile_error` → error message

---

## 🧩 Core Logic

- Blocks stored in **in-memory array**
- Each block has:
  - id
  - color
  - owner
- First-come-first-serve rule for claiming

---

## 🛠️ Installation

### Backend
```bash
cd server
npm install
npm run dev

### Frontend
cd client
npm install
npm run dev