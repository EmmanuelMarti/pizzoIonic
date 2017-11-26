import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { Ingredient } from '../../models/ingredient'; 

/**
 * Generated class for the ModifyIngredientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-ingredient',
  templateUrl: 'modify-ingredient.html',
})
export class ModifyIngredientPage {

  ingredientForm:any;
  msg: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, 
    public ingredientService: IngredientServiceProvider) {
  	this.ingredientForm = new Ingredient();
  }

  ionViewDidLoad() {
  	this.ingredientForm.id = this.navParams.data._id;
  	this.ingredientForm.name = this.navParams.data.name;
  	console.log(this.navParams.data);
    console.log(this.ingredientForm);
    console.log('ionViewDidLoad ModifyIngredientPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ModifyIngredient(){
    console.log(this.ingredientForm);
    this.ingredientService.update(this.ingredientForm).then(data=>{
      this.msg = "Votre ingrédient a bien été modifié";
    });
  }

}
