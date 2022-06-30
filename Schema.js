const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Tweet {
    id: ID!
    # The tweet text. No more than 140 characters!
    body: String
    # When the tweet was published
    date: Date
    # Who published the tweet
    Author: User
    # Views, retweets, likes, etc
    Stats: Stat
  }
  scalar Url
  scalar Date
  type User {
    id: ID!
    username: String
    first_name: String
    last_name: String
    full_name: String
    name: String @deprecated
    avatar_url: Url
  }
  type Stat {
    views: Int
    likes: Int
    retweets: Int
    responses: Int
  }
  type Notification {
    id: ID
    date: Date
    type: String
  }
  type Meta {
    count: Int
  }

  type Query {
    tweet(id: ID!): Tweet
    tweets(
      limit: Int
      skip: Int
      sort_field: String
      sort_order: String
    ): [Tweet]
    tweetsMeta: Meta
    user(id: ID!): User
    notifications(limit: Int): [Notification]
    notificationsMeta: Meta
  }
`;
