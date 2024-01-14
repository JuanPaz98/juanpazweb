import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ThemeService } from 'src/app/services/theme.service';
import { ThemeEnum } from '../menu/enums/theme.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  translations: any;
  public isDarkTheme: boolean = false;
  private languageSubsctiption?: Subscription;
  private ThemeSubsctiption?: Subscription;

  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService) {
    this.languageSubsctiption = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
    });
    this.ThemeSubsctiption = this.themeService.getTheme().subscribe((theme) => {
      this.isDarkTheme = theme === ThemeEnum.LIGHT;
    });
  }
}
