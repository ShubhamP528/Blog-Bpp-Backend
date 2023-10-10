const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    auther:{
        type:String,
        require:true
    },
    img:{
        type:String,
    },
    content:{
        type:String,
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})

const Blog=mongoose.model('Blog',blogSchema);


module.exports=Blog;