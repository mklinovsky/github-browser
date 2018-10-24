import { NgModule, ErrorHandler } from '@angular/core';
import { MaterialModule } from './material.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AppErrorHandler } from './app-error-handler';

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
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    }
  ]
})
export class CoreModule { }
