import { Router } from "express";
import { getTweetById, getTweets,createTweet } from "../controllers/tweetController.js";

const router = Router();


router.get('/',getTweets)

router.get('/:id', getTweetById)

router.post('/create',createTweet)

export default router;