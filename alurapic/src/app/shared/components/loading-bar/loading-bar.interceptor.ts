import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";

import { LoadingBarService } from "./loading-bar.service";

@Injectable({ providedIn: "root" })
export class LoadingBarInterceptor implements HttpInterceptor {
  constructor(private loadingBarService: LoadingBarService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.loadingBarService.stop();
        } else this.loadingBarService.start();
      })
    );
  }
}
