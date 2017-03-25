import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { ServicioDeClima} from '../providers/servicio-de-clima';
import { ClimaPage } from '../pages/clima/clima'

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    ClimaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    ClimaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ServicioDeClima]
})
export class AppModule {}
