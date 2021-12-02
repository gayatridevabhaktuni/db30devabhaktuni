const mongoose = require("mongoose") 
const watchSchema = mongoose.Schema({ 
Itemname: String, 
Quantity: String, 
price: {type:Number, min: 3, max: 45, default: 0} 
}) 
 
module.exports = mongoose.model("watch", 
watchSchema) 

