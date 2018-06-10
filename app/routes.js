//import all modules to be used

var express = require('express');



//create router object
var router = express.Router();


//export our router

module.exports = router;



router.get('/', function(req, res) {
	
	res.render('pages/index.ejs');
	
});
router.get('/about', function(req, res) {
	
	res.render('pages/about.ejs');
});
