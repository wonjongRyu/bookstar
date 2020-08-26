// dotenv module reads .env files
require("dotenv").config()

// import GraphQL server from graphql-yoga
import { GraphQLServer } from "graphql-yoga"

// set the PORT
const PORT = process.env.PORT || 4000;

// definite types of queries
const typeDefs = `
    type Query{
        hello: String!
    }
`;

// Example of a resolver
const resolvers = {
  Query: {
    hello: () => "Hi"
  }
};

// creat server 
const server = new GraphQLServer({ typeDefs, resolvers });


// start server
server.start({ port: PORT }, () =>
  console.log(`Server running on  http://localhost:${PORT}`)
);