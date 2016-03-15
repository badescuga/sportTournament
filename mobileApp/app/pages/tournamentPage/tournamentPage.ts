import {Page} from 'ionic-angular';
import {GeneralService} from './../../management/generalService';


@Page({
  templateUrl: 'build/pages/tournamentPage/tournamentPage.html',
  providers:[GeneralService]
})
export class TournamentPage {
    someTestNumber : number = 0;
    constructor(private _generalService: GeneralService) {
     
    }
}
