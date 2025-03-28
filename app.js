const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
const http = require('http').Server(app);

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

require('./router')(app);

http.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});