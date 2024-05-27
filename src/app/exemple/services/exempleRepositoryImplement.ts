import { Observable } from 'rxjs';
import { ExempleModel } from '../datas/model/exemple.model';
export abstract class ExempleRepository {

    abstract exempleAction(): Observable<ExempleModel>;

}