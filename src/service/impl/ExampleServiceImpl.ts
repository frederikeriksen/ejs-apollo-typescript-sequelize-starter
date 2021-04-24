import ExampleService from '../ExampleService';
import ExampleRepository from '../../repository/ExampleRepository';
import Example from '../../model/sequelize/Example';
import TYPES from '../../config/Types';
import { inject, injectable } from 'inversify';
import { Observable, from } from 'rxjs';
import { v4 } from 'uuid';

@injectable()
class ExampleServiceImpl implements ExampleService {

    @inject(TYPES.ExampleRepository)
    private repository: ExampleRepository;

    public getExample = (id: string): Observable<Example> => {
        return from(this.repository.findById(id));
    }

    public createExample = (exampleText: string): Observable<Example> => {
        const newExample: Example = Example.build({
            id: v4(),
            exampleText: exampleText
        });
        
        return from(this.repository.save(newExample));
    }
    
}

export default ExampleServiceImpl;