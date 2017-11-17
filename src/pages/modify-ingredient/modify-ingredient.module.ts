import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyIngredientPage } from './modify-ingredient';

@NgModule({
  declarations: [
    ModifyIngredientPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyIngredientPage),
  ],
})
export class ModifyIngredientPageModule {}
