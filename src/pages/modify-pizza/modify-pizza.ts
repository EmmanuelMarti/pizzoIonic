import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Pizza } from '../../models/pizza';
import { PizzaService } from '../../providers/pizza-service/pizza-service';

/**
 * Generated class for the ModifyPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-pizza',
  templateUrl: 'modify-pizza.html',
})
export class ModifyPizzaPage {

  pizzaForm : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public pizzaService: PizzaService) {
  	this.pizzaForm = new Pizza();
  }

  ionViewDidLoad() {
  	console.log(this.navParams.data);
  	this.pizzaForm.id = this.navParams.data._id;
  	this.pizzaForm.name = this.navParams.data.name;
  	this.pizzaForm.description = this.navParams.data.description;
  	this.pizzaForm.price = this.navParams.data.price;
  	this.pizzaForm.image = this.navParams.data.image;
  	this.pizzaForm.dateCreated = this.navParams.data.dateCreated;
  	this.pizzaForm.dateUpdated = this.navParams.data.dateUpdated;
    console.log('ionViewDidLoad ModifyPizzaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  logForm(){
  	console.log("Je vais tout update");
  	this.pizzaService.update(this.pizzaForm);
  }
}
