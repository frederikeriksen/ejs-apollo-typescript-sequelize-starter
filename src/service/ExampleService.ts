import Example from '../model/sequelize/Example';
import { Observable } from 'rxjs';

interface ExampleService {
    getExample(id: string): Observable<Example>
    createExample(exampleText: string): Observable<Example>
}

export default ExampleService;

