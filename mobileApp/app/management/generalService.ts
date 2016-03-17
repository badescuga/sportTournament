import {Injectable} from 'angular2/core';

import {DataStore} from './dataStore';

declare var jQuery: any;

@Injectable()
export class GeneralService {

    private _dataStore: DataStore = new DataStore();

    /////////////////API REQUESTS DEFINITION
    //constants, will be moved in a safe&build oriented place at some point
    private API_PATH = 'https://mscloudcupapi.azurewebsites.net/api';

    //get my profile; does require auth token in header
    private API_MY_PROFILE = this.API_PATH + '/Player/GetMyProfile';
    private API_GET_TOURNAMENT_DETAILS = this.API_PATH + '/Tournament/GetTournamentDetails';
    private API_GET_TEAM_DETAILS = this.API_PATH + '/Team/GetTeamDetails'; // needs 'TeamID' param
    private API_GET_PLAYER_SUMMARY = this.API_PATH + '/Player/PlayerSummary'; // needs 'PlayerID' param
    private API_GET_MY_TEAM_DETAILS = ''; // not implemented yet; Talk to Razvan

    /////////////////////////////////////////

    ///////////player profile

    GetMyPlayeProfile(): JSON {
        return this._dataStore.getCachedMyProfileData();
    }

    UpdateMyPlayerProfile(errorCallback, finishCallback) {
        jQuery.ajax({
            url: this.API_MY_PROFILE,
            headers: { 'AuthToken': this._dataStore.getAuthToken() },
            success: (data, textStatus) => {
                console.log('get my profile data succesful: ' + JSON.stringify(data));
                this._dataStore.setCachedMyProfileData(data); //here i should check the json (after i pass to the request my last update time) if the json has changed or nor
                finishCallback(true); //should pass a boolean telling if the data has changed
            },
            error: (xhr, textStatus, errorThrown) => {
                console.log(`get my profile data failed: textStatus: ${textStatus} error: ${errorThrown.toString()} `)
                errorCallback(textStatus, errorThrown);
            }
        });
    }

    /////////////tournament data
    GetTournamentData(): JSON {
        return this._dataStore.getCachedTournamentData();
    }

    UpdateTournamentData(errorCallback, finishCallback) {
        jQuery.ajax({
            url: this.API_GET_TOURNAMENT_DETAILS,
            //   headers: { 'AuthToken': this._dataStore.getAuthToken() }, // no auth required, general API
            success: (data, textStatus) => {
                 console.log('get my tournament data succesful: ' + JSON.stringify(data));
                this._dataStore.setCachedTournamentData(data); //here i should check the json (after i pass to the request my last update time) if the json has changed or nor
                finishCallback(true); //should pass a boolean telling if the data has changed
            },
            error: (xhr, textStatus, errorThrown) => {
                console.log(`get my tournament data failed: textStatus: ${textStatus} error: ${errorThrown.toString()} `)
                errorCallback(textStatus, errorThrown);
            }
        });
    }
    
    //////////////team data
    GetTeamData(teamId:number): JSON {
        return this._dataStore.getCachedTeamData(teamId);
    }
    
     UpdateTeamData(teamId, errorCallback, finishCallback) {
         var uri = this.API_GET_TEAM_DETAILS+'?TeamID='+teamId; // need to find a js uri ORM
         console.log('resulting uri: '+uri);
        jQuery.ajax({
            url: uri,
            //   headers: { 'AuthToken': this._dataStore.getAuthToken() }, // no auth required, general API
            success: (data, textStatus) => {
                 console.log('get team data succesful: ' + JSON.stringify(data));
                this._dataStore.setCachedTeamData(teamId, data); //here i should check the json (after i pass to the request my last update time) if the json has changed or nor
                finishCallback(true); //should pass a boolean telling if the data has changed
            },
            error: (xhr, textStatus, errorThrown) => {
                console.log(`get team data failed: textStatus: ${textStatus} error: ${errorThrown.toString()} `)
                errorCallback(textStatus, errorThrown);
            }
        });
    }

}
