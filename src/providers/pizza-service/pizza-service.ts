import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaService {

	data: any;
	// mettre l'url de sa machine
	private url = "http:\/\/10.13.2.167:8080\/pizza";
  constructor(public http: HttpClient) {
    console.log('Hello PizzaServiceProvider Provider');
  }

  get(){
  	if(this.data){
  		return Promise.resolve(this.data);
  	}

  	return new Promise(resolve =>{
  		this.http.get(this.url)
  		.subscribe(data =>{
  			this.data = data;
  			resolve(this.data);
  		})
  	});
  }
  getOnePizza(name: String){
  	if(this.data){
  		return Promise.resolve(this.data);
  	}

  	return new Promise(resolve =>{
  		this.http.get(this.url)
  		.subscribe(data =>{
  			this.data = data;
  			resolve(this.data);
  		})
  	});
  }

}
