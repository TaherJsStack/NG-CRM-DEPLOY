import { ThemeEnum, LanguagesEnum } from './../core/enums';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService, ThemeService } from '../core/services';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TranslateModule
  ]
})
export class AuthenticationComponent {

  appLang$!:   Observable<string>;
  // appTheme$!:  Observable<string>;
  isDarkTheme: boolean;

  themeEnum     = ThemeEnum;
  languagesEnum = LanguagesEnum;

  constructor(
    private languageService: LanguageService,
    private themeService:    ThemeService
  ) { 
    this.appLang$    = this.languageService.language
    // this.appTheme$   = this.themeService.theme
    this.isDarkTheme = this.themeService.appTheme == ThemeEnum.Dark ? true : false
  }

  setLangguage(lang: string) {
    this.languageService.appLanguage = lang
  }

  setTheme(theme: string) {
    this.themeService.appTheme = theme
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.setTheme(this.isDarkTheme ? ThemeEnum.Dark : ThemeEnum.Ligth)
  }

}
