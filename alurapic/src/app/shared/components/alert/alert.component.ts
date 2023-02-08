import { AlertService } from "./alert.service";
import { Component, Input } from "@angular/core";
import { Alert, AlertType } from "./alert.enum";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"],
})
export class AlertComponent {
  @Input() timeout = 3000;
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
    this.alertService.getAlert().subscribe((alert) => {
      if (!alert) {
        this.alerts = [];
        return;
      }
      this.alerts.push(alert);
      setTimeout(() => {
        this.removeAlert(alert);
      }, this.timeout);
    });
  }

  removeAlert(alertToBeRemoved: Alert) {
    this.alerts = this.alerts.filter((alert) => alert != alertToBeRemoved);
  }

  getAlertClass(alert: Alert) {
    if (!alert) return "";
    switch (alert.alertType) {
      case AlertType.DANGER:
        return "alert alert-danger";
      case AlertType.WARNING:
        return "alert alert-warning";
      case AlertType.SUCCESS:
        return "alert alert-success";
      case AlertType.INFO:
        return "alert alert-info";
    }
  }
}
