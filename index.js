const express=require('express');
const bodyparser = require('body-parser')
const mongoose=require('mongoose');
const cors=require('cors');

//for creation of app object
const app=express();

//Router connection
const newsRouter=require('./route/routes.js');
const homeRouter=require('./route/homeroute');
const couponRouter=require('./route/couponroute');
//mongoose connection
mongoose.connect('mongodb://localhost:27017/capgemini')
mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb port 27017')
})
mongoose.connection.on('error',(error)=>{
    console.log('error')
})


app.use(cors());
//Toget the data
app.get('/',(req,res)=>{
    res.send("Helloworld");
})

const port = 3000

//for json and router
app.use(express.json());
app.use('/api',newsRouter);
app.use('/sree',homeRouter);
app.use('/couponapi',couponRouter);

//For port connection
//const port=process.env.PORT||config.get('port');
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
