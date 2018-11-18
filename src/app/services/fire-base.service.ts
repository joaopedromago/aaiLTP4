import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FireBaseService {
    constructor() {
    }

    private config: any = {
        apiKey: 'AIzaSyB9XxJW9R3wN1p_FtEpCWHoZpgZujhNZ5U',
        authDomain: 'aai-ltp4.firebaseapp.com',
        databaseURL: 'https://aai-ltp4.firebaseio.com',
        projectId: 'aai-ltp4',
        storageBucket: 'aai-ltp4.appspot.com',
        messagingSenderId: '1089974193374'
    };

}
