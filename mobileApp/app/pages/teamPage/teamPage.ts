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
