import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token'); // Get the token from sessionStorage

    if (token) {
      // Clone the request and set the authorization header
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Attach token in the Authorization header
        }
      });

      return next.handle(cloned); // Pass the cloned request with the token
    } else {
      return next.handle(req); // If no token, pass the request without modifying
    }
  }
}


