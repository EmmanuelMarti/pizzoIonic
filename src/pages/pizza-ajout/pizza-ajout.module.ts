import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PizzaAjoutPage } from './pizza-ajout';

@NgModule({
  declarations: [
    PizzaAjoutPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzaAjoutPage),
  ],
})
export class PizzaAjoutPageModule {}
