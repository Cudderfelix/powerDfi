const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();


// listen for requests
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);
// register view engine    
app.set('view engine', 'ejs');


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome!' });
});

app.use((req, res) => {
    res.render('404', { title: '404 Error' });
});