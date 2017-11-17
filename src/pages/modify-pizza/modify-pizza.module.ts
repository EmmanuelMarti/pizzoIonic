import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyPizzaPage } from './modify-pizza';

@NgModule({
  declarations: [
    ModifyPizzaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyPizzaPage),
  ],
})
export class ModifyPizzaPageModule {}
