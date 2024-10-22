import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { PersonasPageRoutingModule } from './personas-routing.module';
import { PersonasPage } from './personas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonasPageRoutingModule,
  ],
  declarations: [PersonasPage],
  providers:[
    provideHttpClient()
  ]
})
export class PersonasPageModule {}