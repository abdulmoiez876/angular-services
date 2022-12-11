import { Component } from '@angular/core';
import { AccountsService } from '../shared/services/accounts.service';
import { LoggingService } from '../shared/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  onCreateAccount(name: string, status: string) {
    this.accountsService.addAccount(name, status);
    this.loggingService.logStatus(status);
  }
}
