import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {WorkspaceComponent} from "./workspace/workspace.component";
import {WorkspaceTodayComponent} from "./workspace-today/workspace-today.component";
import {WorkspaceSignificanceComponent} from "./workspace-significance/workspace-significance.component";
import {UserViewComponent} from "./user-view/user-view.component";
import {UserEditComponent} from "./user-edit/user-edit.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'workspace/:id/todo', component:WorkspaceComponent},
  {path: 'workspace/:id/today', component:WorkspaceTodayComponent},
  {path: 'workspace/:id/:significance', component:WorkspaceSignificanceComponent},
  {path: 'admin/panel/view', component:UserViewComponent},
  {path: 'admin/panel/edit/:id', component:UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
