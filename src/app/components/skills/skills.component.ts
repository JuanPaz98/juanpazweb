import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";

import SwiperCore, { Pagination, Navigation } from "swiper";
import { Subscription } from "rxjs";
import { LanguageService } from "src/app/services/language.service";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent {
  translations: any;
  skills: any[] = [];
  private subscription: Subscription;

  constructor(private languageService: LanguageService) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
      this.skills = [
        { 
          image : '../../../assets/icons/html-css-js.png',
          description : this.translations.skills.baseSkills
        },
        {
          image : '../../../assets/icons/typescript.png',
          description: this.translations.skills.typescript
        },
        {
          image : '../../../assets/icons/angular-react.png',
          description: this.translations.skills.angular
        },
        {
          image : '../../../assets/icons/git-github.png',
          description: this.translations.skills.git
        },
        {
          image : '../../../assets/icons/nodejs.png',
          description: this.translations.skills.backend
        },
        {
          image : '../../../assets/icons/api.png',
          description: this.translations.skills.api
        }
      ]
    });
  }
}
