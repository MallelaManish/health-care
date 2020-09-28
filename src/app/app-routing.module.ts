import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageCustomerComponent } from './admin/manage-customer/manage-customer.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';



const routes: Routes = [

  { 
    path: '', pathMatch: 'full', redirectTo: 'welcome'
   },
  { 
    path:'welcome',component:WelcomeComponent
  },
  {
     path:'sign-in',component:SignInComponent
    },
  { 
    path:'sign-up',component:SignUpComponent
  },
  {
     path:'admin',component:AdminDashboardComponent,
     children:[
       {path:'manage-customer',component:ManageCustomerComponent},

  ]},
  {
     path:'customer',component:CustomerDashboardComponent,
     children:[

     ]

  },
  {
    path:"**",component:PageNotFoundComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


