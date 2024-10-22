import { Injectable } from "@angular/core";
import { IBaseMapping } from "../../intefaces/base-mapping.interface";
import { Paginated } from "../../../models/paginated/paginated.model";
import { Person } from "../../../models/person/person.model";
import { PersonRaw } from "../../../models/person/person.json-server.raw";

@Injectable({
    providedIn: 'root'
})
export class PeopleMappingJsonServer implements IBaseMapping<Person> {
    getPaginated(page:number, pageSize: number, pages:number, data:PersonRaw[]): Paginated<Person> {
        return {page:page, pageSize:pageSize, pages:pages, data:data.map<Person>((d:PersonRaw)=>{
            return this.getOne(d);
        })};
    }
    getOne(data: PersonRaw):Person {
        return {
            id:data.id, 
            name:data.nombre,
            surname:data.apellidos, 
            email:(data as any)["email"]??"",
            gender:(data as any)["genero"]??"",
            groupId:(data as any)["grupoId"]??"",
        }
    }
    getAdded(data: any):Person {
        throw new Error("Method not implemented.");
    }
    getUpdated(data: any):Person {
        throw new Error("Method not implemented.");
    }
    getDeleted(data: any):Person {
        throw new Error("Method not implemented.");
    }
}