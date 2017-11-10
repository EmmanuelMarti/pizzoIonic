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

	// mettre l'url de sa machine
	private url = "http:\/\/pizzatp-manumarti.c9users.io\/pizzas\/";
  constructor(public http: HttpClient) {
    console.log('Hello PizzaServiceProvider Provider');
  }

  get(){
  	return new Promise(resolve =>{
  		this.http.get(this.url)
  		.subscribe(data =>{
  			resolve(data);
  		})
  	});
  }

  getById(id: number){
    return new Promise(resolve =>{
      this.http.get(this.url + id)
      .subscribe(data => {
        resolve(data);
      })
    });
  }


  post(data){
    return new Promise(resolve =>{
      this.http.post(this.url,data)
      .subscribe(res => {
        resolve(res);
      })
    });
  }

  deletePizza(id: number){
     return new Promise(resolve =>{
      this.http.delete(this.url + id)
      .subscribe(res => {
        resolve(res);
      })
    });
  }

}
