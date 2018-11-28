import { Directive } from '@angular/core';
import {
  ValidatorFn,
  FormGroup,
  ValidationErrors,
  NG_VALIDATORS,
  Validator,
  AbstractControl
} from '@angular/forms';

export const validateEqualPassword: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConf = control.get('passwordConf');

  return password && passwordConf && password.value !== passwordConf.value
    ? { validateEqualPassword: true }
    : null;
};

@Directive({
  selector: '[appValidateEqualPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateEqualPasswordDirective,
      multi: true
    }
  ]
})
export class ValidateEqualPasswordDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return validateEqualPassword(control);
  }
}
