import { NgModule }      from '@angular/core';
import { BattleFieldComponent }   from './battle-field.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    { path: '', component: BattleFieldComponent }
];

@NgModule({
    declarations: [ BattleFieldComponent ],
    imports: [ RouterModule.forChild(routes) ]
})
export class BattleFieldModule { }