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

const postSchema=new Schema({
    content:String,
    likes :Number,
    users:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})
//Cascading Middleware for  deletion
userSchema.post("findOneAndDelete",async(user)=>{
     if (user) {
        await Post.deleteMany({
            users: user._id
        });
        console.log("Deleted Post by Middleware");
    }
})
const User = model( "User" , userSchema );
const Post= model("Post", postSchema);
const addData= async()=>{
    const user2= await User.findOne({
        name:"Mahrana Pratap",
    })  
    const post2= new Post({
        likes:60,
        content:"Mharo Pyaro Rajsthan"
    })
    post2.users=user2._id;  
    // await user2.save();
    await post2.save();
    console.log("Added");
}
// addData();

const getUser= async()=>{
    const result= await Post.find().populate("users","name");
    console.log(result);
}
getUser();
const deluser= async()=>{
    await User.findByIdAndDelete("69c3aa95a6fc90c9b5a2bcb9");
}
// deluser();
