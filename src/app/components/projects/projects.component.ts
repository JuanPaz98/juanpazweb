import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectConfig } from 'src/app/models/project.config';
import { Translation } from 'src/app/models/translations.model';
import { LanguageService } from 'src/app/services/language.service';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay]);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {

  translations: Translation = {};
  projects: ProjectConfig[] = [];
  private subscription: Subscription;

  constructor(private languageService: LanguageService) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
      this.buildProjectsConfig(); 
    });
  }

  buildProjectsConfig() {
    if (this.translations && this.translations.projects) {
      this.projects = [
        { 
          image : '../../../assets/img/todolist.png',
          title: this.translations.projects.listOfProjects[0].project.title,
          description : this.translations.projects.listOfProjects[0].project.description,
          linkProject: 'https://juanpaz98.github.io/curso-react/',
          linkCode: 'https://github.com/JuanPaz98/curso-react'
        },
        {
          image : '../../../assets/img/meli-clon.png',
          title: this.translations.projects.listOfProjects[1].project.title,
          description: this.translations.projects.listOfProjects[1].project.description,
          linkProject: 'https://meli-clon.web.app/',
          linkCode: 'https://github.com/JuanPaz98/meli-clon'
        },
      ]
    }
  }
}
