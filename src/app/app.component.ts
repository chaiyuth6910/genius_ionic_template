import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*ใส่การโหลดหน้าจอ*/
import { LoadingController } from 'ionic-angular';
/* ใส่การตรวจว่ามีการโหลดแอพครั้งแรกเท่านั้น */
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'TabsPage';
  loader: any;
  userDetails: any;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public app: App,
  ) {

    this.presentLoading();
    this.initializeApp();

    this.pages = [
      { title: 'Schedule', component: 'SideSchedulePage', icon: 'md-calendar' },
      { title: 'Portfolio', component: 'SidePortfolioPage', icon: 'md-albums' },
      { title: 'Payment', component: 'SidePaymentPage', icon: 'logo-bitcoin' },
      { title: 'Setting', component: 'SideSettingPage', icon: 'md-settings' },
    ];

    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);

    if(data == null){
      this.userDetails = {fullname:"Guest",email:"guest@domain.com"};
    }else{
      this.userDetails = data.userData;
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      /* เขียนเงื่อนไขตรวจสอบว่ามีการเข้าใช้งานครั้งแรกหรือไม่*/
      
      this.storage.get('introShow').then((result) => {
        if (result) {
          // เคยเข้าใช้งานแล้ว
          this.rootPage = 'TabsPage';
        } else {
          // เข้าใช้งานครั้งแรก
          this.rootPage = 'IntroPage';
          this.storage.set('introShow', true);
        }

        // ปิดการโหลด
        this.loader.dismiss();
      });
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "กำลังโหลดหน้าจอ รอสักครู่..."
    });
    this.loader.present();
  }

  backLogin() {
    this.nav.setRoot('LoginPage');
  }

  logout() {
    localStorage.clear();
    setTimeout(() => this.backLogin(), 1000);
  }

}
