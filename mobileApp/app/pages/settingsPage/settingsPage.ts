import {Page, NavController} from 'ionic-angular';
import {GeneralService} from './../../management/generalService';


@Page({
  templateUrl: 'build/pages/settingsPage/settingsPage.html',
    providers:[GeneralService]

})
export class SettingsPage {
        constructor(private _generalService: GeneralService, private _nav: NavController) {

        }
}
