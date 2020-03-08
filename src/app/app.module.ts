import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component'; // Importamos el servicio de user.
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    UpdateUserComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ // Provee los servicios de una aplicación Angular
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
