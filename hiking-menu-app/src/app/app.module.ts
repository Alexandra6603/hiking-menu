import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';
import {DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PesonalPageComponent } from './components/pesonal-page/pesonal-page.component';
import { TokenInterceptorService } from './services/token-inceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavBarComponent,
    AuthorizationFormComponent,
    PesonalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS ,useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
