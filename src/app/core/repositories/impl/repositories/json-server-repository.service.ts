// src/app/repositories/impl/base-repository-http.service.ts
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IBaseRepository } from '../../intefaces/base-repository.interface';
import { API_URL_TOKEN, REPOSITORY_MAPPING_TOKEN, RESOURCE_NAME_TOKEN } from '../../repository.tokens';
import { Model } from '../../../models/base.model';
import { IBaseMapping } from '../../intefaces/base-mapping.interface';
import { Paginated } from '../../../models/paginated/paginated.model';
import { BaseRepositoryHttpService } from './base-repository-http.service';
import { PaginatedRaw } from '../../../models/paginated/paginated.raw';

@Injectable({
  providedIn: 'root'
})
export class JsonServerRepositoryService<T extends Model> extends BaseRepositoryHttpService<T> {

  constructor(
    http: HttpClient,
    @Inject(API_URL_TOKEN) override apiUrl: string, // URL base de la API para el modelo
    @Inject(RESOURCE_NAME_TOKEN) override resource:string, //nombre del recurso del repositorio
    @Inject(REPOSITORY_MAPPING_TOKEN) override mapping:IBaseMapping<T>
  ) {
    super(http, apiUrl, resource, mapping)
    this.apiUrl = apiUrl
  }

  override getAll(page:number, pageSize:number): Observable<Paginated<T>> {
    return this.http.get<PaginatedRaw<T>>(`${this.apiUrl}/${this.resource}/?_page=${page}&_per_page=${pageSize}`).pipe(map(res=>this.mapping.getPaginated(page, pageSize, res.pages, res.data)));
  }
}
