import ExampleSchema from './schema/ExampleSchema';
import Resolver from './resolver/Resolver';
import TYPES from '../config/Types';
import container from '../config/Inversify';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes([ExampleSchema]);
const exampleResolver = container.get<Resolver>(TYPES.ExampleResolver).createResolver();
const resolvers = mergeResolvers([exampleResolver]);
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const apolloServer = new ApolloServer({
    schema,
    //formatError: ErrorHandler
});

export default apolloServer;

