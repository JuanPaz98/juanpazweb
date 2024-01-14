import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimelineConfig } from 'src/app/models/timeline.config';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'experience',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})

export class BackgroundComponent {
  translations: any;
  private subscription: Subscription

  public experienceConfig!: TimelineConfig;
  public educationConfig!: TimelineConfig;

  constructor(private languageService: LanguageService) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
      this.experienceConfig = this.buildExperienceConfig()
      this.educationConfig = this.buildEducationConfig()
    });

  }

  buildExperienceConfig(): TimelineConfig {
    return {
      mainTitle: this.translations.background[0].mainTitle,
      elements: [
        {
          title: this.translations.background[0].experienceList[0].title,
          company: this.translations.background[0].experienceList[0].company,
          initialDate: this.translations.background[0].experienceList[0].initialDate,
          finalDate: this.translations.background[0].experienceList[0].finalDate,
          description: this.translations.background[0].experienceList[0].description,
        },
        {
          title: this.translations.background[0].experienceList[1].title,
          company: this.translations.background[0].experienceList[1].company,
          initialDate: this.translations.background[0].experienceList[1].initialDate,
          finalDate: this.translations.background[0].experienceList[1].finalDate,
          description: this.translations.background[0].experienceList[1].description,
        },
        {
          title: this.translations.background[0].experienceList[2].title,
          company: this.translations.background[0].experienceList[2].company,
          initialDate: this.translations.background[0].experienceList[2].initialDate,
          finalDate: this.translations.background[0].experienceList[2].finalDate,
          description: this.translations.background[0].experienceList[2].description,
        }        
      ]
    }
    
  }
  
  buildEducationConfig(): TimelineConfig {
    return {
      mainTitle: this.translations.background[1].mainTitle,
      elements: [
        {
          title: this.translations.background[1].educationList[0].title,
          company: this.translations.background[1].educationList[0].company,
          initialDate: this.translations.background[1].educationList[0].initialDate,
          finalDate: this.translations.background[1].educationList[0].finalDate,
          description: this.translations.background[1].educationList[0].description,
        },
        {
          title: this.translations.background[1].educationList[1].title,
          company: this.translations.background[1].educationList[1].company,
          initialDate: this.translations.background[1].educationList[1].initialDate,
          finalDate: this.translations.background[1].educationList[1].finalDate,
          description: this.translations.background[1].educationList[1].description,
        },
      ]
    }
    
  }

}
