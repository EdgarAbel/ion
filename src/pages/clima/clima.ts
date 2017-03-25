import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioDeClima } from '../../providers/servicio-de-clima';
  
@Component({
  selector: 'page-clima',
  templateUrl: 'clima.html'
})
export class ClimaPage {
Pronosticos:any[];
Ciudad;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public _servicioDeClima:ServicioDeClima) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClimaPage');
    this._servicioDeClima.getPronosticos().subscribe(
    	(data:any)=>{

    	let Contador=0;
    	this.Pronosticos=data.list;

    	for(let dia of this.Pronosticos){
    	dia.fecha=new Date();
    	dia.fecha.setDate(dia.fecha.getDate()+Contador)
    	Contador++;
    	}
    	})
  }

}
