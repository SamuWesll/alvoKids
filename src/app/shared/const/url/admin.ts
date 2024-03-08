import { environment } from "src/environments/environment";

export class AdminURL {
    static HTTP_LOGIN = environment.uriServe + '/admin/login';
    static HTTP_CHECK = environment.uriServe + '/admin/check';
}