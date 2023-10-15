import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
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
          title: this.translations.projects.first.title,
          description : this.translations.projects.first.description,
          linkProject: 'https://juanpaz98.github.io/curso-react/',
          linkCode: 'https://github.com/JuanPaz98/curso-react'
        },
        {
          image : '../../../assets/img/awesome heroes.png',
          title: this.translations.projects.second.title,
          description: this.translations.projects.second.description,
          linkProject: 'https://juanpaz98.github.io/awesome-heroes/#',
          linkCode: 'https://github.com/JuanPaz98/awesome-heroes'
        },
        {
          image : '../../../assets/img/gifhub.png',
          title: this.translations.projects.third.title,
          description: this.translations.projects.third.description,
          linkProject: 'https://juanpaz98.github.io/gifhub/',
          linkCode: 'https://github.com/JuanPaz98/gifhub'
        },
        {
          image : '../../../assets/img/meli-clon.png',
          title: this.translations.projects.fourth.title,
          description: this.translations.projects.fourth.description,
          linkProject: 'https://juanpaz98.github.io/curso-react/',
          linkCode: 'https://github.com/JuanPaz98/curso-react'
        }
      ]
    });
  }

}
