const express=require('express');
const app=express();
const mongoose=require('mongoose');
// const seedDB=require('./seed');

// routes
const blogRoute=require('./routes/blog');



mongoose.connect('mongodb://127.0.0.1:27017/blogfull')
    .then(()=>{
        console.log('DB connected');
    })
    .catch((e)=>{
        console.log('DB not connected');
        console.log(e.message);
    })


app.use(express.json())




// seedDB();

app.use(blogRoute);

app.listen(8080,()=>{
    console.log("server running at port 8080");
})