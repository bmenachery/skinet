import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { error } from 'protractor';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      catchError(error => {
        if (error) {
          if (error.status === 500) {
              this.router.navigateByUrl('/server-error');
          }
          if (error.status === 404) {
            this.router.navigateByUrl('/not-found');
          }
        }
        return throwError(error);
      })
    );
  }
}
