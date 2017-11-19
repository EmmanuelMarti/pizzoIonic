import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import {  ViewController } from 'ionic-angular';
import { Pizza } from '../../models/pizza';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service'; 

/**
 * Generated class for the AddPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-pizza',
  templateUrl: 'add-pizza.html',
})
export class AddPizzaPage {

  base64Image:String;
  data : any;
  saveData: any;
  pizzaForm : any;
  options: CameraOptions = {
    quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
  };

  constructor(public navCtrl: NavController, private camera: Camera, private base64ToGallery : Base64ToGallery, 
    public pizzaService: PizzaService, public viewCtrl: ViewController, public ingredientService: IngredientServiceProvider) {
    this.pizzaForm = new Pizza();
  }

  ionViewDidLoad() {
    this.ingredientService.get().then(data =>{
      this.data = data;
      console.log(this.data.length);
      for(let i = 0; i < this.data.length; i++){
        this.data[0].check = false;
      }
      console.log(this.data);
    }); 
/*    angular.forEach(this.data, (values, key)=>{
        this.data[key].check = false;
    });*/
    console.log('ionViewDidLoad AddPizzaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  runCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
    this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' }).then(
        res => console.log('Saved image to gallery ', res),
        err => console.log('Error saving image to gallery ', err)
    )
    }, (err) => {
    // Handle error

    });
  }

  logForm(){
    let ingredients = [];
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i].check == true){
          ingredients.push(this.data[i]._id);
      }
    }
    console.log(ingredients);
   /* angular.forEach(this.data, function(value,key){
      console.log(value);
    });*/
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let dateConcat = day + "/" + month + "/" + year;
    this.pizzaForm.dateCreated = dateConcat;
    this.pizzaForm.image = this.base64Image;
    this.pizzaForm.ingredients = ingredients;
    console.log(this.pizzaForm);
    this.pizzaService.post(this.pizzaForm);
  }
}
