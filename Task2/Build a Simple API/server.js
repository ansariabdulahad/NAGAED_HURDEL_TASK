import { config } from 'dotenv';
import express from 'express';
import courseRouter from './routes/course-route.js';

config(); // configuration for env

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// render routes
app.use('/api/course', courseRouter);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is listening on ${PORT}`);
});