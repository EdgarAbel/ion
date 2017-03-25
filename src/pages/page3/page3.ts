import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'

/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

  alerta(){
  	let alert = this.alertCtrl.create({
  		title:'Congratulations',
  		subTitle:'Now your information is save',
  		buttons:['OK']

  	});
  	alert.present();
  }

}
