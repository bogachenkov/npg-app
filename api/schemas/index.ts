import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';
import { usersTypeDef } from './users';

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [usersTypeDef]
});