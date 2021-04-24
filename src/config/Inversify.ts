import TYPES from './Types';
import ExampleRepository from '../repository/ExampleRepository';
import ExampleRepositoryImpl from '../repository/impl/ExampleRepositoryImpl';
import ExampleService from '../service/ExampleService';
import ExampleServiceImpl from '../service/impl/ExampleServiceImpl';
import Resolver from '../graphql/resolver/Resolver';
import ExampleResolver from '../graphql/resolver/impl/ExampleResolverImpl';
import { Container } from 'inversify';

const container = new Container();
container.bind<ExampleRepository>(TYPES.ExampleRepository).to(ExampleRepositoryImpl);
container.bind<ExampleService>(TYPES.ExampleService).to(ExampleServiceImpl);
container.bind<Resolver>(TYPES.ExampleResolver).to(ExampleResolver);

export default container;