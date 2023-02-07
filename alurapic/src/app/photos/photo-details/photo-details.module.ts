import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { PhotoModule } from "./../photo/photo.module";
import { PhotoDetailsComponent } from "./photo-details.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, PhotoModule, RouterModule],
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
})
export class PhotoDetailsModule {}
