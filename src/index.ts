import Fastify from "fastify";
import FastifyExpress from "@fastify/express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { schema } from "./schema.js";
import { resolvers } from "./resolvers/resolvers.js";
import cors from "cors";
import json from "body-parser";

const server = Fastify({ logger: true });

// Register Fastify Express
await server.register(FastifyExpress);

// Create an Apollo Server instance
const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

// Start the Apollo Server
await apolloServer.start();
server.use(cors());
server.use(json());

// Apply Apollo GraphQL middleware
server.use("/graphql", expressMiddleware(apolloServer));

// Health check endpoint
server.get("/health", async (request, reply) => {
  return { status: "ok" };
});

// Start the Fastify server
const host = process.env.HOST || "0.0.0.0";
const port = 3000;

server.listen({ port: 3000, host }, (err, address) => {
  if (err) throw err;
  console.log(`Server listening at ${address}`);
});
