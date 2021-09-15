const express = require('express')
const app = express()


let items = ['buy food', 'cook food', 'eat food']
let workItems = []
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let today = new Date()
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString('en-US', options)

    res.render('list', {listTitle: day, newItemsList: items})
})

app.get('/worklist', (req, res) => {
    res.render('list', {listTitle: "Work List", newItemsList: workItems})
})


app.post('/', (req, res) => {
    let item = req.body.newItem
    items.push(item)

    res.redirect('/')
})

app.post('/worklist', (req, res) => {
    let item = req.body.newItem
    workItems.push(item)

    res.redirect('/worklist')
})



app.listen(3000, () => {
    console.log('Server has started on port 3000')
})