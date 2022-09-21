import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import Connection from './database-config/db.js';
import Routes from './routes/route.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use('/', Routes)

app.use(notFound)
app.use(errorHandler)

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running succesfully on ${PORT}`));