import { UpgradeModule } from '@angular/upgrade/static';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ManagementService {

    constructor(
        private upgrade: UpgradeModule
    ) {

    }

    showDialog(message: string) {
        this.upgrade.$injector.get('gfManagement').showDialog(message);
    }

}