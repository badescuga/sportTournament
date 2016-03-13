import {Injectable} from 'angular2/core';

import {DataStore} from './dataStore';

@Injectable()
export class GeneralService {
    someNumber: number = 3;
    
    get tournamentData() {
        return {}; //need to come up with dummy data
    }
    get teamData() {
        return {};
    }
    get playerData() {
        return {};
    }
}
