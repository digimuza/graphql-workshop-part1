import { ApolloError } from 'apollo-server-core';

export const userNotFoundError = (userId: string) => new ApolloError(`User with ${userId} not found`)