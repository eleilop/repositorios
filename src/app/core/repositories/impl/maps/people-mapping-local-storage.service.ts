import { Injectable } from "@angular/core";
import { IBaseMapping } from "../../intefaces/base-mapping.interface";
import { Paginated } from "../../../models/paginated/paginated.model";
import { Person } from "../../../models/person/person.model";
import { PersonRaw } from "../../../models/person/person.local.raw";

@Injectable({
    providedIn: 'root'
})
export class PeopleLocalStorageMapping implements IBaseMapping<Person> {
    getPaginated(page:number, pageSize:number, pages:number, data: PersonRaw[]): Paginated<Person> {
        return {page:page, pageSize:pageSize, pages:pages, data:data.map<Person>((d:PersonRaw)=>{
            return this.getOne(d);
        })};
    }
    getOne(data: PersonRaw):Person {
        return {
            id:data.id, 
            name:data.name.first, 
            surname:data.name.last, 
            age:data.age,
            picture:{
                large:data.picture.large, 
                thumbnail:data.picture.thumbnail
            }};
    }
    getAdded(data: PersonRaw):Person {
        return this.getOne(data);
    }
    getUpdated(data: PersonRaw):Person {
        return this.getOne(data);
    }
    getDeleted(data: PersonRaw):Person {
        return this.getOne(data);
    }
}