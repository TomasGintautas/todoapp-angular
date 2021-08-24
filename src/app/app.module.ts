import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WorkspaceTodayComponent } from './workspace-today/workspace-today.component';
import { WorkspaceSignificanceComponent } from './workspace-significance/workspace-significance.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CoreModule} from "./core/core.model";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    UserEditComponent,
    WorkspaceComponent,
    RegisterComponent,
    LoginComponent,
    WorkspaceTodayComponent,
    WorkspaceSignificanceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
