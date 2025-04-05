import { Component, ViewEncapsulation } from "@angular/core";
import { Subscription } from "rxjs";
import { Skill } from "src/app/models/skill.model";
import { Translation } from "src/app/models/translations.model";
import { LanguageService } from "src/app/services/language.service";
import SwiperCore, { Navigation, Pagination } from "swiper";


SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent {
  translations!: Translation;
  skills: Skill[] = [];
  private subscription: Subscription;

  constructor(private languageService: LanguageService) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
      this.buildSkillsConfig();
      
    });
  }

  buildSkillsConfig() {
    if (this.translations && this.translations.skills) {
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
          image : '../../../assets/icons/Bootstrap.png',
          description: this.translations.skills.bootstrap
        },
        {
          image : '../../../assets/icons/material.png',
          description: this.translations.skills.material
        },
        {
          image : '../../../assets/icons/primeng.png',
          description: this.translations.skills.primeNg
        },
        {
          image : '../../../assets/icons/keycloak.png',
          description: this.translations.skills.keycloak
        },
        {
          image : '../../../assets/icons/redis.png',
          description: this.translations.skills.redis
        },
        {
          image : '../../../assets/icons/docker.png',
          description: this.translations.skills.docker
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
    }
  }
}
