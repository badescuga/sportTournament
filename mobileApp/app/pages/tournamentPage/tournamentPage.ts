import {Page, NavController} from 'ionic-angular';
import {GeneralService} from './../../management/generalService';


@Page({
    templateUrl: 'build/pages/tournamentPage/tournamentPage.html',
    providers: [GeneralService]
})
export class TournamentPage {
    someTestNumber: number = 0;
    constructor(private _generalService: GeneralService, private _nav: NavController) {
        // to navigate 
        // http://www.joshmorony.com/a-simple-guide-to-navigation-in-ionic-2/
        // this._nav.push(SecondPage);
    }
}
