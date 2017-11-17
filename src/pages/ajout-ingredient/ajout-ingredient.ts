import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { Ingredient } from '../../models/ingredient'; 
/**
 * Generated class for the AjoutIngredientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-ingredient',
  templateUrl: 'ajout-ingredient.html',
})
export class AjoutIngredientPage {

  ingredientForm : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, 
  	public ingredientService: IngredientServiceProvider) {
  	this.ingredientForm = new Ingredient();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutIngredientPage');
  }

  addIngredient(){
  	console.log(this.ingredientForm);
  	this.ingredientService.post(this.ingredientForm);
  }

  
}
