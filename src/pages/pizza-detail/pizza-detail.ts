import { Component } from '@angular/core';
import { Platform, ViewController, NavController, NavParams } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza'; 

/**
 * Generated class for the PizzaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pizza-detail',
  templateUrl: 'pizza-detail.html',
})
export class PizzaDetailPage {

	data : Pizza = new Pizza();

	  constructor(public navCtrl: NavController, public navParams: NavParams,  public platform: Platform,
		 public viewCtrl: ViewController, public pizzaService: PizzaService) {
	  		console.log("const");
	  }

  ionViewDidLoad() {
    console.log(this.navParams.data._id);
  	this.pizzaService.getById(this.navParams.data._id).then((data:Pizza) =>{
    	console.log(data);
    	this.data = data[0];
    	//console.log(this.data);
    });
    console.log('ionViewDidLoad PizzaDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
