import { Injectable } from "@angular/core";
import { IBaseMapping } from "../../intefaces/base-mapping.interface";
import { Group } from "src/app/core/models/group/group.model";
import { GroupRaw } from "src/app/core/models/group/group.json-server.raw";
import { Paginated } from "src/app/core/models/paginated/paginated.model";

@Injectable({
    providedIn: 'root'
})
export class GroupsMappingJsonServer implements IBaseMapping<Group> {
    getPaginated(page:number, pageSize: number, pages:number, data:GroupRaw[]): Paginated<Group> {
        return {page:page, pageSize:pageSize, pages:pages, data:data.map<Group>((d:GroupRaw)=>{
            return this.getOne(d);
        })};
    }
    getOne(data: GroupRaw):Group {
        return {
            id:data.id, 
            nombre:data.nombre,
        };
    }
    getAdded(data: any):Group {
        throw new Error("Method not implemented.");
    }
    getUpdated(data: any):Group {
        throw new Error("Method not implemented.");
    }
    getDeleted(data: any):Group {
        throw new Error("Method not implemented.");
    }
}