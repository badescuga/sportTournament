import {Page, NavController, NavParams} from 'ionic-angular';
import {GeneralService} from './../../management/generalService';


@Page({
    templateUrl: 'build/pages/teamPage/teamPage.html',
    providers: [GeneralService]

})
export class TeamPage {
    private _teamId: number = 0;
    teamData: JSON;

    constructor(private _params: NavParams, private _generalService: GeneralService, private _nav: NavController) {

        this._teamId = _params.get('teamId');
        console.log('CONSTRUCTOR TEAM PAGE; teamId: ' + this._teamId);
    }


    onPageWillEnter() {
        console.log('ON PAGE WILL ENTER TEAM PAGE; teamId: ' + this._teamId);
        
        if(this._teamId === undefined) {
            console.log("don't have team ID yet; if teamId is undefined, it means that i'm looking at my own team page; Will implement my team soon; for now, i'm setting teamId = 1")
            this._teamId = 1;    
    }

        //other lifecycle events:http://ionicframework.com/docs/v2/api/components/nav/NavController/

        this.teamData = this._generalService.GetTeamData(this._teamId);

        this._generalService.UpdateTeamData(this._teamId, (testStatus, errorThrown) => {
            //update error handle
            alert(`Couldn't retrieve data. testStatus: ${testStatus} errorThrown: ${errorThrown}`);
        }, (dataWasUpdated: boolean) => { //finish callback
            this.teamData = this._generalService.GetTeamData(this._teamId);
        });

    }
}
