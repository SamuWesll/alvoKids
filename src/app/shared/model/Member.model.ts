import { ChildrenModel } from "./Children.model";
import { ParentModel } from "./Parent.model";

export interface MemberCheckIN {
    id_parent: number,
    childrens: Array<ChildrenCheckIn>,
    id_cult?: number,
}

export interface MemberCheckOut {
    id_cult: number,
    childrens: ChildrenModel[],
    responsible_checkin: ParentModel,
    responsible_checkout?: ParentModel,
    code?: string
}

export interface LoginCreateRequest {
    name_family: string,
    email: string,
    login: string,
    password: string,
}

interface ChildrenCheckIn {
    id_children: number,
    id_room: number,
}