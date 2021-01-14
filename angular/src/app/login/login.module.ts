import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LoginComponent }   from './login.component';
import { RouterModule, Routes } from "@angular/router";
import {ButtonModule} from "@progress/kendo-angular-buttons";

const routes: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
    declarations: [ LoginComponent ],
    imports: [FormsModule, RouterModule.forChild(routes), ButtonModule]
})
export class LoginModule { }