import { Mapper } from '../model/mapperinterface';
import { ExempleModel } from '../model/exemple.model';
import { ExempleEntity } from '../model/exemple.entity';
export class ExempleImplementationRepositoryMapper extends Mapper<ExempleEntity, ExempleModel> {
    mapFrom(param: ExempleEntity):ExempleModel {
        return {
            id: param.id,
            name: param.name,
            userName: param.userName,
            phoneNumber: param.phoneNumber,
            activationStatus: param.activationStatus
        };
    }
    mapTo(param: ExempleModel): ExempleEntity {
        return {
            id: param.id,
            name: param.name,
            userName: param.userName,
            phoneNumber: param.phoneNumber,
            activationStatus: param.activationStatus
        }
    }
}