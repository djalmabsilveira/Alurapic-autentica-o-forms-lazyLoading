import { ImmediateClickModule } from "./../../shared/directives/immediate-click/immediate-click.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoFormComponent } from "./photo-form.component";
import { VmessageModule } from "./../../shared/components/vmessage/vmessage.module";
import { PhotoModule } from "../photo/photo.module";

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    FormsModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule,
  ],
})
export class PhotoFormModule {}
