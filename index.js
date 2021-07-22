const express = require('express');
const bodyParser = require('body-parser');


require('dotenv').config();

const appRouter = require('./routes/app.route');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', appRouter);

app.listen(port, ()=> {
	console.log('server listening on port', port);
});
