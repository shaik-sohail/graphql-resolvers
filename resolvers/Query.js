exports.Query = {
  tweet: (parent, { id }, { tweets }) => {
    return tweets.find((tweet) => tweet.id === id);
  },
  tweets: (parent, args, { tweets }) => {
    const { limit, skip, sort_field, sort_order } = args;
    let filteredTweetes = tweets;
    if (limit > 0) {
      filteredTweetes = filteredTweetes.slice(0, limit);
    }
    if (skip !== null) {
      filteredTweetes = filteredTweetes.slice(skip, filteredTweetes.length);
    }
    if (sort_field) {
      filteredTweetes = filteredTweetes.sort(
        (a, b) => a.sort_field - b.sort_field
      );
      if (sort_order === "dsc") {
        filteredTweetes = [...filteredTweetes].reverse();
      }
    }
  },
  tweetsMeta: (parent, args, { tweets }) => {
    const Meta = {
      count: tweets.length,
    };
    return Meta;
  },
  user: (parent, { id }, { users }) => {
    return users.find((user) => user.id === id);
  },
  notifications: (parent, { limit }, { notifications }) => {
    return notifications.slice(0, limit);
  },
  notificationsMeta: (parent, args, context) => {
    const Meta = {
      count: context.notifications.length,
    };
    return Meta;
  },
};
