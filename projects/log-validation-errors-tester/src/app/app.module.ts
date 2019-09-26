import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogValidationErrorsLibModule,LogValidationErrorsLibService } from 'log-validation-errors-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogValidationErrorsLibModule,
    ReactiveFormsModule,
  ],
  providers: [LogValidationErrorsLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
