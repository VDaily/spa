import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = "don't forget password";
    const modifiedReq = req.clone({
      headers: req.headers
        .set("custom-study-token", "perfect future is waiting for us")
        .set("Authorization", `Bearer ${userToken}`),
    });
    return next.handle(modifiedReq);
  }
}
