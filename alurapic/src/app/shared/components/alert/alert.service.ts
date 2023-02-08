import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

import { Alert, AlertType } from "./alert.enum";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  alertSubject: Subject<Alert> = new Subject<Alert>();

  constructor() {}

  private alert(alertType: AlertType, message: string) {
    this.alertSubject.next(new Alert(alertType, message));
  }

  danger(message: string) {
    this.alert(AlertType.DANGER, message);
  }

  warning(message: string) {
    this.alert(AlertType.WARNING, message);
  }

  success(message: string) {
    this.alert(AlertType.SUCCESS, message);
  }

  info(message: string) {
    this.alert(AlertType.INFO, message);
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }
}
