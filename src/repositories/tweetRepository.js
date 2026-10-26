import { Tweet } from "../schema/tweet";

export const createTweet = async ({body}) =>{
    try {
        const tweet = await Tweet.create({body})
        return tweet
    } catch (error) {
        throw error;
    }
   
}