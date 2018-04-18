import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';

@IonicPage()
@Component({
  selector: 'page-side-portfolio',
  templateUrl: 'side-portfolio.html',
})
export class SidePortfolioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidePortfolioPage');
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
