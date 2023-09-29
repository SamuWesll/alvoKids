export interface ChildrenStorage {
    fullName: string, 
    surname: string, 
    birthDate: string,
    flImage: boolean,
    flAllergic: boolean,
    allergic: string,
    observation?: string,
    status?: StatusChildren,
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