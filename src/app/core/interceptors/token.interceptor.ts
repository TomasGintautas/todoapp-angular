import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtService} from "../services/jwt.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.jwtService.getToken()}`)
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return next.handle(req.clone({
      headers: headers
    }));
  }
}
