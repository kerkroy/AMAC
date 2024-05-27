import { Observable, map, of } from 'rxjs';
import * as exemple from '../../../../assets/mocks/exemple.mock.json'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExempleImplementationRepositoryMapper } from './exemple.mapper';
import { ExempleModel } from '../model/exemple.model';
import { ExempleRepository } from '../../services/exempleRepositoryImplement';
import { ExempleEntity } from '../model/exemple.entity';
@Injectable({
    providedIn: 'root',
})
export class ExempleImplementationRepository extends ExempleRepository {

    userMapper = new ExempleImplementationRepositoryMapper();
    constructor() {
        super();
    }

    exempleAction(): Observable<ExempleModel> {
        return of(exemple as ExempleEntity).pipe(map(this.userMapper.mapFrom))
    }
}