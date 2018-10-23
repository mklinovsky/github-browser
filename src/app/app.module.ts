import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    UserIndexComponent,
    UserDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
