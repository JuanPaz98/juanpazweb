import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectConfig } from 'src/app/models/project.config';
import { Translation } from 'src/app/models/translations.model';
import { LanguageService } from 'src/app/services/language.service';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ProjectsEnum } from 'src/app/enums/projects.enum';
import { DialogConfig } from 'src/app/models/dialog-config';

SwiperCore.use([Pagination, Navigation, Autoplay]);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  translations: Translation = {};
  projects: ProjectConfig[] = [];
  public modalIsOpen: boolean = false;
  public isResponsive: boolean = false
  private subscription: Subscription;

  @HostListener('window:resize', ['$event'])
    onWindowResize() {
      this.isResponsive = window.innerWidth < 1024;
    }

  constructor(public dialog: MatDialog,private languageService: LanguageService) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
      this.buildProjectsConfig(); 
    });
  }

  ngOnInit(): void {
    this.isResponsive = window.innerWidth < 1024;
  }

  buildProjectsConfig() {
    if (this.translations && this.translations.projects) {
      this.projects = [
        { 
          image : '../../../assets/img/Todo-app-image.png',
          title: this.translations.projects.listOfProjects[0].project.title,
          description : this.translations.projects.listOfProjects[0].project.description,
          linkProject: 'https://jptodos.azurewebsites.net',
          linkCode: 'https://github.com/JuanPaz98/TodosMVC',
          hasDemo: true,
          projectEnum: ProjectsEnum.TODOS
        },
        {
          image : '../../../assets/img/meli-clon.png',
          title: this.translations.projects.listOfProjects[1].project.title,
          description: this.translations.projects.listOfProjects[1].project.description,
          linkProject: 'https://meli-clon.web.app/',
          linkCode: 'https://github.com/JuanPaz98/meli-clon',
          hasDemo: false,
        },
        {
          image : '../../../assets/img/meli-clon.png',
          title: this.translations.projects.listOfProjects[2].project.title,
          description: this.translations.projects.listOfProjects[2].project.description,
          linkCode: 'https://github.com/JuanPaz98/StockFlow',
          hasDemo: false,
        },
      ]
    }
  }

  openDialog(project: ProjectConfig) {
    this.modalIsOpen = true;
    const dialogConfig: DialogConfig = {
      isResponsive: this.isResponsive,
      languageSelected: this.languageService.currentLanguage,
      projectSelected: project.projectEnum
    }
    this.dialog.open(DialogComponent, {data: dialogConfig}).afterClosed().subscribe(() => {
      this.modalIsOpen = false;}
    );}  
  }
