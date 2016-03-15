import {Page} from 'ionic-angular';
import {GeneralService} from './../../management/generalService';


@Page({
  templateUrl: 'build/pages/teamPage/teamPage.html',
    providers:[GeneralService]

})
export class TeamPage {
               constructor(private _generalService: GeneralService) {
               }
}
