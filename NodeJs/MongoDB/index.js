const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/college');

main().then(() => console.log('Connected to MongoDB successfully')).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/college');
  console.log('Connected to MongoDB');
}
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});
const User = mongoose.model('User', userSchema);//model name is User and schema is userSchema

//to find all users
User.find({ age: { $gte: 35 } }).then((result) => console.log('Users found successfully', result[1].email)).catch(err => console.log(err));//results is an array of objects and we are accessing the email of the second object in the array

//if we want single user then we can use findOne method
// User.findOne({ _id: '699d3bf48ae0ed9729f4ac80' }).then((result) => console.log('User found successfully', result)).catch(err => console.log(err));
User.findById('699d3bf48ae0ed9729f4ac82').then((result) => console.log('This userId belongs to:', result)).catch(err => console.log(err));

//to update a user
// User.updateOne({ _id: '699d3bf48ae0ed9729f4ac82' }, { name: 'Champat Harami' }).then((result) => console.log('User updated successfully', result)).catch(err => console.log(err));

// update many users//
User.updateMany({ age: { $gte: 30, $lte: 45 } }, { $inc: { age: 6 } }).then((result) => console.log('Users updated successfully(sr.)', result)).catch(err => console.log(err));


// update and find(by Id)the updated document
User.findByIdAndUpdate('699d3bf48ae0ed9729f4ac82', { name: 'Hari' }, { new: true }).then((result) => console.log('User updated successfully', result)).catch(err => console.log(err));
User.findOneAndUpdate({ _id: '699d3bf48ae0ed9729f4ac83' }, { name: 'queen' }, { new: true }).then((result) => console.log('User updated successfully', result)).catch(err => console.log(err));

// to delete a user
User.findByIdAndDelete('699d35d3fcf75217da7a7c95').then((result) => console.log('User deleted successfully', result)).catch(err => console.log(err));
User.findOneAndDelete({_id:'699d362a4068a97bfd80177d'}).then((result) => console.log('User deleted successfully', result)).catch(err => console.log(err));
// const user1 = new User({
//     name: 'John Doe',
//     age: 30,
//     email: 'john.doe@example.com'
// });
// user1.save();
// const user2 = new User({
//     name: 'Jane Smith',
//     age: 25,
//     email: 'jane.smith@example.com'
// });
// user2.save().then((result) => console.log('User saved successfully', result)).catch(err => console.log(err));
// User.insertMany([{
//     name:'Alice Johnson',
//     age:28,
//     email:'alice.johnson@example.com'
// },{
//     name:'Bob Williams',
//     age:35,
//     email:'bob.williams@example.com'
// },
// {    name:'Charlie Brown',
//     age:22,
//     email:'charlie.brown@example.com'
// },{
//     name:'David Lee',
//     age:40,
//     email:'david.lee@example.com'
// }
// ])
// .then((result) => console.log('Users inserted successfully', result)).catch(err => console.log(err));