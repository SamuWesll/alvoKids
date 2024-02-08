import { ChildrenModel } from "./Children.model"
import { ParentModel } from "./Parent.model"

export interface Visitor {
    nameParent: string, 
    phoneNumber: number, 
    kinship: string
}

export interface VisitorCheckIN {
    id_cult: number,
    responsible?: Visitor | ParentModel,
    childrens: ChildrenModel[],
}

export interface VisitorCheckINResponse {
    code: string,
}

export interface VisitorCheckOUTResponse {
    childrens: ChildrenModel[],
    id_cult: number,
    hours: string,
}

export interface VisitorCheckOutRequest {
    code: string,
    codes_children: Number[],
}