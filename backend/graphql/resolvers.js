const {DateTimeResolver} = require("graphql-scalars");

const types = require('./resolvers/types');
const queries = require('./resolvers/queries');
const mutations = require('./resolvers/mutations');

require('dotenv').config();

module.exports = {
  DateTime: DateTimeResolver,

  ...types,
  ...queries,
  ...mutations
}