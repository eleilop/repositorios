// src/app/core/repositories/interfaces/base-repository.interface.ts
import { Paginated } from '../../models/paginated/paginated.model';

export interface IBaseMapping<T> {
  getPaginated(page:number, pageSize: number, pages:number, data:any):Paginated<T>;
  getOne(data:any):T;
  getAdded(data:any):T;
  getUpdated(data:any):T;
  getDeleted(data:any):T;
}