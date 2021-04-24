import Resolver from '../Resolver';
import ExampleService from '../../../service/ExampleService';
import TYPES from '../../../config/Types';
import { inject, injectable } from 'inversify';

@injectable()
class ExampleResolverImpl implements Resolver {

    @inject(TYPES.ExampleService)
    private service: ExampleService;

    public createResolver = (): any => {
        return {
            Query: {
                getExample: (root: any, args: { [key: string]: any }) => this.service.getExample(args.id).toPromise()
            },
            Mutation: {
                createExample: (root: any, args: { [key: string]: any }) => {
                    console.log(JSON.stringify(args));
                    return this.service.createExample(args.example.exampleText).toPromise();
                }
            }
        }
    }
}

export default ExampleResolverImpl;