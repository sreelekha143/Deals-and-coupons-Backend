const mongoose=require('mongoose');
const homeSchema=mongoose.Schema({
    id:{
        type:Number
    },
    playername:{
        type:String
    },
    gamename:{
        type:String
    },
    
    detail :{
        type:String
    },
   
    imageurl:{
        type:String
    }
});
const Home=module.exports=mongoose.model('Home',homeSchema)