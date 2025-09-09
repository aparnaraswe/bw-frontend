import { Routes } from '@angular/router';
import { CollectionComponent } from '../collection/collection.component';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },           // default home page
  { path: 'collection', component: CollectionComponent },  // all dropdown links
  { path: 'product', component: ProductComponent },  // all dropdown links
  { path: 'login', component: LoginComponent },  // all dropdown links
  { path: '**', redirectTo: '' }   
];
