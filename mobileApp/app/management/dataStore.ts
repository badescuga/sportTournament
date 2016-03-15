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
    getCachedMyProfileData() {
        return this._localStorage.get('cachedMyProfileData');
    }

    getCachedMyProfileDataTime() {
        return this._localStorage.get('cachedMyProfileDataTime');
    }

    setCachedMyProfileData(data: any) {
        this._localStorage.set('cachedMyProfileData', data);
        this._localStorage.set('cachedMyProfileDataTime', Date.now().toString()); // not good; should use server time

    }


    //tournament data
    getCachedTournamentData() {
        return this._localStorage.get('cachedTournamentData');
    }

    getCachedTournamentDataTime() {
        return this._localStorage.get('cachedTournamentDataTime');
    }

    setCachedTournamentData(data: any) {
        this._localStorage.set('cachedTournamentData', data);
        this._localStorage.set('cachedTournamentDataTime', Date.now().toString()); // not good; should use server time
    }

    //team data
    getCachedTeamData(teamId: string) {
        return this._localStorage.get('cachedTeamData' + teamId);
    }

    getCachedTeamDataTime(teamId: string) {
        return this._localStorage.get('cachedTeamDataTime' + teamId);
    }

    setCachedTeamData(teamId: string, data: any) {
        this._localStorage.set('cachedTeamData' + teamId, data);
        this._localStorage.set('cachedTeamDataTime' + teamId, Date.now().toString()); // not good; should use server time
    }

    //player data
    getCachedPlayerData(playerId: string) {
        return this._localStorage.get('cachedPlayerData' + playerId);
    }

    getCachedPlayerDataTime(playerId: string) {
        return this._localStorage.get('cachedPlayerDataTime' + playerId);
    }

    setCachedPlayerData(playerId: string, data: any) {
        this._localStorage.set('cachedPlayerData' + playerId, data);
        this._localStorage.set('cachedPlayerDataTime' + playerId, Date.now().toString()); // not good; should use server time
    }



}