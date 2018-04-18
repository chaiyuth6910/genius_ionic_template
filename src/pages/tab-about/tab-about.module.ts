import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabAboutPage } from './tab-about';

@NgModule({
  declarations: [
    TabAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(TabAboutPage),
  ],
})
export class TabAboutPageModule {}
