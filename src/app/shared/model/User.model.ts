export interface LoginResponse {
    token: string,
    id_family?: number,
    admin?: boolean,
    login?: string,
    email?: string,
    nameFamily?: string,
}