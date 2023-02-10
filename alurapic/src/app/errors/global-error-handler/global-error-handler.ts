import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from "stacktrace-js";

import { UserService } from "./../../core/user/user.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);

    const userName = userService.getUsername();
    const url = location instanceof PathLocationStrategy ? location.path() : "";
    const message = error.message ? error.message : error.toString();

    StackTrace.fromError(error).then((stackFrames) => {
      const stackAsString = stackFrames
        .map((stackFrame) => stackFrame.toString())
        .join("\n");
      console.log(message);
      console.log(stackAsString);

      console.log({ message, url, userName, stack: stackAsString });
    });
  }
}
