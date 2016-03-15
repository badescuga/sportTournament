//https://www.npmjs.com/package/angular2-local-storage
import {LocalStorage} from 'angular2-local-storage/local_storage';

//this will be the class that helps us interact with local storage data (for cache)
export class DataStore {

    private _localStorage = new LocalStorage();

    //my auth token; will be hardcoded till we implement the login
    getAuthToken(): string {
        //return this._localStorage.get('cachedAuthToken');
        return 'f3747c7d-804e-408c-a04f-27b861c062d5'; //hardcoded
    }

    setAuthToken(token: string) {
        this._localStorage.set('cachedAuthToken', token);
    }

    //my player profile
    getCachedMyProfileData():JSON {
           var temp: string = this._localStorage.get('cachedMyProfileData');
        if (temp != null) {
            return JSON.parse(this._localStorage.get('cachedMyProfileData'));
        }
        else {
            return null;
        }
    }

    getCachedMyProfileDataTime() {
        return this._localStorage.get('cachedMyProfileDataTime');
    }

    setCachedMyProfileData(data: JSON) {
        this._localStorage.set('cachedMyProfileData', JSON.stringify(data));
        this._localStorage.set('cachedMyProfileDataTime', Date.now().toString()); // not good; should use server time

    }


    //tournament data
    getCachedTournamentData(): JSON {
        var temp: string = this._localStorage.get('cachedTournamentData');
        if (temp != null) {
            return JSON.parse(this._localStorage.get('cachedTournamentData'));
        }
        else {
            return null;
        }
    }

    getCachedTournamentDataTime() {
        return this._localStorage.get('cachedTournamentDataTime');
    }

    setCachedTournamentData(data: JSON) {
        this._localStorage.set('cachedTournamentData', JSON.stringify(data));
        this._localStorage.set('cachedTournamentDataTime', Date.now().toString()); // not good; should use server time
    }

    //team data
    getCachedTeamData(teamId: string): JSON {

        var temp: string = this._localStorage.get('cachedTeamData' + teamId);
        if (temp != null) {
            return JSON.parse(this._localStorage.get('cachedTeamData' + teamId));
        }
        else {
            return null;
        }
    }

    getCachedTeamDataTime(teamId: string) {
        return this._localStorage.get('cachedTeamDataTime' + teamId);
    }

    setCachedTeamData(teamId: string, data: JSON) {
        this._localStorage.set('cachedTeamData' + teamId, JSON.stringify(data));
        this._localStorage.set('cachedTeamDataTime' + teamId, Date.now().toString()); // not good; should use server time
    }

    //player data
    getCachedPlayerData(playerId: string): JSON {
        var temp: string = this._localStorage.get('cachedPlayerData' + playerId);
        if (temp != null) {
            return JSON.parse(this._localStorage.get('cachedPlayerData' + playerId));
        }
        else {
            return null;
        }
    }

    getCachedPlayerDataTime(playerId: string): string {
        return this._localStorage.get('cachedPlayerDataTime' + playerId);
    }

    setCachedPlayerData(playerId: string, data: JSON) {
        this._localStorage.set('cachedPlayerData' + playerId, JSON.stringify(data));
        this._localStorage.set('cachedPlayerDataTime' + playerId, Date.now().toString()); // not good; should use server time
    }



}