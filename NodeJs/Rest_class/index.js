const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
console.log(uuidv4());


let posts = [{
    id: uuidv4(),
    name: 'Alice',
    content: 'Iam Alice and I love programming.'
}, {
    id: uuidv4(),
    name: 'Bob',
    content: 'Iam Bob and I love playing games.'
}, {
    id: uuidv4(),
    name: 'Charlie',
    content: 'I am Charlie and I love cooking.'
}];

app.get('/posts', (req, res) => {
    res.render('index', { posts });

});
app.get('/posts/new', (req, res) => {
    id = uuidv4();
    res.render('new.ejs', { id });
});

app.post('/posts', (req, res) => {
    console.log(req.body);
    const { id, name, content } = req.body;
    posts.push({ id, name, content });
    res.redirect('/posts');
});
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send('Post not found with id ' + id);
    }
    console.log(post.id);
    const { name, content } = post;
    res.render('show.ejs', { id, name, content });
});
app.patch('/posts/:id', (req, res) => {
    const {content} = req.body;
    const { id } = req.params;
    let post = posts.find(p => p.id === id);
    console.log(id);
    const newContent = req.body.content;
    console.log(newContent);
    post.content = newContent;
    res.redirect('/posts');
});
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
});
app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;
    console.log(id);
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send('Post not found with id ' + id);
    }
    res.render('edit.ejs', { post });

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
