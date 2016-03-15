import {Page} from 'ionic-angular';
import {GeneralService} from './../../management/generalService';


@Page({
  templateUrl: 'build/pages/settingsPage/settingsPage.html',
    providers:[GeneralService]

})
export class SettingsPage {}
