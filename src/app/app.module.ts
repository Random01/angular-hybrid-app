import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { UpgradedSimpleDirective } from './upgraded-simple.directive';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],

  declarations: [
    AppComponent,
    UpgradedSimpleDirective
  ],

  providers: [
    [{ provide: '$scope', useExisting: '$rootScope' }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(upgrade: UpgradeModule) {
    upgrade.bootstrap(document.body, ['gridReport'], { strictDi: true });
  }

  // Does nothing by design.
  // This is to facilitate "hybrid bootstrapping"
  ngDoBootstrap() { }
}
