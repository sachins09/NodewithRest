
var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var app = express();
var port = process.env.PORT || 8080;



//route our app((
var router = require('./app/routes');
app.use('/', router);


//set view engine
app.set('view engine','ejs');
app.use(expressLayouts);



app.listen(port, function() {
	// body...
	console.log("app server started");
});

