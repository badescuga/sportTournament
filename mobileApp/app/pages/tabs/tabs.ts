import {Page} from 'ionic-angular';
import {TournamentPage} from '../tournamentPage/tournamentPage';
import {TeamPage} from '../teamPage/teamPage';
import {ProfilePage} from '../profilePage/profilePage';
import {SettingsPage} from '../settingsPage/settingsPage';



@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tournamentTabRoot: any = TournamentPage;
  teamTabRoot: any = TeamPage;
  profileTabRoot: any = ProfilePage;
  settingsTabRoot: any = SettingsPage;
}
