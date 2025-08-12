import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
    name: 'formControls'
})
export class FormControlsPipe implements PipeTransform {
    transform(formGroup: FormGroup): any[] {
        return Object.keys(formGroup.controls).map(key => ({
            controlName: key,
            control: formGroup.get(key)
        }));
    }
}