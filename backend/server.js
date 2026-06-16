import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import recipeRoutes from './routes/recipesRoutes.js';
import cors from 'cors';

const allowedOrigins = ['http://localhost:7000', 'https://chaitanyabhalla2016-bit.github.io','http://127.0.0.1:5500'];

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(`${MONGO_URI}`).then(()=>{console.log('Mongoose connected with Atlas')}).catch((error)=>console.log(error));

app.use(express.json());
app.use(cors({ origin: allowedOrigins }));

app.use(recipeRoutes);

app.listen(PORT,()=>{
    console.log(`App is listening on the PORT: ${PORT}`);
})