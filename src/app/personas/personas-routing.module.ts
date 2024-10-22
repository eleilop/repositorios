import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasPage } from './personas.page';

const routes: Routes = [
  {
    path: '',
    component: PersonasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasPageRoutingModule {}