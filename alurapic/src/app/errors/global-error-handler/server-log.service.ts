import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { ServerLog } from "./server-log";

const API_LOG = environment.serverLog;

@Injectable({
  providedIn: "root",
})
export class ServerLogService {
  constructor(private http: HttpClient) {}

  log(serverLog: ServerLog) {
    return this.http.post(`${API_LOG}/infra/log`, serverLog);
  }
}
