import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingComponent } from './rating/rating.component';


@NgModule({
    declarations: [
        RatingComponent],
    imports: [
        BrowserModule,
    ],
    exports: [RatingComponent], // ACHTUNG! - sonst ist RatingComponent nicht in anderen Modulen verfügbar
    providers: [
    ],
    bootstrap: []
})
export class SharedModule { }
