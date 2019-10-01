import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularTestSimpleLibModule } from 'angular-test-simple-lib';

@NgModule({
  imports: [
    BrowserModule,
    AngularTestSimpleLibModule
  ],

  declarations: [
    AppComponent,
  ],

  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
