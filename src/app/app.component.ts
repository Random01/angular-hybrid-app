import { Component } from '@angular/core';
import { ManagementService } from '../../projects/angular-test-simple-lib/src/lib/management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-app';
  visible = false;

  constructor(
    private managementService: ManagementService
  ) {

  }

  showDialog() {
    this.managementService.showDialog('Test!');
  }
}
