exports.Tweets = {
  Author: ({ AuthorId }, args, { users }) => {
    return users.find((users) => users.id === AuthorId);
  },
  Stat: ({ TweetId }, args, { stats }) => {
    return stats.find((stat) => stats.tweetId === TweetId);
  },
};
