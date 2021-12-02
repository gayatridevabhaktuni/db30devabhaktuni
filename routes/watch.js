var express = require('express');
const watch_controlers = require('../controllers/watch');
var router = express.Router();


// redirect to login. 
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}


/* GET watchs */
router.get('/', watch_controlers.watch_view_all_Page);

//GET request for one watch. 
router.get('/watchs/:id', watch_controlers.watch_detail);

/* GET detail watch page */
router.get('/detail', secured, watch_controlers.watch_view_one_Page);

/* GET create watch page */
router.get('/create', watch_controlers.watch_create_Page);

/* GET create update page */
//router.get('/update', watch_controlers.watch_update_Page); 

/* GET create watch page */
router.get('/delete', secured,watch_controlers.watch_delete_Page);

// A little function to check if we have an authorized user and continue on 

/* GET update watch page */
router.get('/update', secured, watch_controlers.watch_update_Page);

module.exports = router;

