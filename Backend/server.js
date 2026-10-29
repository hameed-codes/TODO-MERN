import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './src/database/db.js';
import dns from 'dns'
import routes from './src/routes/routes.js';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors'

dns.setServers(['8.8.8.8', '1.1.1.1'])


dotenv.config()
const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT;

//databse connection
connectDB();


//routes
app.use('/api', routes)


//404 pages
app.use((req, res)=> {
    res.status(404).json({
        error: 404,
        message: "page not found"
    })
})


//error handler
app.use(errorHandler);


app.listen(PORT, ()=> {
    console.log(`Server Online on ${PORT}`);
})