import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { PizzaService } from '../../providers/pizza-service/pizza-service';

/**
 * Generated class for the PizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html',
})
export class PizzaPage {

//déclaration des variables de classes
	base64Image:String;
	pizzaForm : any;
	data : any;
	options: CameraOptions = {
 		quality: 100,
  		destinationType: this.camera.DestinationType.DATA_URL,
  		encodingType: this.camera.EncodingType.JPEG,
  		mediaType: this.camera.MediaType.PICTURE
	};
  constructor(public navCtrl: NavController, private camera: Camera, private base64ToGallery : Base64ToGallery, 
  				public pizzaService: PizzaService
  ) {
  	this.pizzaForm = new Pizza();
  }

  	// fonction qui permet de démarrer la caméra + d'enregistrer une image dans la gallerie du téléphone
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaPage');
    this.pizzaService.get().then(data =>{
    	console.log(data);
    	this.data = data;
    });
  }

}


class Pizza {
	constructor(
		name: String,
		description: String,
		price : String,
		ingredients : String,
		image: String
	){

	}
	constructor(
	){
		this.name = "";
		this.description = "";
		this.price = "";
		this.ingredients= "";
		this.image = "";
	}
	


}
