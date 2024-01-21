import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimelineConfig } from 'src/app/models/timeline.config';
import { Background, Translation } from 'src/app/models/translations.model';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'experience',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})

export class BackgroundComponent {
  translations?: Translation;
  private subscription: Subscription

  public experienceConfig?: TimelineConfig;
  public educationConfig?: TimelineConfig;

  constructor(private languageService: LanguageService) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
      if(this.translations.background) {
        this.experienceConfig = this.buildBackgroundConfig(this.translations.background[0]);
        this.educationConfig = this.buildBackgroundConfig(this.translations.background[1]);
      }
    });
  }

  buildBackgroundConfig(background: Background): TimelineConfig {
    if (background) {
      return {
        mainTitle: background.mainTitle,
        elements: background.elementList
      }
    }
    return {}
  }
}