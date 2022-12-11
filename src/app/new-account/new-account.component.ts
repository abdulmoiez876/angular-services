import { Component } from '@angular/core';
import { AccountsService } from '../shared/services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private accountsService: AccountsService) {}

  onCreateAccount(name: string, status: string) {
    this.accountsService.addAccount(name, status);
  }
}
