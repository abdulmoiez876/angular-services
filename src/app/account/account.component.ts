import { Component, Input, } from '@angular/core';
import { LoggingService } from '../shared/services/logging.service';
import { AccountsService } from '../shared/services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string} = {name: '', status: ''};
  @Input() id: number = 0;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatus(status);
  }
}