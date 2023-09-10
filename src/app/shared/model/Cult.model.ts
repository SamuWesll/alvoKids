import { RoomResponse } from "./RoomResponse.model";

export interface CultResponse {
    name: string,
    local: string,
    date: Date,
    rooms: Array<RoomResponse>,
}