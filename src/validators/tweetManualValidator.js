export const createTweetManualValidator = (req, res, next) => {
    if(!req.body.content || req.body.content.trim() === ""){
        return res.status(400).json({ message: "Content is required" });
    }

    if(req.body.content.length > 280){
        return res.status(400).json({ message: "Content exceeds 280 characters" });
    }

    next();
}