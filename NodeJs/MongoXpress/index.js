const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const path = require('path');
const Chat = require('./Models/chat');
const methodOverride = require('method-override');
const ExpressError = require('./ExpressError');


app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
main().then(() => console.log('Successfully Connected to MongoDB'))
    .catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    console.log('Connected to MongoDB');
}
let chat1 = new Chat({
    msg: 'Hello, how are you?',
    from: 'Alice',
    to: 'Bob',
    created_at: new Date()
});
// chat1.save()
// .then(() => console.log('Chat message saved to MongoDB: ', chat1))
// .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/chats', async (req, res) => {
    try {
        const chats = await Chat.find();
        console.log(chats);
        res.render('index', { chats });
    } catch (err) {
        next(err);
    }
});
// create new chat
app.get('/chats/new', (req, res) => {
    // throw new ExpressError('This is a custom error message', 400);
    res.render('newchat');
}); 
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err)=>{next(err)});
    };
}
app.get('/chats/:id', wrapAsync(async (req, res,next) => {
        const chat = await Chat.findById(req.params.id);
        if (!chat) {
            next(new ExpressError('Chat not found yha', 404));
        }
        res.render('show', { chat });
    } 
));


app.post('/chats/new', async (req, res,next) => {
    try {
        const { msg, from, to } = req.body;
        const newChat = new Chat({
            msg: msg,
            from: from,
            to: to,
            created_at: new Date()
        });
        await newChat.save();
        res.redirect('/chats');
    } catch (err) {
        next(err);
    }
});
// edit chat
app.get('/chats/:id/edit', wrapAsync(async (req, res, next) => {
        const chat = await Chat.findById(req.params.id);
        if (!chat) {
            return next(new ExpressError('Chat not found', 404));
        }
        res.render('editsms', { chat });
    } 
)); 
// update chat 
app.put('/chats/:id/edit', wrapAsync(async (req, res,next) => {
        const { msg, from, to } = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(req.params.id, {
            msg: msg,
            from: from,
            to: to,
            // created_at: new Date(),
            updated_at: new Date()
        }, { new: true, runValidators: true });
        res.redirect('/chats');
        // console.error(err);
        // res.status(500).send('Error updating chat');
    }
));
// delete chat
app.get('/chats/:id/delete', wrapAsync(async (req, res,next) => {
        const chat = await Chat.findById(req.params.id);
        res.render('deletechat', { chat });
    } 
));
app.delete('/chats/:id', wrapAsync(async (req, res,next) => {
    const { from } = req.body;
    const chat = await Chat.findById(req.params.id);
    if (chat.from !== from) {
        return next(new ExpressError('Only the sender can delete this chat', 403));
    } else {
        await Chat.findByIdAndDelete(req.params.id);
        res.redirect('/chats');
    }
}
));
        
// error handling middleware for all routes
app.use((err, req, res, next) => {
    const { statusCode = 500,message } = err;
    res.status(statusCode).send(err.message);
});
app.use((req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});