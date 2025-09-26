import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config(); //loads environment variables
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const port = process.env.PORT || 5000; //backend running port
connectDB(); // app connects to mongodb

const app = express(); // web server instance

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
//cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running...');
})

app.use('/api/products', productRoutes); // routes starting with api/products go the productRoutes.js file
app.use('/api/users', userRoutes); // routes starting with api/users go to userRoutes.js
app.use('/api/orders', orderRoutes); //routes starting with api/orders go to orderRoutes.js

app.get('/api/config/paypal', (req, res) => 
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

app.use(notFound); // runs if no route is matched
app.use(errorHandler); // runs if there is a server error (database issue, conding bug)

app.listen(port, () => console.log(`server runnning on port ${port}`)); //starts the server and listens for requests on the port