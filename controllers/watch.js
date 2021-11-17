var watch = require('../models/watch');
// List of all watchs

// for a specific watch.
exports.watch_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: watch detail: ' + req.params.id);
};
// Handle watch create on POST.

// Handle watch delete form on DELETE.
exports.watch_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: watch delete DELETE ' + req.params.id);
};
// Handle watch update form on PUT.
exports.watch_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: watch update PUT' + req.params.id);
};

// List of all watchs
exports.watch_list = async function (req, res) {
    try {
        thewatchs = await watch.find();
        res.send(thewatchs);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle watch create on POST.
exports.watch_create_post = async function (req, res) {
    console.log(req.body)
    let document = new watch();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"watch_type":"goat", "cost":12, "size":"large"}
    document.Itemname = req.body.Itemname;
    document.Quantity = req.body.Quantity;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.watch_view_all_Page = async function (req, res) {
    try {
        thewatchs = await watch.find();
        res.render('watch', { title: 'watch Search Results', results: thewatchs });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// GET request for one watch. 
//router.get('/watchs/:id', watch_controller.watch_detail); 

// for a specific watch. 
exports.watch_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await watch.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle watch update form on PUT. 
exports.watch_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await watch.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Itemname) toUpdate.Itemname = req.body.Itemname; 
        if(req.body.Quantity) toUpdate.Quantity = req.body.Quantity; 
        if(req.body.size) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 

// Handle watch delete on DELETE. 
exports.watch_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await watch.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.watch_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await watch.findById( req.query.id) 
        res.render('watchdetail',  
{ title: 'watch Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 // Handle building the view for creating a watch. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.watch_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('watchcreate', { title: 'watch Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a watch. 
// query provides the id 
exports.watch_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await watch.findById(req.query.id) 
        res.render('watchupdate', { title: 'watch Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.watch_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await watch.findById(req.query.id) 
        res.render('watchdelete', { title: 'watch Delete', toShow:result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 