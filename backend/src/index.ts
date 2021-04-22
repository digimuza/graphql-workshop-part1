import "reflect-metadata";
import { crudResolvers, relationResolvers } from "./@generated/typegraphql-prisma";

import express from "express";
import { ApolloServer } from "apollo-server-express";
import { AuthChecker, Authorized, buildSchema } from "type-graphql";
import * as P from 'ts-prime'
import { PrismaClient } from ".prisma/client";
import { applyResolversEnhanceMap } from './@generated/typegraphql-prisma/enhance';
// I like to use redis for this: https://github.com/tj/connect-redis

interface AppContext {
  prisma: PrismaClient
  userId: number
  req: Request,
  res: Response
}

export const customAuthChecker: AuthChecker<AppContext> = async (ctx, roles) => {
  console.debug(ctx, roles)
  return true; // or false if access is denied
};

(async () => {
  applyResolversEnhanceMap({
    Post: {
      _all: [Authorized()]
    }
  })
  const app = express();

  const prisma = new PrismaClient()

  const apolloServer = await P.canFail(async () => {
    return new ApolloServer({
      schema: await buildSchema({
        resolvers: [...crudResolvers, ...relationResolvers],
        validate: false,
        authChecker: customAuthChecker,

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
