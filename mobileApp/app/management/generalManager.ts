import {ProfileManager} from './profileManager';
import {TeamManager} from './teamManager';
import {TournamentManager} from './tournamentManager';
import {DataStore} from './dataStore';


export class GeneralManager {

    profileManager: ProfileManager;
    teamManager: TeamManager;
    tournamentManager: TournamentManager;
    dataStore: DataStore;

    constructor() {
        console.log('starting GENERAL MANAGER. ------ ');
        this.dataStore = new DataStore();
        
        this.profileManager = new ProfileManager(this.dataStore);
        this.teamManager = new TeamManager(this.dataStore);
        this.tournamentManager = new TournamentManager(this.dataStore);
    }
}
