import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "../../core/auth/auth.service";
import { PlatformDetectorService } from "./../../core/platform-detector/platform-detector.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  fromUrl: string;

  @ViewChild("userNameInput") userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => (this.fromUrl = params.fromUrl)
    );
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get("userName").value;
    const password = this.loginForm.get("password").value;
    this.authService.authenticate(userName, password).subscribe(
      () => {
        this.fromUrl
          ? this.router.navigateByUrl(this.fromUrl)
          : this.router.navigate(["user", userName]);
      },
      (err) => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
        alert("Usuário e/ou senha incorretos");
      }
    );
  }
}
