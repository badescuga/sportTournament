import {ProfileManager} from './profileManager';
import {TeamManager} from './teamManager';
import {TournamentManager} from './tournamentManager';


export class GeneralManager {
    
    profileManager:ProfileManager;
    teamManager:TeamManager;
    tournamentManager:TournamentManager;
    
    constructor() {
        console.log('starting GENERAL MANAGER. ------ ');
        this.profileManager = new ProfileManager();
        this.teamManager = new TeamManager();
        this.tournamentManager = new TournamentManager();
    }
}
