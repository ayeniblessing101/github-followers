import { ErrorHandler } from '@angular/core';

export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('Unexpected error occured');
    console.log(error);
  }
}
