import { PlatformDetectorService } from "./../../core/platform-detector/platform-detector.service";
import { SignupService } from "./signup.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { NewUser } from "./new-user";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  providers: [UserNotTakenValidatorService],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild("emailInput") emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      fullName: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40),
        ],
      ],
      userName: [
        "",
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
        [this.userNotTakenValidatorService.checkUserNameTaken()],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(18),
        ],
      ],
    });
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService.signup(newUser).subscribe(
      () => this.router.navigate([""]),
      (err) => console.log(err)
    );
  }
}
