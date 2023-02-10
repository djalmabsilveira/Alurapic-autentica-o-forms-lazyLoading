import { ShowIfLoggedModule } from "./../shared/directives/show-if-logged/show-if-logged.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AlertModule } from "./../shared/components/alert/alert.module";
import { RequestInterceptor } from "./auth/request.interceptor";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MenuModule } from "../shared/components/menu/menu.module";
import { LoadingBarModule } from "./../shared/components/loading-bar/loading-bar.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingBarModule,
    MenuModule,
    ShowIfLoggedModule,
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
