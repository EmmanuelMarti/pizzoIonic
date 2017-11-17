import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PizzaPage } from '../pages/pizza/pizza';
import { PizzaDetailPage } from '../pages/pizza-detail/pizza-detail';
import { PizzaAjoutPage } from '../pages/pizza-ajout/pizza-ajout';
import { AddPizzaPage } from '../pages/add-pizza/add-pizza';
import { ModifyPizzaPage } from '../pages/modify-pizza/modify-pizza';
import { IngredientPage } from '../pages/ingredient/ingredient';
import { AjoutIngredientPage } from '../pages/ajout-ingredient/ajout-ingredient';
import { ModifyIngredientPage } from '../pages/modify-ingredient/modify-ingredient';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PizzaService } from '../providers/pizza-service/pizza-service';
import { IngredientServiceProvider } from '../providers/ingredient-service/ingredient-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PizzaPage,
    PizzaDetailPage,
    PizzaAjoutPage,
    AddPizzaPage,
    ModifyPizzaPage,
    IngredientPage,
    AjoutIngredientPage,
    ModifyIngredientPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PizzaPage,
    PizzaDetailPage,
    PizzaAjoutPage,
    AddPizzaPage,
    ModifyPizzaPage,
    IngredientPage,
    AjoutIngredientPage,
    ModifyIngredientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Base64ToGallery,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaService,
    IngredientServiceProvider
  ]
})
export class AppModule {}
