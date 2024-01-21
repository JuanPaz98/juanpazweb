import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { About } from 'src/app/models/translations.model';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  
  public about?: About;
  private subscription: Subscription;

  constructor(private languageService: LanguageService) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.about = translations.about;
    });
  }
}