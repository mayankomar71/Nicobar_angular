import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', component:ContentComponent},
  {path:'details/:id', component: DetailsComponent},
  {path:'cart/:id', component: CartComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
