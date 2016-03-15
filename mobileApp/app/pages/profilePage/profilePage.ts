import {Page} from 'ionic-angular';
import {GeneralService} from './../../management/generalService';

@Page({
  templateUrl: 'build/pages/profilePage/profilePage.html',
    providers:[GeneralService]

})
export class ProfilePage {
      someTestNumber : number = 0;
    constructor(private _generalService: GeneralService) {
        this.someTestNumber = _generalService.someNumber;//get value from service
        _generalService.UpdateMyPlayerProfile((testStatus,errorThrown) => {
            //update error handle
        });
    }
}
