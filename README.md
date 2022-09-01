# Game of Life

The `frontend` application is created using vite and vue.js with typescript. It doesn't preform any of the game logic and instead just sends the current game grid to the `backend`. The `backend` was created with Node.js and typescript. It has only a single route - `/tick`, which transforms the game grid based on the game's rules and sends the result back to the `frontend`.

# Running the backend

<<<<<<< HEAD
```
cd backend
=======
```cd backend
>>>>>>> 22ed5f698e18097b4dad31d906c280e113463fb1
npm install
npm start
```

# Running the frontend

```
cd frontend
npm install
npm run dev
```
