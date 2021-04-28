// api/index.ts
import express from "express";
import { appendApolloServer } from "./server";
const PORT = process.env.PORT || 8080;

const bootstrap = async (port: number) => {
  const app = express();
  
  try {
    await appendApolloServer(app)
    await app.listen({ port });
    console.log(`🚀 Template Server ready`);
  } catch (error) {
    console.error(error);
  }
};

bootstrap(Number(PORT));
