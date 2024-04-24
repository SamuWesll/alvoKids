export interface ChildrenStorage {
    fullName: string, 
    surname: string, 
    birthDate: string,
    flImage: boolean,
    flAllergic: boolean,
    allergic: string,
    observation?: string,
    status?: StatusChildren,
    idRoom?: number,
}

export enum StatusChildren {
    IN_MEET = "IN_MEET",
    AWAITING_CONFIRMATION_CHECK_IN = "AWAITING_CONFIRMATION_CHECK_IN",
    WITHDRAWN = "WITHDRAWN",
    CHECK_IN_FINISH = "CHECK_IN_FINISH",
}

export interface ChildrenModel extends ChildrenStorage {
    id?: number
}

export interface CheckModel {
    id: number,
    id_meeting: number,
    id_room: number,
    flag_visitor: boolean,
    code_check: string,
    children_payload: ChildrenModel,
}