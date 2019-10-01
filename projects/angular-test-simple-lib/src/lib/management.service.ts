import { Injectable, Inject } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ManagementService {

    constructor(
        @Inject('managementService') private managementService: any
    ) {
    }

    showDialog(message: string) {
        this.managementService.showDialog(message);
    }

}