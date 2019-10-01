import { NgModule } from '@angular/core';

import { UpgradedSimpleDirective } from './upgraded-simple.directive';
import { managementServiceFactory } from './management-service.factory';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    UpgradedSimpleDirective
  ],
  imports: [
    UpgradeModule
  ],
  exports: [
    UpgradedSimpleDirective
  ],
  providers: [
    [{ provide: '$scope', useExisting: '$rootScope' }],
    {
      provide: 'managementService',
      useFactory: managementServiceFactory,
      deps: ['$injector']
    }
  ],

})
export class AngularTestSimpleLibModule {

  constructor(upgrade: UpgradeModule) {
    upgrade.bootstrap(document.body, ['gridReport'], { strictDi: true });
  }

  // Does nothing by design.
  // This is to facilitate "hybrid bootstrapping"
  ngDoBootstrap() { }
}
