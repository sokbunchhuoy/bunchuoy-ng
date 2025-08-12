import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchvalidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPasswoord = control.get('confirmPasswoord');

    if (!password || !confirmPasswoord) {
        return null;
    }

    return password.value === confirmPasswoord.value ? null : { passwordMisMatch: true }
}