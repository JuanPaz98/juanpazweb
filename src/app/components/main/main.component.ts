import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Translation } from 'src/app/models/translations.model';
import { LanguageService } from 'src/app/services/language.service';
import { ThemeService } from 'src/app/services/theme.service';
import { LanguageEnum } from '../menu/enums/languages.enum';
import { ThemeEnum } from '../menu/enums/theme.enum';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  translations!: Translation;
  public isDarkTheme: boolean = false;
  public githubIcon: string = '';
  public linkedinIcon: string = '';
  public urlCV: string = '';
  public downloadName: string = '';
  private languageSubsctiption?: Subscription;
  private ThemeSubsctiption?: Subscription;

  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService,
    private analyticsService: AnalyticsService
  ) {
    this.languageSubsctiption = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
    });
    this.ThemeSubsctiption = this.themeService.getTheme().subscribe((theme) => {
      this.isDarkTheme = theme === ThemeEnum.LIGHT;
      this.updateIcons(this.isDarkTheme);
    });
  }

  updateIcons(isDarkTheme: boolean) {
    if (isDarkTheme) {
      this.githubIcon = '../../../assets/icons/github-light.png';
      this.linkedinIcon = '../../../assets/icons/linkedin-light.png'
    } else {
      this.githubIcon = '../../../assets/icons/github.png';
      this.linkedinIcon =  '../../../assets/icons/linkedin.png'
    }
  }

  downloadCV(): void {
    if (this.languageService.currentLanguage === LanguageEnum.ENG) {
      this.urlCV = '../../../assets/Juan_Jose_F_Paz_Eng.pdf'
      this.downloadName = 'Juan_Jose_F_Paz_Eng'
      this.analyticsService.logButtonClick('Download_CV_English');
    }
    else if (this.languageService.currentLanguage === LanguageEnum.ESP) {
      this.urlCV = '../../../assets/Juan_Jose_F_Paz_Esp.pdf';
      this.downloadName = 'Juan_Jose_F_Paz_Esp'
      this.analyticsService.logButtonClick('Download_CV_Spanish');
    }
  }

  public trackClick(linkName: string): void {
    this.analyticsService.logButtonClick(linkName);
  }
}
