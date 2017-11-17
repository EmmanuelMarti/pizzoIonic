import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutIngredientPage } from './ajout-ingredient';

@NgModule({
  declarations: [
    AjoutIngredientPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutIngredientPage),
  ],
})
export class AjoutIngredientPageModule {}
