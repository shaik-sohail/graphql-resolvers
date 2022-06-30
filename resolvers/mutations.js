const { v4: uuid } = require("uuid");
const { date } = require("./Date");
exports.mutations = {
  createTweet: (parent, { body }, { db }) => {
    const newTweet = {
      id: uuid(),
      body: body,
      date: date,
      Author: {
        username: "sohail",
        first_name: "sonu",
        last_name: "shaik",
        name: "sonu",
        avatar_url: "",
      },
      stats: {
        views: 121,
        likes: 121,
        retweets: 12,
        responses: 13,
      },
      isRead: false,
    };
    db.tweets.push(newTweet);
    return newTweet;
  },
  deleteTweet: (parent, { id }, { db }) => {
    const tweet = db.tweets.find((tweet) => tweet.id === id);
    db.tweets = db.tweets.filter((tweet) => tweet.id !== id);
    return tweet;
  },
  markTweetRead: (parent, { id }, { db }) => {
    db.tweets = db.tweets.map((tweet) => {
      if (tweet.id === id)
        return {
          ...tweet,
          isRead: true,
        };
      else return tweet;
    });
  },
};
