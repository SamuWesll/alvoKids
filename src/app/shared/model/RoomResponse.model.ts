import { ChildrenStorage } from "./Children.model";

export interface RoomResponse {
    id: number,
    name: string,
    total_vacancies: number,
    available_vacancies: number,
    vacancies_occupied: number,
    age_group: AgeGroup,
    sold_off: boolean,
    childrens: ChildrenStorage[],
}

interface AgeGroup {
    minimum: number,
    maximum: number,
}

export interface RoomRequest {
    name: string,
    total_vacancies: number,
    age_group: AgeGroup,
}