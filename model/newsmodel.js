const mongoose=require('mongoose');
const newsSchema=mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    detail :{
        type:String
    },
   
    imageurl:{
        type:String
    }
});
const News=module.exports=mongoose.model('News',newsSchema)