import { Directive } from "@angular/core";
import { UserService } from "./../../../core/user/user.service";
import { ElementRef, OnInit, Renderer } from "@angular/core";

@Directive({
  selector: "[appShowIfLogged]",
})
export class ShowIfLoggedDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    !this.userService.isLogged() &&
      this.renderer.setElementStyle(
        this.element.nativeElement,
        "display",
        "none"
      );
  }
}
