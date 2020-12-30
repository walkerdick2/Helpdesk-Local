const { Router } = require('express');
const Ticketentrys = require('../model/ticket')


const router = Router();

router.get('/', (req,res,next) => {
    res.json({
        message: '🎧'
    })
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

module.exports = router;