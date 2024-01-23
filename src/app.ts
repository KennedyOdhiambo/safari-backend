import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import { createServer } from 'http';

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;
const DB = process.env.DATABASE;

const app = express();
const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

mongoose
  .connect(DB as string)
  .then(() => {
    console.log('DB connected successfully');
  })
  .catch((error) => {
    console.log(error);
  });
