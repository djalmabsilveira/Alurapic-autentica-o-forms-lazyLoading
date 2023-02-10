import { Observable } from "rxjs";
import { LoadingBarService } from "./loading-bar.service";
import { Component, OnInit } from "@angular/core";
import { LoadingBarStyle } from "./loading-bar.enum";
import { map } from "rxjs/operators";

@Component({
  selector: "app-loading-bar",
  templateUrl: "./loading-bar.component.html",
  styleUrls: ["./loading-bar.component.css"],
})
export class LoadingBarComponent implements OnInit {
  loading$: Observable<string>;

  constructor(private loadingBarService: LoadingBarService) {}

  ngOnInit() {
    this.loading$ = this.loadingBarService
      .getLoading()
      .pipe(map((loadingType) => loadingType.valueOf()));
  }
}
