import Fastify from "fastify";
import mercurius from "mercurius";
import { schema } from "./schema";
import { resolvers } from "./resolvers/resolvers";

const server = Fastify();

server.get("/", async (request, reply) => {
  return { message: "Welcome to the GraphQL API!" };
});

server.register(mercurius, {
  schema,
  resolvers,
  graphiql: true, 
});

server.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
  if (err) throw err;
  console.log(`Server listening at ${address}`);
});
