var express = require('express'); 
const watch_controlers= require('../controllers/watch'); 
var router = express.Router(); 
 
/* GET watchs */ 
router.get('/', watch_controlers.watch_view_all_Page ); 
module.exports = router; 

