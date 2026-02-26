const mongoose = require('mongoose');
const Chat = require('./Models/chat');

main().then(() => console.log('Successfully Connected to MongoDB'))
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    console.log('Connected to MongoDB');
}
let allchats=[
    {
        msg: 'Hello, how are you?',
        from: 'Alice',
        to: 'Bob',
        created_at: new Date()
    },
    {
        msg: 'what are you doing?',
        from: 'john',
        to: 'tom',
        created_at: new Date()
    },
    {
        msg: 'r u coming to the party?',
        from: 'michael',
        to: 'sarah',
        created_at: new Date()
    }
    ,{
        msg: 'can we meet tomorrow?',
        from: 'emily',
        to: 'david',
        created_at: new Date()
    }
]
// Chat.insertMany(allchats)
// .then(() => console.log('All chat messages saved to MongoDB: ', allchats))
// .catch(err => console.log(err));
const chat1 = new Chat({
    msg: 'Hello, see you in the evening',
    from: 'william',  
    to: 'zara',
    created_at: new Date()
});
// chat1.save()
// .then(() => console.log('Chat message saved to MongoDB: ', chat1))
// .catch(err => console.log(err));
Chat.find()
.then((chats) => console.log('All chat messages retrieved from MongoDB: ', chats))
.catch(err => console.log(err));
// Chat.deleteMany()
// .then(() => console.log('Chat messages deleted successfully'))
// .catch(err => console.log(err));