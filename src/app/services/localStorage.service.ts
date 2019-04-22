import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  get(key: string): any {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  set(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    window.localStorage.removeItem(key);
  }
}
