import {Injectable} from 'angular2/core';

import {DataStore} from './dataStore';

//declare var jQuery:any;

@Injectable()
export class GeneralService {

    //testing
    someNumber: number = 3;
    
    dataStore : DataStore = new DataStore();

    /////////////////API REQUESTS DEFINITION
    //constants, will be moved in a safe&build oriented place at some point
    private API_PATH = 'https://mscloudcupapi.azurewebsites.net/api';

    //get my profile; does require auth token in header
    private API_MY_PROFILE = this.API_PATH + '/Player/GetMyProfile';
    /////////////////////////////////////////

    myPlayerProfile: JSON;

    UpdateMyPlayerProfile() {
        jQuery.ajax({
            url: this.API_MY_PROFILE,
            headers: { 'AuthToken': this.dataStore.getAuthToken() },
            success:(data) => {
                console.log('get my profile data succesful : '+ JSON.stringify(data));
                this.myPlayerProfile = data;
            }
        });
    }

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
