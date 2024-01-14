import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeEnum } from '../components/menu/enums/theme.enum';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  public currentTheme!: string
  public themeImgSource?: string;
  public arrowDownImgSource?: string;
  private themeSubject = new BehaviorSubject<string>(this.currentTheme);

  public toggleTheme() {
    if (this.currentTheme == ThemeEnum.LIGHT) { 
        this.themeImgSource = '../../assets/icons/moon.png'
        this.arrowDownImgSource = '../../assets/icons/arrow-down-dark.png'
        document.body.classList.remove(ThemeEnum.DARK);
        this.updateThemeInStorage(this.currentTheme);
        this.currentTheme = ThemeEnum.DARK;
      }
      else if (this.currentTheme == ThemeEnum.DARK) {
        this.themeImgSource = '../../assets/icons/sun.png'
        this.arrowDownImgSource = '../../assets/icons/arrow-down-light.png'
        document.body.classList.add(ThemeEnum.DARK);
        this.updateThemeInStorage(this.currentTheme);
        this.currentTheme = ThemeEnum.LIGHT;
      }
      this.themeSubject.next(this.currentTheme);
  }

  public getTheme(): Observable<string> {
    return this.themeSubject.asObservable();
  }

  public getThemeFromStorage(): string {
    const ThemeFromStorage = localStorage.getItem('theme');
    return ThemeFromStorage 
    ? this.currentTheme = ThemeFromStorage
    : this.currentTheme = this.currentTheme
  }
  
  public updateTheme() {
    this.currentTheme = localStorage.getItem('theme') || ThemeEnum.LIGHT;
    this.toggleTheme();
  }

  protected updateThemeInStorage(theme: string) {
    localStorage.setItem('theme', theme);
  }
}