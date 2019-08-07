import { Routes, RouterModule } from '@angular/router';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
const  appRoutes:  Routes  = [
    { path:  'customer-list', component:  CustomerListComponent },
    { path:  'customer-create', component:  CustomerCreateComponent },
    {
    path:  'login',
    component:  LoginComponent
    },
    { path:  '',
    
    redirectTo:  '/login',
    
    pathMatch:  'full'
    
    },
    ]
    @NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
      })
    export class AppRoutingModule { }