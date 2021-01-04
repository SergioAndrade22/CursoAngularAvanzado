import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  jsonName: string = 'settings';

  theme: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  // Constructor is called when service is injected
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.loadSettings();
  }

  saveSettings(theme: Settings): void {
    this.theme = theme;
    localStorage.setItem(this.jsonName, JSON.stringify(this.theme));
  }

  loadSettings(): void {
    const lsRet = localStorage.getItem(this.jsonName);
    if (lsRet != null){
      this.theme = JSON.parse(lsRet);
    }
    this.applyTheme(this.theme.theme);
  }

  applyTheme( theme: string): void {
    const themeUrl: string = `assets/css/colors/${ theme }.css`;
    this.document.getElementById('theme')?.setAttribute('href', themeUrl);

    const themeSetting: Settings = {
      themeUrl,
      theme
    };

    this.saveSettings(themeSetting);
  }
}

export interface Settings {
  themeUrl: string;
  theme: string;
}
