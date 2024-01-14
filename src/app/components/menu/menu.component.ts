import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageEnum } from './enums/languages.enum';
import { ThemeEnum } from './enums/theme.enum';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit, OnDestroy  {

  public active = false;
  public translations: any;
  public isDropDownClicked = false;
  public languageSelected: string = LanguageEnum.ENG;
  public languageImgSource?: string;
  public languageToShow: string = '';
  public themeImgSource?: string;
  public arrowDownImgSource?: string;
  public themeSaved: string = ThemeEnum.LIGHT;
  public isResponsive: boolean = false;
  private languageSubscription: Subscription;
  private themeSubscription: Subscription;

  @ViewChild('dropdownElement') dropdownElement?: ElementRef;

  constructor (
    private languageService: LanguageService,
    private themeService: ThemeService,
    private renderer: Renderer2 
    ) {
    this.languageSubscription = this.languageService.getTranslations().subscribe((translations) => {
      this.translations = translations;
    })
    this.themeSubscription = this.themeService.getTheme().subscribe((theme) => {
      this.themeSaved = theme;
      this.themeImgSource = this.themeService.themeImgSource;
      this.arrowDownImgSource = this.themeService.arrowDownImgSource;
    });
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
      this.languageImgSource = '../../../assets/icons/eng.png'
    } 
    else if (language == LanguageEnum.ESP) {
      this.languageService.setLanguage(LanguageEnum.ESP);
      this.languageToShow = this.translations.languages.spanish;
      this.languageSelected = LanguageEnum.ESP;
      this.languageImgSource = '../../../assets/icons/esp.png'
    }
  }

  public ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
    this.themeSubscription.unsubscribe();
  }

  public toggleTheme() {
    this.themeService.toggleTheme();
  }
  
  protected updateLanguage() {
    this.languageSelected = this.languageService.getLanguageFromStorage()
    this.onUpdateLanguage(this.languageSelected);
  }

  protected dropDownListClickOutsideListener() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (this.isDropDownClicked && this.dropdownElement && !this.dropdownElement.nativeElement.contains(target)) {
        this.renderer.removeClass(this.dropdownElement.nativeElement, 'drop-down--active');
        this.isDropDownClicked = false;
      }
    }) 
  }

  protected internalInit() {
    this.themeService.updateTheme();
    this.updateLanguage();
    this.dropDownListClickOutsideListener();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isResponsive = window.innerWidth < 1024;
  }
}
