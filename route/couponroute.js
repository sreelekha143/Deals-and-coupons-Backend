const express=require('express');
const router=express.Router();
const Coupon=require('../model/coupon.model');


//retriving data from database

router.get('/coupon',(req,res,next)=>{
    Coupon.find(function(err,mesg){
        if(err){
            res.json(err );
        }
        else{
            res.json(mesg);
        }
    })
   
});


//Get the data by the id
router.get('/:id', (req, res) => {

    Coupon.findById({ _id: req.params.id }, (err, result) => {
        if (err)
            res.status(404).send(err);
        else
            res.status(200).send(result)
    });
});

//Inserting the data
router.post('/coupon',(req,res,next)=>{
    let newCoupon= new Coupon({
        id:req.body.id,
        couponname: req.body.couponname,
        promocode:req.body.promocode,
        imageurl: req.body.imageurl  
    })
    newCoupon.save((err,coupon)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json("coupon added sucessfully");
        }
    });
});

//updating the data
router.put('/:id',(req,res)=>{
            
    Coupon.findOneAndUpdate({_id:req.params.id},{$set:{id:req.body.id,couponname:req.body.couponname,promocode:req.body.promocode,imageurl:req.body.imageurl}},
        (err,result)=>{
            if(err)
            res.status(404).send(err);
         else
         res.status(200).send(result)
        })
})

//delete the data
router.delete('/:id',(req,res,next)=>{

    Coupon.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
        if (err)
            res.status(404).send(err);
        else
            res.status(200).send(result)
    })
})
module.exports=router;