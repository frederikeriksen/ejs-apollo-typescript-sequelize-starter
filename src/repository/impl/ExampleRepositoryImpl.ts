import ExampleRepository from '../ExampleRepository';
import Example from '../../model/sequelize/Example';
import NotImplementedException from '../../exception/NotImplementedException';
import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
class ExampleRepositoryImpl implements ExampleRepository {

    public findById(id: string): Promise<Example> {
        return Example.findByPk(id)
            .then(example => {
                console.log('Found example: ' + JSON.stringify(example))
                return example;
            })
            .catch(err => {
                console.log('Error finding example: ' + err);
                throw err;
            });
    }

    public save(example: Example): Promise<Example> {
        return example.save();
    }

    public delete(example: Example): Promise<boolean> {
        throw new NotImplementedException();
    }

    public exampleSpecificMethod(example: Example): Promise<Example> {
        throw new NotImplementedException();
    }
}

export default ExampleRepositoryImpl;