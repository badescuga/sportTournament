import {Page, NavController, NavParams} from 'ionic-angular';
import {GeneralService} from './../../management/generalService';


@Page({
    templateUrl: 'build/pages/teamPage/teamPage.html',
    providers: [GeneralService]

})
export class TeamPage {
    private _teamId: number = 0;

    constructor(private _params: NavParams, private _generalService: GeneralService, private _nav: NavController) {

            this._teamId = _params.get('teamId');
            console.log('CONSTRUCTOR TEAM PAGE; teamId: ' + this._teamId);
    }

    onPageWillEnter() {
            console.log('ON PAGE WILL ENTER TEAM PAGE; teamId: ' + this._teamId);

    }
}
