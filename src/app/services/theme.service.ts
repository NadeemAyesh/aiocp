import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  // Reactive signal representing the current theme
  isDarkMode = signal<boolean>(false);

  constructor() {
    if (this.isBrowser) {
      this.initTheme();
    }
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('palimar_theme');
    const isDark = savedTheme === 'dark';
    this.isDarkMode.set(isDark);
    this.applyTheme(isDark);
  }

  toggleTheme(): void {
    const nextState = !this.isDarkMode();
    this.isDarkMode.set(nextState);
    if (this.isBrowser) {
      localStorage.setItem('palimar_theme', nextState ? 'dark' : 'light');
      this.applyTheme(nextState);
    }
  }

  setTheme(mode: 'dark' | 'light'): void {
    const isDark = mode === 'dark';
    this.isDarkMode.set(isDark);
    if (this.isBrowser) {
      localStorage.setItem('palimar_theme', mode);
      this.applyTheme(isDark);
    }
  }

  private applyTheme(isDark: boolean): void {
    if (!this.isBrowser) return;

    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }
}
