import { RoomResponse } from "./RoomResponse.model";

export interface CultResponse {
    id_cult: number,
    name: string,
    local: string,
    date: Date,
    rooms?: Array<RoomResponse>,
    status?: string,
}