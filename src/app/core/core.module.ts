import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  imports: [ ],
  exports: [
    MaterialModule
  ],
  providers: [
    AngularFireAuth,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ]
})
export class CoreModule { }
