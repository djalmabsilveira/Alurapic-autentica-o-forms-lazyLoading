import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninComponent } from "./signin/signin.component";
import { VmessageModule } from "./../shared/components/vmessage/vmessage.module";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SignupService } from "./signup/signup.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule,
  ],
  declarations: [SigninComponent, SignupComponent, HomeComponent],
  providers: [SignupService],
})
export class HomeModule {}
