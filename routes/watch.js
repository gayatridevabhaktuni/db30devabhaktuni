var express = require('express'); 
const watch_controlers= require('../controllers/watch'); 
var router = express.Router(); 
 
/* GET watchs */ 
router.get('/', watch_controlers.watch_view_all_Page ); 
module.exports = router; 

//GET request for one watch. 
router.get('/watchs/:id',watch_controlers.watch_detail); 

/* GET detail watch page */ 
router.get('/detail', watch_controlers.watch_view_one_Page);  

/* GET create watch page */ 
router.get('/create', watch_controlers.watch_create_Page); 
 
/* GET create update page */ 
router.get('/update', watch_controlers.watch_update_Page); 

/* GET create watch page */ 
router.get('/delete', watch_controlers.watch_delete_Page); 

 
