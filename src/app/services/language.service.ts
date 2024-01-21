import { Injectable } from '@angular/core';
import { translations } from '../translations'
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageEnum } from '../components/menu/enums/languages.enum';
import { Translation } from '../models/translations.model';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  public currentLanguage: string = LanguageEnum.ENG;
  private languageTranslation!: Translation; 

  // @ts-ignore
  private translationsSubject = new BehaviorSubject<Translation>(translations[this.currentLanguage]);

  setLanguage(language: string) {
    this.currentLanguage = language;
    // @ts-ignore
    this.updateTranslations(translations[language]);
    this.saveLanguageInStorage(language);
  }

  getTranslations(): Observable<Translation> {
    console.log(this.translationsSubject)
    return this.translationsSubject.asObservable()
  }

  updateTranslations(newTranslations: Translation) {
    this.languageTranslation = newTranslations;
    this.translationsSubject.next(this.languageTranslation);
  }

  saveLanguageInStorage(language: string) {
    localStorage.setItem('language', language);
  }

  getLanguageFromStorage(): string {
    const LanguageFromStorage = localStorage.getItem('language');
    return LanguageFromStorage 
    ? this.currentLanguage = LanguageFromStorage
    : this.currentLanguage = this.currentLanguage
  }
}