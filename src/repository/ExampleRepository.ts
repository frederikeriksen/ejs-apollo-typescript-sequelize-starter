import Example from '../model/sequelize/Example';
import Repository from './Repository';

interface ExampleRepository extends Repository<Example> {
    exampleSpecificMethod(example: Example): Promise<Example>
}

export default ExampleRepository;