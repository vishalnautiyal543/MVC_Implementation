import { Router } from "express";

const router = Router();


router.get('/',(req,res)=>{
    res.json({
        "message":"welcome to the tweet route"
    })
})

router.get('/:id',(req,res)=>{
    res.json({
        "message":"welcome to the tweet route",
        "id": req.params.id
    })
})

export default router;