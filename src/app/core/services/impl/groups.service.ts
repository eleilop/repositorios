import { Inject, Injectable } from "@angular/core";
import { BaseService } from "./base-service.service";
import { Group } from "../../models/group/group.model";
import { IGroupsService } from "../interfaces/groups-service.interface";
import { IGroupsRepository } from "../../repositories/intefaces/group-repository.interface";
import { GROUPS_REPOSITORY_TOKEN } from "../../repositories/repository.tokens";

@Injectable({
    providedIn: 'root'
})
export class GroupsService extends BaseService<Group> implements IGroupsService {
    constructor(
        @Inject(GROUPS_REPOSITORY_TOKEN) repository: IGroupsRepository
    ) {
        super(repository);
    }

    // Implementa métodos específicos si los hay
}