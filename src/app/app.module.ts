import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { IssuesComponent } from './components/issues/issues.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    UserIndexComponent,
    UserDetailComponent,
    HeaderComponent,
    UserListComponent,
    ReposListComponent,
    IssuesComponent,
    PageNotFoundComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    ReactiveFormsModule
  ],  
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
