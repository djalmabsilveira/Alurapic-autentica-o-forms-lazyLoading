import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { LoadingBarStyle } from "./loading-bar.enum";
import { startWith } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoadingBarService {
  constructor() {}

  loadingSubject = new Subject<LoadingBarStyle>();

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoadingBarStyle.STOPPED));
  }

  start() {
    this.loadingSubject.next(LoadingBarStyle.LOADING);
  }

  stop() {
    this.loadingSubject.next(LoadingBarStyle.STOPPED);
  }
}
