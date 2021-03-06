import "reflect-metadata";

import express from "express";
import { ApolloServer } from "apollo-server-express";
import { AuthChecker, Authorized, buildSchema, Extensions } from "type-graphql";
import * as P from 'ts-prime'
import { PrismaClient } from ".prisma/client";
import { applyResolversEnhanceMap, applyOutputTypesEnhanceMap, applyInputTypesEnhanceMap } from './@generated/typegraphql-prisma/enhance';
import { HelloWorldResolver } from "./resolvers/HelloWorldResolver";
import { AppContext } from "./@types";
import { IsEmail } from "class-validator";
import { crudResolvers, relationResolvers } from './@generated/typegraphql-prisma/index';
// I like to use redis for this: https://github.com/tj/connect-redis



export const customAuthChecker: AuthChecker<AppContext> = async (ctx, roles) => {
  console.debug(ctx, roles)

  return true; // or false if access is denied
};

(async () => {
  applyResolversEnhanceMap({
    Post: {
      _all: [Authorized()],

    },

    User: {
      _all: [Authorized()],
    }
  })

  applyInputTypesEnhanceMap({
    UserCreateWithoutPostsInput: {
      fields: {
        email: [IsEmail()]
      }
    },
    UserWhereUniqueInput: {
      fields: {
        email: [IsEmail()]
      }
    },
    UserCreateInput: {
      fields: {
        email: [IsEmail()]
      }
    }
  })
  const app = express();

  const prisma = new PrismaClient()

  const apolloServer = await P.canFail(async () => {
    return new ApolloServer({
      schema: await buildSchema({
        resolvers: [
          ...crudResolvers,
          ...relationResolvers,
          HelloWorldResolver
        ],
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
