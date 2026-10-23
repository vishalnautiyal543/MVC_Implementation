export const validate =(schema)=>{
    return async (req,res,next)=>{
        try{
            console.log(req.body);
            
            await schema.parseAsync(req.body)
            next()
        }catch(err){
            res.status(400).json({message:err.errors})
        }
    }
}