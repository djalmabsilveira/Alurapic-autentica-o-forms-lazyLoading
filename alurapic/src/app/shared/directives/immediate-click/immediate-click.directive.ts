import { PlatformDetectorService } from "./../../../core/platform-detector/platform-detector.service";
import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appImmediateClick]",
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private platformDetectorService: PlatformDetectorService
  ) {}
  ngOnInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
      this.element.nativeElement.click();
  }
}
