const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 
// We can seed the collection if needed on server start 
async function recreateDB(){ 
    // Delete everything 
    await Costume.deleteMany(); 
   
    let instance1 = new 
  Costume({costume_type:"ghost",  size:'large', cost:25.4}); 
    instance1.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("First object saved") 
    }); 
  
   
  
    let instance2 = new 
  Costume({costume_type:"Vampire",  size:'small', cost:25.4}); 
    instance2.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("Second object saved") 
    }); 
  
    let instance3 = new 
  Costume({costume_type:"Monster",  size:'Medium', cost:25.4}); 
    instance1.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("Third object saved") 
    }); 
  } 
   
  let reseed = true; 
  if (reseed) { recreateDB();} 
   