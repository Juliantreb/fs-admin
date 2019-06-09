import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { BookingsComponent } from './components/Bookings/Bookings.component';

import { PropertiesComponent } from './components/Properties/Properties.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Properties', component: PropertiesComponent  },
  { path: 'users', component: UsersComponent },
  { path: 'Bookings', component: BookingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
