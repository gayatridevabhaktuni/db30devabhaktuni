const mongoose = require("mongoose") 
const watchSchema = mongoose.Schema({ 
Itemname: String, 
Quantity: String, 
price: Number 
}) 
 
module.exports = mongoose.model("watch", 
watchSchema) 