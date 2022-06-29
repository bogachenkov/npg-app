import { User } from "@prisma/client";
import { GraphQLContext } from "../context";

interface UserArgs {
  username: string;
  email: string;
  password: string;
}

const resolvers = {
  Query: {
    info: () => `API description`,
    users: async (parent: unknown, args: {}, context: GraphQLContext) => {
      return context.prisma.user.findMany();
    }
  },
  User: {
    id: (parent: User) => parent.id,
    username: (parent: User) => parent.username,
  },
  Mutation: {
    addUser: async(
      parent: unknown,
      args: UserArgs,
      context: GraphQLContext,
    ) => {
      const user = await context.prisma.user.create({
        data: args
      });
      return user;
    }
  }
}

export default resolvers;