const express = require('express')
const path = require('path')

const app = express()

const PORT = 7000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.render('pages/index.ejs')
})

app.get('/the-dogs', (req, res)=>{
    res.render('pages/the-dogs.ejs')
})

app.get('/dog', (req, res)=>{
    res.render('pages/dog-template.ejs')
})

app.get('/articles', (req, res)=>{
    res.render('pages/articles.ejs')
})

app.get('/article', (req, res)=>{
    res.render('pages/articleTemplate.ejs')
})

app.get('/about', (req, res)=>{
    res.render('pages/about.ejs')
})

app.get('/adopt', (req, res)=>{
    res.render('pages/adopt.ejs')
})

app.get('/foster', (req, res)=>{
    res.render('pages/foster.ejs')
})

app.get('/donate', (req, res)=>{
    res.render('pages/donate.ejs')
})

app.get('/volunteer', (req, res)=>{
    res.render('pages/volunteer.ejs')
})

app.get('/contact', (req, res)=>{
    res.render('pages/contact.ejs')
})

app.get('/thanks', (req, res)=>{
    res.render('pages/thanks.ejs')
})

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}...`))