import { LoadingBarInterceptor } from "./loading-bar.interceptor";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingBarComponent } from "./loading-bar.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingBarComponent],
  exports: [LoadingBarComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingBarInterceptor,
      multi: true,
    },
  ],
})
export class LoadingBarModule {}
