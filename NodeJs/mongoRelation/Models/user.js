const mongoose = require('mongoose');

// Destructuring
// We are extracting Schema and model from mongoose to use them directly
const { Schema, model } = mongoose;

// MongoDB creates database only when data is inserted, not just on connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
    console.log('Connected to MongoDB');
}

main()
    .then(() => console.log('Successfully Connected to MongoDB'))
    .catch(err => console.log(err));


// Schema (One-to-Many using Embedding)
// One user can have multiple addresses
const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false ,  // ❌ disable _id
            city: String,
            location: String
        }
    ]
});


// Model
// Model name → capital (User)
// MongoDB will create collection → "users" (lowercase + plural)
const User = model("User", userSchema);

//“Mongoose automatically adds an _id field to every document and subdocument.”
const addUser = async () => {
    const user1 = new User({
        username: "sherlockholmes",
        addresses: [{
            location: "221B balker Street",
            city: "london"
        }],
    })
    user1.addresses.push({
        location: "P36 DownTown",
        city: "london"
    })
    let result = await user1.save();
    console.log(result);
}
addUser();