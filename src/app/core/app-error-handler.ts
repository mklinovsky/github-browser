import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
    private zone: NgZone
  ) { }

  handleError(error: Error | HttpErrorResponse) {
    const snack = this.injector.get(MatSnackBar);

    // TODO https://github.com/angular/material2/issues/9875
    this.zone.run(() => {
      snack.open(error.message, 'Close');
    });

   console.log(this);
 }
}
