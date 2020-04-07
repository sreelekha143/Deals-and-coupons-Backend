const express=require('express');
const router=express.Router();
const News=require('../model/newsmodel')
//retriving the data from database

router.get('/news',(req,res,next)=>{
    News.find(function(err,mesg){
        if(err){
            res.json(err );
        }
        else{
            res.json(mesg);
        }
    })
   
})



//Get the data by the id
router.get('/:id', (req, res) => {

    News.findById({ _id: req.params.id }, (err, result) => {
        if (err)
            res.status(404).send(err);
        else
            res.status(200).send(result)
    })
})
//Inserting the data
router.post('/news',(req,res,next)=>{
    let newNews= new News({
        id:req.body.id,
        name: req.body.name,
        detail: req.body.detail,
       imageurl: req.body.imageurl  
    })
    newNews.save((err,newsitem)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json("newsitem added sucessfully");
        }
    })
})


//updating the data
router.put('/:_id',(req,res)=>{
            
    News.findOneAndUpdate({_id:req.params.id},{$set:{
        id:req.body.id,
        name: req.body.name,
        detail: req.body.detail,
       imageurl: req.body.imageurl    
    }},
        (err,result)=>{
            if(err)
            res.status(404).send(err);
         else
         res.status(200).send(result)
        })
})


//delete the data
router.delete('/:id',(req,res,next)=>{

    News.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
        if (err)
            res.status(404).send(err);
        else
            res.status(200).send(result)
    })
})
module.exports=router;