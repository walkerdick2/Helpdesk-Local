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
        console.error(error1)
        next(error1)
    }
   


})

router.get('/:id',async (req, res, next) =>{
console.log(req.params.id)
    try { 
        console.log(req.params.id)
        var ticketidfind = await Ticketentrys.findById(req.params.id).exec()
        console.log(ticketidfind)
        res.json(ticketidfind)
    } catch (error) {
        console.error(error)
        next(error)
    }
})


router.delete('/:id1',async (req,res,next) => {
    try {
        console.log(req.params.id1)
        var ticketid = await Ticketentrys.findByIdAndDelete(req.params.id1).exec()
        res.json({
            message: 'Sucssesful Deletion of Ticket id: ' + req.params.id1
        });
    } catch (error) {
        console.error(error)
        next(error)
    }
})
router.patch('/:pid', async (req,res,next) =>{
try {
    console.log(req.params.pid)
    var ticketupdate =  await Ticketentrys.findByIdAndUpdate(req.params.pid,{STATUS: req.body.STATUS,URGENCY: req.body.URGENCY},{returnOriginal:false}).exec()
    res.json(ticketupdate)
} catch (error) {
    console.error(error)
    next(error)
}

})
module.exports = router;