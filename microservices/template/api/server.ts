import { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";
import { context } from "./context";

export const appendApolloServer = async (app: Application) => {
  const path = "/";
  const server = new ApolloServer({ schema, context, mocks: true });
  await server.start();
  server.applyMiddleware({ app, path });
  return app;
};
