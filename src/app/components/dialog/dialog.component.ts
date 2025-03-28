import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfig } from 'src/app/models/dialog-config';
import { LanguageEnum } from '../menu/enums/languages.enum';
import { ProjectsEnum } from 'src/app/enums/projects.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  public languageEnum = LanguageEnum;
  public projectEnum = ProjectsEnum;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogConfig) {}
}
