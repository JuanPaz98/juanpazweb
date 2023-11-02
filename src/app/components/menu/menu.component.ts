import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageEnum } from './enums/languages.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit, OnDestroy  {

  public active = false;
  public translations: any;
  public isDropDownClicked = false;
  public languageSelected: string = '';
  public imageSource?: string;
  public languageToShow: string = '';
  public isFirstComponentInteraction = true;
  public themeImgSource?: string;
  private subscription: Subscription;

  @ViewChild('dropdownListElement') dropdownListEl?: ElementRef;

  constructor(
    private languageService: LanguageService,
    private renderer: Renderer2 ) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
    })
  }

  public ngOnInit(): void {
    this.themeImgSource = '../../../assets/icons/moon.png'
    this.languageSelected = this.languageService.getLanguageFromStorage()
    this.onUpdateLanguage(this.languageSelected);
    document.addEventListener('click', (event) => {
      if (this.isDropDownClicked) {
        const target = event.target as HTMLElement;
        if (this.dropdownListEl && !this.dropdownListEl.nativeElement.contains(target)) {
          this.renderer.removeClass(this.dropdownListEl.nativeElement, 'drop-down--active');
          this.isDropDownClicked = false;
        }
      }
    })  
  }

  public onActiveToggle(){
    this.active = !this.active;
  }

  public onShowLanguageItems() {
    this.isDropDownClicked = !this.isDropDownClicked;
  }

  public onUpdateLanguage(language: string) {
    if (language == LanguageEnum.ENG) {
      this.languageService.setLanguage(LanguageEnum.ENG);
      this.languageToShow = this.translations.languages.english;
      this.languageSelected = LanguageEnum.ENG;
      this.imageSource = '../../../assets/icons/eng.png'
    } 
    else if (language == LanguageEnum.ESP) {
      this.languageService.setLanguage(LanguageEnum.ESP);
      this.languageToShow = this.translations.languages.spanish;
      this.languageSelected = LanguageEnum.ESP;
      this.imageSource = '../../../assets/icons/esp.png'
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public toggleTheme() {
    this.themeImgSource == '../../../assets/icons/moon.png'
    ? this.themeImgSource = '../../../assets/icons/sun.png'
    : this.themeImgSource = '../../../assets/icons/moon.png';
    document.body.classList.toggle('dark') 
  }

}
