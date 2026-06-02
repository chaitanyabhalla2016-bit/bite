import 'dotenv/config';
import express from 'express';
import recipeRoutes from './routes/recipesRoutes.js';
import cors from 'cors';

const allowedOrigins = ['http://localhost:3000', 'https://bite-recipe-app.netlify.app'];

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(recipeRoutes);

app.listen(PORT,()=>{
    console.log(`App is listening on the PORT: ${PORT}`);
})