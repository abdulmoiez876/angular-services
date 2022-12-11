import { Component } from '@angular/core';
import { AccountsService } from './shared/services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private accountsService: AccountsService) {}

  accounts: {name: string, status: string}[] = this.accountsService.accounts;
}
