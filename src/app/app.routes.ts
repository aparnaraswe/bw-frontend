import { Routes } from '@angular/router';
import { CollectionComponent } from '../collection/collection.component';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { LoginComponent } from '../login/login.component';
import { ContactComponent } from '../contact/contact.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { SizechartComponent } from '../sizechart/sizechart.component';
import { FaqComponent } from '../faq/faq.component';
import { OrdersComponent } from '../orders/orders.component';
import { OrderdetailsComponent } from '../order-details/order-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },           // default home page
  { path: 'collection', component: CollectionComponent },
  { path: 'product', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'size-chart', component: SizechartComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders-details', component: OrderdetailsComponent },
  { path: '**', redirectTo: '' }   
];
