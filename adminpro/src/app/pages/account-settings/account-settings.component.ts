import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [`
    #themecolors a{
        cursor: pointer;
    }
  `]
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settings: SettingsService ) { }

  ngOnInit(): void {
    this.setCheck();
  }

  changeTheme(theme: string, anchor: HTMLAnchorElement): void {
    this.applyCheck(anchor);
    this.settings.applyTheme(theme);
  }

  applyCheck( anchor: HTMLAnchorElement): void {
    const selectores = document.getElementsByClassName('selector');
    for (let i = 0; i < selectores.length; i++) {
      selectores[i].classList.remove('working');
    }
    anchor.classList.add('working');
  }

  setCheck(): void {
    const selectores = document.getElementsByClassName('selector');

    const theme = this.settings.theme.theme;

    for (let i = 0; i < selectores.length; i++) {
      if (selectores[i].getAttribute('data-theme') === theme) {
        selectores[i].classList.add('working');
        break;
      }
    }
  }
}
