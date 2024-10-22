import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GruposPageRoutingModule } from './grupos-routing.module';
import { GruposPage } from './grupos.page';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GruposPageRoutingModule
  ],
  declarations: [GruposPage],
  providers:[
    provideHttpClient()
  ]
})
export class GruposPageModule {}