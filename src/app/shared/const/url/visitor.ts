import { environment } from 'src/environments/environment';

export class VisitorURL {
    
    static HTTP_GET_CULT = environment.uriServe + '/cult/rooms';
    static HTTP_POST_CHECKIN = environment.uriServe + '/visitor/check-in';

}