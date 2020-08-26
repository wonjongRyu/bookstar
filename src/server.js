// dotenv module reads .env files
require("dotenv").config();

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema"

// set the PORT
const PORT = process.env.PORT || 4000;

// creat server 
// GraphQLServer needs props including typeDefs and resolvers as args 
const server = new GraphQLServer({ schema });

// Print Log. Express server is built in GraphQLServer
server.express.use(logger("dev"));

// start server
server.start({ port: PORT }, () =>
  console.log(`Server running on  http://localhost:${PORT}`)
);