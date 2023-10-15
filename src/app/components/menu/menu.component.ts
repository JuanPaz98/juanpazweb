import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnDestroy  {

  public active = false;
  public translations: any;
  private isClickedLanguage: boolean = false;
  private subscription: Subscription;

  constructor(private languageService: LanguageService) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
    })
  }

  onActiveToggle(){
    this.active = !this.active;
  }

  onChangeLanguage(language: string): void {
    if(this.languageService.currentLanguage != language) {
      this.languageService.setLanguage(language);
    }
  }

  onAddClass(){
    this.isClickedLanguage = !this.isClickedLanguage;
    const selectElement = document.getElementById('language-selector');
    this.isClickedLanguage 
    // @ts-ignore
    ? selectElement.classList.add('language-selector--clicked')
    // @ts-ignore
    : selectElement.classList.remove('language-selector--clicked');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
