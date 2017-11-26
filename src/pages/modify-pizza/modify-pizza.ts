import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Pizza } from '../../models/pizza';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';

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
  dataIngredient: any;
  msg: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public pizzaService: PizzaService,
    public ingredientService: IngredientServiceProvider) {
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
    this.pizzaForm.ingredients = this.navParams.data.ingredients;
    this.getIngredient();
    
    console.log('ionViewDidLoad ModifyPizzaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  logForm(){
  	console.log("Je vais tout update");
    let ingredients = [];
    for(let i = 0; i < this.dataIngredient.length; i++){
      if(this.dataIngredient[i].check == true){
          ingredients.push(this.dataIngredient[i]._id);
      }
    }
    this.pizzaForm.ingredients = ingredients;
    //console.log(ingredients);
  	this.pizzaService.update(this.pizzaForm).then(data=>{
      this.msg = "Votre pizza a bien été modifiée";
    });
  }

  getIngredient(){
    this.ingredientService.get().then(data =>{
        console.log(data);
        this.dataIngredient = data;
        for(let i in this.dataIngredient){
          this.dataIngredient[i].check = this.hasIngredient(this.dataIngredient[i]);
        }
    });

  }

  hasIngredient(ingredient){
    let item = this.pizzaForm.ingredients.find(x =>{
      return x._id == ingredient._id;
    });
    return item != null;
  }
}
