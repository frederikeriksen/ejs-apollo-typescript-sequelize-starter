import { expect } from 'chai';

describe('ExampleTest', function() {
    it('responds with hello world', function() {
        const message: string = 'Hello world';
        expect(message).to.be.equal('Hello world');
    });
});