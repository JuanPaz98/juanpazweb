import { Injectable } from '@angular/core';
import { translations } from '../translations'
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageEnum } from '../components/menu/enums/languages.enum';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  public currentLanguage: string = LanguageEnum.ENG;
  private translations: any = {};
  // @ts-ignore
  private translationsSubject = new BehaviorSubject<any>(translations[this.currentLanguage]);

  setLanguage(language: string) {
    this.currentLanguage = language;
    // @ts-ignore
    this.updateTranslations(translations[language]);
    this.saveLanguageInStorage(language);
  }

  getTranslations(): Observable<any> {
    return this.translationsSubject.asObservable()
  }

  updateTranslations(newTranslations: any) {
    this.translations = newTranslations;
    this.translationsSubject.next(this.translations);
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