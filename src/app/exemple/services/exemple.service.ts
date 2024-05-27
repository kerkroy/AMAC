import { Injectable } from '@angular/core';
import { ExempleRepository } from './exempleRepositoryImplement';
import { ExempleModel } from '../datas/model/exemple.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExempleService {

  constructor(private exempleRepository: ExempleRepository) {  }

  get exemple(): Observable<ExempleModel>{
    return this.exempleRepository.exempleAction();
  }

}
