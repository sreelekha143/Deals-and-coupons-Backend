const express=require('express');
const router=express.Router();
const Home=require('../model/home.model');


//retriving data from database

router.get('/home',(req,res,next)=>{
    Home.find(function(err,mesg){
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

    Home.findById({ _id: req.params.id }, (err, result) => {
        if (err)
            res.status(404).send(err);
        else
            res.status(200).send(result)
    });
});

//Inserting the data
router.post('/home',(req,res,next)=>{
    let newHome= new Home({
        id:req.body.id,
        playername: req.body.playername,
        gamename:req.body.gamename,
        detail: req.body.detail,
       imageurl: req.body.imageurl  
    })
    newHome.save((err,homeitem)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json("homeitem added sucessfully");
        }
    });
});

//updating the data
router.put('/:_id',(req,res)=>{
            
    Home.findOneAndUpdate({_id:req.params.id},{$set:{
        id:req.body.id,
        playername: req.body.playername,
        gamename:req.body.gamename,
        detail: req.body.detail,
       imageurl: req.body.imageurl      
    }},
        (err,result)=>{
            if(err)
            res.status(404).send(err);
         else
         res.status(200).send(result)
        });
});

//delete the data
router.delete('/:id',(req,res,next)=>{

    Home.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
        if (err)
            res.status(404).send(err);
        else
            res.status(200).send(result)
    })
})
module.exports=router;