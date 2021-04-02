const express = require('express');
const connectDb = require('./DB/connection')
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');

const app = express();
const cors = require('cors');

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.use(express());
app.use(cors());
connectDb;


// const productRoute = require('./routers/products');
// app.use('/api/products', productRoute);


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
   res.status(200).json({
       message: "Server is ready"
   });
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
});

const port  = process.env.PORT || 5000;

//LISTEN TO THE SERVER
app.listen(port, () => {
    console.log(`Server is working at http://localhost:${port}`);
});