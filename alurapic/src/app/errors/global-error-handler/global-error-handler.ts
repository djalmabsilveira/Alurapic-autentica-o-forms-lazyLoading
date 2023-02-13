import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from "stacktrace-js";

import { ServerLogService } from "./server-log.service";
import { UserService } from "./../../core/user/user.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const serverLogService = this.injector.get(ServerLogService);
    const router = this.injector.get(Router);

    const userName = userService.getUsername();
    const url = location instanceof PathLocationStrategy ? location.path() : "";
    const message = error.message ? error.message : error.toString();

    if (environment.production) router.navigate(["/error"]);

    StackTrace.fromError(error).then((stackFrames) => {
      const stackAsString = stackFrames
        .map((stackFrame) => stackFrame.toString())
        .join("\n");
      console.log(message);
      console.log(stackAsString);
      console.log("-----------------");
      console.log("-----------------");
      serverLogService
        .log({ message, url, userName, stack: stackAsString })
        .subscribe(
          () => {
            console.log("error logged on server");
          },
          (err) => {
            console.log(err);
            console.log("error could not be sent to server");
          }
        );
    });
  }
}
