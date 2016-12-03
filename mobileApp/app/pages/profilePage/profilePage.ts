import {Page, NavController} from 'ionic-angular';
import {GeneralService} from './../../management/generalService';

@Page({
    templateUrl: 'build/pages/profilePage/profilePage.html',
    providers: [GeneralService]

})
export class ProfilePage {
    someTestNumber: number = 0;
    constructor(private _generalService: GeneralService, private _nav: NavController) {

    }

    myPlayerProfile: JSON;

    onPageWillEnter() {
        //other lifecycle events:http://ionicframework.com/docs/v2/api/components/nav/NavController/

        this.myPlayerProfile = this._generalService.GetMyPlayeProfile();

        this._generalService.UpdateMyPlayerProfile((testStatus, errorThrown) => {
            //update error handle
            alert(`Couldn't retrieve data. testStatus: ${testStatus} errorThrown: ${errorThrown}`);
        }, (dataWasUpdated:boolean) => { //finish callback
            this.myPlayerProfile = this._generalService.GetMyPlayeProfile();
        });

    }
}

