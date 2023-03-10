import { ShowIfLoggedModule } from "./../../shared/directives/show-if-logged/show-if-logged.module";
import { VmessageModule } from "./../../shared/components/vmessage/vmessage.module";
import { ReactiveFormsModule } from "@angular/forms";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { PhotoModule } from "./../photo/photo.module";
import { PhotoDetailsComponent } from "./photo-details.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
    ShowIfLoggedModule,
  ],
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective,
  ],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
})
export class PhotoDetailsModule {}
