import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import * as P from 'ts-prime'
import { PostCrudResolver, UserRelationsResolver } from "./generated/typegraphql-prisma";
import { PrismaClient } from ".prisma/client";
// I like to use redis for this: https://github.com/tj/connect-redis

(async () => {
  const app = express();

  const prisma = new PrismaClient()

  const apolloServer = await P.canFail(async () => {
    return new ApolloServer({
      schema: await buildSchema({
        resolvers: [UserRelationsResolver, PostCrudResolver],
        validate: false
      }),
      context: ({ req, res }) => ({ req, res, prisma })
    });
  })

  if (P.isError(apolloServer)) {
    console.log(apolloServer)
    return
  }


  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
