import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { ModalController, ViewController } from 'ionic-angular';
import { AddPizzaPage } from '../add-pizza/add-pizza';

/**
 * Generated class for the PizzaAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizza-ajout',
  templateUrl: 'pizza-ajout.html',
})
export class PizzaAjoutPage {

	data : any;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public pizzaService: PizzaService, 
  		public modalCtrl: ModalController) {
  	}

  	ionViewDidLoad() {
  		this.pizzaService.get().then(data =>{
    		console.log(data);
    		this.data = data;
    	});
    console.log('ionViewDidLoad PizzaAjoutPage');
  }

  	ModifPizza(){
    	console.log("je clique dessus");
    }

    DeletePizza(id: String){
      console.log(id);
    	console.log("je delete la pizza");
      this.pizzaService.deletePizza(id);
    }

    AddPizza(){
    	console.log("j'ajoute une pizza");
      this.openModal();
    }

    openModal() {
		console.log("salut");
	    let modal = this.modalCtrl.create(AddPizzaPage);
    	modal.present();
  	}

}
