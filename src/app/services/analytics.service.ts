import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  public logEvent(eventName: string, params: Record<string, any> = {}): void {
    gtag('event', eventName, params);
  }

  public logButtonClick(name: string): void {
    this.logEvent(name, {
      event_category: 'button',
      event_label: name,
    });
  }

  public logPageView(path: string): void {
    this.logEvent('page_view', {
      page_path: path
    });
  }
}
