const mongoose = require('mongoose');
const { Schema, model, connect } = mongoose;

async function main() {
    await connect('mongodb://127.0.0.1:27017/relationDemo');
    console.log('Connected to MongoDB');
}
main();
const userSchema= new Schema({
    name:String,
    email:String
})
const User = model( "User" , userSchema );
const postSchema=new Schema({
    content:String,
    likes :Number,
    users:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})
const Post= model("Post", postSchema);
const addData= async()=>{
    const user=await User.findOne({name:"Aman"})
    const post2= new Post({
        likes:33,
        content:"My World of Programming!"
    })
    post2.users=user;
    // await user1.save();
    await post2.save();
}
// addData();
const getUser= async()=>{
    const result= await Post.find().populate("users","name");
    console.log(result);
}
getUser();