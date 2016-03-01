var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport =require('passport');
var session = require('express-session');
var router = express.Router();


var app = express();

var nav = [{
    Link: '/Users',
    Text: 'Users'
}, {
    Link: '/Admins',
    Text: 'Admins'
}];


var adminRouter = require('./src/routes/adminroute.js')(nav);
var authRouter = require('./src/routes/authRoutes.js')(nav);
app.use(express.static('public'));
app.use(express.static('src/views'));
router.route('/')
    .get(function (req, res) {
        res.send('Hello Books');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'dan'}));

require('./src/config/passport.js')(app);

app.use('/Admin', adminRouter);
app.use('/User', router);
app.use('/Auth', authRouter);
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});