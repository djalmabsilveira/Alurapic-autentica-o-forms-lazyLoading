import { FormGroup, ValidatorFn } from "@angular/forms";

export const UserNamePasswordValidator: ValidatorFn = (
  formGroup: FormGroup
) => {
  const userName = formGroup.get("userName").value;
  const password = formGroup.get("password").value;

  if (userName.trim() + password.trim()) {
    return userName == password ? { userNamePassword: true } : null;
  } else {
    return null;
  }
};
