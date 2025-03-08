import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
