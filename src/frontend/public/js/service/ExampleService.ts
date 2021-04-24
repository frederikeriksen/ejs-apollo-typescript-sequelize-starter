import apiClient from '../client/ApiClient';
import Example from '../model/Example';

const createExampleQuery = `mutation createExample($example: ExampleInput!) { 
    createExample(example: $example) {
        id, 
        exampleText
    }
}`

const getExampleQuery = `query getExample($id: String!) {
    getExample(id: $id) {
        id, 
        exampleText
    }
}`

function getExample(id: string) {
    return apiClient.query(getExampleQuery, {
        id: id
    });
}

function createExample(example: Example) {
    return apiClient.query(createExampleQuery, {
        example: example
    });
}

export default {
    getExample,
    createExample
}