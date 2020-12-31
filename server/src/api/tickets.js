const { Router } = require('express');
const { findByIdAndUpdate } = require('../model/ticket');
const Ticketentrys = require('../model/ticket')


const router = Router();

router.get('/', async (req,res,next) => {
    try {
        const entries = await Ticketentrys.find();
res.json(entries)
    } catch (error) {
      next(error)  
    }

})

router.post('/', async (req, res,next) =>{
    try {
        const logentry = new Ticketentrys(req.body) 
        const createdentry = await logentry.save()
        res.json(createdentry)
        
    } catch (error1) {
        if(error1.name === 'ValidationError'){
            res.status(442);
        }
        next(error1)
    }
   


})

router.get('/:id',async (req, res,next) =>{
console.log(req.params.id)
    try { 
        console.log(req.params.id)
        var ticketidfind = await Ticketentrys.findById(req.params.id).exec()
        console.log(ticketidfind)
        res.json(ticketidfind)
    } catch (error) {
        next(error)
    }
})


router.delete('/',async (req,res,next) => {
    try {
        console.log(req.body.id)
        var ticketid = await Ticketentrys.findByIdAndDelete(req.body.id).exec()
        res.json({
            message: 'Sucssesful Deletion of Ticket id: ' + req.body.id,
        });
    } catch (error) {
        next(error)
    }
})
router.patch('/', async (req,res,next) =>{
try {
    console.log(req.body.id)
    var ticketupdate = await Ticketentrys.findByIdAndUpdate(req.body.id,{STATUS: req.body.STATUS,URGENCY: req.body.URGENCY},{returnOriginal:false}).exec()
    res.json(ticketupdate)
} catch (error) {
    next(error)
}

})
module.exports = router;