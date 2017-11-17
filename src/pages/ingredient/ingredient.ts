import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { ModalController, ViewController } from 'ionic-angular';
import { AjoutIngredientPage } from '../ajout-ingredient/ajout-ingredient';
import { ModifyIngredientPage } from '../modify-ingredient/modify-ingredient';

/**
 * Generated class for the IngredientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingredient',
  templateUrl: 'ingredient.html',
})
export class IngredientPage {

  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ingredientService: IngredientServiceProvider,
  	public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  	this.ingredientService.get().then(data =>{
    		console.log(data);
    		this.data = data;
    	});
    console.log('ionViewDidLoad IngredientPage');
  }

  deletePizza(id:string){
  	console.log("je delete");
  	console.log(id);
  	this.ingredientService.deleteIngredient(id);
  }

  addIngredient(){
  	console.log("J'ajoute");
  	let modal = this.modalCtrl.create(AjoutIngredientPage);
    modal.present();
  }

  modifyPizza(data){
  	console.log("Je modifie");
  	let modal = this.modalCtrl.create(ModifyIngredientPage, data);
    modal.present();
  }
}
