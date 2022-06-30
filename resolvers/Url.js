const { GraphQLScalarType, Kind } = require("graphql");

exports.urlScalar = GraphQLScalarType({
  name: "URL",
  description: "custom Scalar type URL ",
  serializer(value) {},
  parseValue(value) {},
  parseLiteral(value) {},
});
