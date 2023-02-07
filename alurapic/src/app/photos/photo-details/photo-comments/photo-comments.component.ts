import { PhotoService } from "./../../photo/photo.service";
import { Observable } from "rxjs";
import { PhotoComment } from "./../../photo/photo-comment";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-photo-comments",
  templateUrl: "./photo-comments.component.html",
  styleUrls: ["./photo-comments.component.css"],
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId: number;
  comments$: Observable<PhotoComment[]>;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
  }
}
