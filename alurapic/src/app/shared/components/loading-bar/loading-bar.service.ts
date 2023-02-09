import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { LoadingBar } from "./loading-bar.enum";
import { startWith } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoadingBarService {
  constructor() {}

  loadingSubject = new Subject<LoadingBar>();

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoadingBar.STOPPED));
  }

  start() {
    this.loadingSubject.next(LoadingBar.LOADING);
  }

  stop() {
    this.loadingSubject.next(LoadingBar.STOPPED);
  }
}
