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
          image : '../../../assets/icons/html.png',
          description : this.translations.skills.html
        },
        {
          image : '../../../assets/icons/css.png',
          description: this.translations.skills.css
        },
        {
          image : '../../../assets/icons/typescript.png',
          description: this.translations.skills.typescript
        },
        {
          image : '../../../assets/icons/angular.png',
          description: this.translations.skills.angular
        },
        {
          image : '../../../assets/icons/react.png',
          description: this.translations.skills.react
        },
        {
          image : '../../../assets/icons/sass.png',
          description: this.translations.skills.sass
        },
        {
          image : '../../../assets/icons/dot-NET.png',
          description: this.translations.skills.dotNet
        },
        {
          image : '../../../assets/icons/umbraco.png',
          description: this.translations.skills.umbraco
        },
        {
          image : '../../../assets/icons/azure.png',
          description: this.translations.skills.azure
        },
        {
          image : '../../../assets/icons/git.png',
          description: this.translations.skills.git
        },
        {
          image : '../../../assets/icons/scrum.png',
          description: this.translations.skills.scrum
        }
      ]
    });
  }
}
