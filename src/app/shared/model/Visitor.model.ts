import { ChildrenModel } from "./Children.model"
import { ParentModel } from "./Parent.model"

export interface Visitor {
    nameParent: string, 
    phoneNumber: number, 
    kinship: string
}

export interface VisitorCheckIN {
    id_cult: number,
    responsible: Visitor,
    childrens: ChildrenModel[],
}

export interface VisitorCheckINResponse {
    code: string,
}

export interface VisitorCheckOUTResponse {
    childrens: ParentModel[],
    id_cult: number,
    hours: string,
}