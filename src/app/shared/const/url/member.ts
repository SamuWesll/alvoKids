import { environment } from "src/environments/environment";

export class MemberUrl {
    static HTTP_GET_CHECKOUT = environment.uriServe + '/member/check-out';
    static HTTP_POST_CHECKIN = environment.uriServe + '/member/check-in';
}