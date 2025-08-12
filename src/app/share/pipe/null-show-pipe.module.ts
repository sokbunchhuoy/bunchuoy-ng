import { NgModule } from "@angular/core";
import { NullShowPipe } from './null-show.pipe';
import { FormControlsPipe } from "./formControls.pipe";

@NgModule({
    declarations: [
        NullShowPipe,
        FormControlsPipe
    ],
    imports: [],
    exports: [
        NullShowPipe,
        FormControlsPipe
    ]
})
export class NullShowPipeModule {
}
