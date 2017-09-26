var express = require("express") ;
var path = require("path") ;
var bodyParser = require("body-parser") ;
var router = express.Router();

var index = require("./app/index") ;
var tasks = require("./app/tasks") ;

  var app = express() ;

app.set('views', path.join(__dirname, 'views'));
app.set('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/app'));

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({extended:false})) ;

	app.use('/',index);

// 	app.use(app.router);
// index.initialize(app);

	// app.use('/api',tasks);

// app.use(app.router);
// tasks.initialize(app);

var port = 3000 ;


app.listen(port, function() {
	console.log("server listen to port"+port)
});