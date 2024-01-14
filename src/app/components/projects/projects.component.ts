import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { LanguageService } from 'src/app/services/language.service';

SwiperCore.use([Pagination, Navigation, Autoplay]);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {

  translations: any;
  projects: any = [];
  private subscription: Subscription;

  constructor(private languageService: LanguageService) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
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
          linkProject: 'https://juanpaz98.github.io/curso-react/',
          linkCode: 'https://github.com/JuanPaz98/curso-react'
        },
      ]
    });
  }

}
