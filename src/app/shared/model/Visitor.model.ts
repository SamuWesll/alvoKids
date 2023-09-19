import { ChildrenModel } from "./Children.model"

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