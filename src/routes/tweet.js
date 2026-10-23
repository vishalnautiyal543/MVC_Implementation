import { Router } from "express";
import { getTweetById, getTweets,createTweet } from "../controllers/tweetController.js";
// import { createTweetManualValidator } from "../validators/tweetManualValidator.js";
import {validate} from "../validators/zodValidator.js"
import {tweetZodSchema} from "../validators/tweetZodSchema.js"

const router = Router();


router.get('/',getTweets)

router.get('/:id', getTweetById)

router.post('/create',validate(tweetZodSchema),createTweet)

export default router;