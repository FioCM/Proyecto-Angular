import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "types", component: TypesComponent},
  {path: "services", component: ServicesComponent},
  {path: "contact", component: ContactComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: ErrorPageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
