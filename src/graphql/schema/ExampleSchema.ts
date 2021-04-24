import { gql } from 'apollo-server-express';

const ExampleSchema = gql`

    type Query {
        getExample(id: String): Example
    }

    type Mutation {
        createExample(example: ExampleInput): Example
    }

    type Example {
        id: ID
        exampleText: String
        createdAt: Int
    }

    input ExampleInput {
        exampleText: String
    }

`;

export default ExampleSchema;