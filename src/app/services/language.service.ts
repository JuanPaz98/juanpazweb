import { Injectable } from '@angular/core';
import { translations } from '../translations'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  public currentLanguage: string = 'spanish';
  private translations: any = {};
  // @ts-ignore
  private translationsSubject = new BehaviorSubject<any>(translations[this.currentLanguage]);

  setLanguage(language: string) {
    this.currentLanguage = language;
    // @ts-ignore
    this.updateTranslations(translations[language]);
  }

  getTranslations(): Observable<any> {
    return this.translationsSubject.asObservable()
  }

  updateTranslations(newTranslations: any) {
    this.translations = newTranslations;
    this.translationsSubject.next(this.translations);
  }
}