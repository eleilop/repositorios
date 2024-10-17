import { Model } from "../base.model";
import { Person } from "../person/person.model";

export interface Task extends Model{
    owner:Person,
    date:Date
}