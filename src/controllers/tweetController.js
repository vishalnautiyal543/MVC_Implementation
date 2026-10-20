export const getTweets = (req, res) => {
  
    res.status(200).json({ message: 'Get tweets' });

};

export const getTweetById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Get tweet with ID: ${id}` });

};


export const createTweet = (req, res) => {
    const { content } = req.body;
    res.status(201).json({ message: 'Tweet created', content });
}