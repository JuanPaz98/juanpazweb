import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageEnum } from './enums/languages.enum';
import { ThemeEnum } from './enums/theme.enum';

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
  public themeSaved: string = 'light';
  private subscription: Subscription;

  @ViewChild('dropdownListElement') dropdownListElement?: ElementRef;

  constructor(
    private languageService: LanguageService,
    private renderer: Renderer2 ) {
    this.subscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
    })
  }

  public ngOnInit(): void {
    this.internalInit();
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
    if (this.themeSaved == ThemeEnum.LIGHT) { 
      this.themeImgSource = '../../../assets/icons/moon.png'
      document.body.classList.remove(ThemeEnum.DARK);
      this.updateThemeInStorage(this.themeSaved);
      this.themeSaved = ThemeEnum.DARK;
    }
    else if (this.themeSaved == ThemeEnum.DARK) {
      this.themeImgSource = '../../../assets/icons/sun.png'
      document.body.classList.add(ThemeEnum.DARK);
      this.updateThemeInStorage(this.themeSaved);
      this.themeSaved = ThemeEnum.LIGHT;
    }
  }

  protected updateThemeInStorage(theme: string) {
    localStorage.setItem('theme', theme);
  }

  protected updateTheme() {
    this.themeSaved = localStorage.getItem('theme') || ThemeEnum.LIGHT;
    this.toggleTheme();
  }
  
  protected updateLanguage() {
    this.languageSelected = this.languageService.getLanguageFromStorage()
    this.onUpdateLanguage(this.languageSelected);
  }

  protected dropDownListClickOutsideListener() {
    document.addEventListener('click', (event) => {
      if (this.isDropDownClicked) {
        const target = event.target as HTMLElement;
        if (this.dropdownListElement && !this.dropdownListElement.nativeElement.contains(target)) {
          this.renderer.removeClass(this.dropdownListElement.nativeElement, 'drop-down--active');
          this.isDropDownClicked = false;
        }
      }
    }) 
  }

  protected internalInit() {
    this.updateTheme();
    this.updateLanguage();
    this.dropDownListClickOutsideListener();
  }
}
