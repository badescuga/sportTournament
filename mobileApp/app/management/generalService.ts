import {Injectable} from 'angular2/core';

import {DataStore} from './dataStore';

//declare var jQuery:any;

@Injectable()
export class GeneralService {

    //testing
    someNumber: number = 3;

    private _dataStore: DataStore = new DataStore();

    /////////////////API REQUESTS DEFINITION
    //constants, will be moved in a safe&build oriented place at some point
    private API_PATH = 'https://mscloudcupapi.azurewebsites.net/api';

    //get my profile; does require auth token in header
    private API_MY_PROFILE = this.API_PATH + '/Player/GetMyProfile';
    /////////////////////////////////////////

    myPlayerProfile: any = this._dataStore.getCachedMyProfileData();

    
    UpdateMyPlayerProfile(failCallback) {
        jQuery.ajax({
            url: this.API_MY_PROFILE,
            headers: { 'AuthToken': this._dataStore.getAuthToken() },
            success: (data, textStatus) => {
                console.log('get my profile data succesful: ' + JSON.stringify(data));
                this.myPlayerProfile = data;
                this._dataStore.setCachedMyProfileData(data);
            },
            error: (xhr, textStatus, errorThrown) => {
                console.log(`get my profile data failed: textStatus: ${textStatus} error: ${errorThrown.toString()} `)
                failCallback(textStatus, errorThrown);
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
