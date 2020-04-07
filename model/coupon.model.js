const mongoose=require('mongoose');
const couponSchema=mongoose.Schema({
    id:{
        type:Number
    },
    couponname:{
        type:String
    },
    promocode :{
        type:String
    },
   
    imageurl:{
        type:String
    }
});
const Coupon=module.exports=mongoose.model('Coupon',couponSchema)