// Server entry point
import express from 'express';
import db from './config/connection.js';

import userRoutes from './routes/api/userRoutes.js';
import thoughtRoutes from './routes/api/thoughtRoutes.js';

await db();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);


app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
