import { switchMap, tap } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Component, Input, OnInit } from "@angular/core";

import { PhotoComment } from "./../../photo/photo-comment";
import { PhotoService } from "./../../photo/photo.service";
import { Photo } from "../../photo/photo";

@Component({
  selector: "app-photo-comments",
  templateUrl: "./photo-comments.component.html",
  styleUrls: ["./photo-comments.component.css"],
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId: number;
  commentForm: FormGroup;
  comments$: Observable<PhotoComment[]>;
  allowComments: boolean;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.photoService
      .findById(this.photoId)
      .subscribe((photo) => (this.allowComments = photo.allowComments));
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ["", Validators.maxLength(300)],
    });
  }

  save() {
    const comment = this.commentForm.get("comment").value as string;
    this.comments$ = this.photoService
      .addComments(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(
        tap(() => {
          this.commentForm.reset();
        })
      );
  }
}
