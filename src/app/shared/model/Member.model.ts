import { ChildrenModel } from "./Children.model";
import { ParentModel } from "./Parent.model";

export interface MemberCheckIN {
    id_parent: number,
    ids_children: Array<number>,
    id_cult?: number,
}

export interface MemberCheckOut {
    id_cult: number,
    childrens: ChildrenModel[],
    responsible_checkin: ParentModel,
    responsible_checkout?: ParentModel,
    code?: string
}