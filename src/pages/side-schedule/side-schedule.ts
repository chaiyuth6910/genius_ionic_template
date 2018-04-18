import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';

@IonicPage()
@Component({
  selector: 'page-side-schedule',
  templateUrl: 'side-schedule.html',
})
export class SideSchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideSchedulePage');
  }

  /* ปิดการแสดงเมนูด้านข้าง*/
  ionViewDidEnter() {
    this.menu.swipeEnable(false, 'menu_left');
    this.menu.swipeEnable(false, 'menu_right');
  }

  /* เปิดการแสดงเมนู */
  ionViewWillLeave() {
    this.menu.swipeEnable(true, 'menu_left');
    this.menu.swipeEnable(true, 'menu_right');
  }

}
