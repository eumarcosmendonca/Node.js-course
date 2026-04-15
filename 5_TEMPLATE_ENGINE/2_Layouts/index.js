const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.post('/post', (req, res) => {
    const post = {
        title: 'Learning Node.js with Express',
        category: 'Programming',
        body: 'This is a post about learning Node.js with Express.',
        comments: 3,}
    res.render('dashboard', { post: post });
});

app.get('/dashboard', (req, res) => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const id = 1;
    res.render('dashboard', { items: items, id: id });
});

app.get('/', (req, res) => {
    const user = {
        name: 'Marcos Mendonça',
    };
    const auth = true;
    res.render('home', { user: user, auth: auth });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});