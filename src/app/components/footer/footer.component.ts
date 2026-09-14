import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="footer" class="site-footer">
      <!-- Gradient Edge Line -->
      <span class="site-footer__edge" aria-hidden="true"></span>

      <!-- 4 Columns Grid -->
      <div class="site-footer__grid">
        
        <!-- Brand Column -->
        <div class="footer-brand">
          <div class="footer-brand__head">
            <img 
              src="images/logo-aiocp.webp" 
              alt="شعار الهيئة العربية الدولية للإعمار في فلسطين" 
              width="56" 
              height="56" 
              loading="lazy" 
              class="footer-brand__logo"
            />
            <p class="footer-brand__name">
              الهيئة العربية الدولية
              <br />
              للإعمار في فلسطين
            </p>
          </div>

          <p class="footer-brand__about">
            الهيئة العربية الدولية منظمة غير ربحية تعنى بإعمار فلسطين تنفذ مشاريع طبية وسكنية وتعليمية لدعم صمود الشعب الفلسطيني
          </p>

          <nav class="footer-social" aria-label="وسائل التواصل الاجتماعي">
            <a 
              *ngFor="let s of socials"
              [href]="s.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="footer-social__link"
              [title]="s.name"
            >
              <svg *ngIf="s.id === 'facebook'" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <svg *ngIf="s.id === 'instagram'" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <svg *ngIf="s.id === 'x'" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <svg *ngIf="s.id === 'youtube'" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </nav>
        </div>

        <!-- Quick Links Column -->
        <nav class="footer-col" aria-labelledby="footer-quick">
          <h2 id="footer-quick" class="footer-col__title">روابط سريعة</h2>
          <ul class="footer-col__list">
            <li *ngFor="let link of quickLinks">
              <a [href]="link.url" class="footer-col__link">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <!-- Information Column -->
        <nav class="footer-col" aria-labelledby="footer-info">
          <h2 id="footer-info" class="footer-col__title">معلومات</h2>
          <ul class="footer-col__list">
            <li *ngFor="let link of infoLinks">
              <a [href]="link.url" class="footer-col__link">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <!-- Memberships Column (Official UN Clusters) -->
        <section class="footer-memberships" aria-labelledby="footer-memberships-title">
          <h2 id="footer-memberships-title" class="footer-col__title">
            عضويات الهيئة في المنظمات والمؤسسات الدولية والأممية
          </h2>
          <ul class="footer-memberships__list">
            <li *ngFor="let m of memberships" class="footer-memberships__item">
              <span>{{ m.title }}</span>
              <img 
                [src]="m.logo" 
                [alt]="m.title" 
                [width]="m.width" 
                [height]="m.height" 
                loading="lazy" 
                decoding="async" 
              />
            </li>
          </ul>
        </section>

      </div>

      <!-- Legal & Rights Bar -->
      <div class="site-footer__legal">
        <div class="site-footer__legal-inner">
          <p class="site-footer__copy">
            © {{ currentYear }} جميع الحقوق محفوظة. الهيئة العربية الدولية للإعمار في فلسطين.
          </p>
          <div class="site-footer__legal-actions">
            <button type="button" (click)="sharePage.emit()" class="site-footer__share">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                <path d="M18 16.08a2.9 2.9 0 0 0-1.95.77L8.91 12.7a3.3 3.3 0 0 0 0-1.4l7.05-4.11A2.98 2.98 0 1 0 15 5c0 .24.04.47.09.7L8.04 9.81a3 3 0 1 0 0 4.38l7.12 4.16c-.05.21-.08.43-.08.65a2.92 2.92 0 1 0 2.92-2.92z"/>
              </svg>
              <span>شارك الصفحة</span>
            </button>
            <a href="#privacy" class="site-footer__legal-link">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  @Output() sharePage = new EventEmitter<void>();

  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'الرئيسية', url: '#hero' },
    { label: 'مشاريع للتمويل', url: '#projects' },
    { label: 'من نحن', url: '#about' },
    { label: 'شركاؤنا', url: '#about' }
  ];

  infoLinks = [
    { label: 'اتصل بنا', url: '#footer' },
    { label: 'الأسئلة الشائعة', url: '#about' },
    { label: 'سياسة الخصوصية', url: '#footer' },
    { label: 'التقارير والدراسات', url: '#media' }
  ];

  socials = [
    { id: 'facebook', name: 'فيسبوك', url: 'https://www.facebook.com/palimarorg' },
    { id: 'instagram', name: 'انستغرام', url: 'https://www.instagram.com/palimarorg_/' },
    { id: 'x', name: 'منصة X', url: 'https://x.com/palimarorg' },
    { id: 'youtube', name: 'يوتيوب', url: 'https://www.youtube.com/@imargaza' }
  ];

  memberships = [
    { title: 'الأمن الغذائي', logo: 'images/memberships/food-cluster.webp', width: 140, height: 38 },
    { title: 'الصحة', logo: 'images/memberships/health-cluster.webp', width: 130, height: 36 },
    { title: 'المأوى', logo: 'images/memberships/shelter-cluster.webp', width: 145, height: 40 },
    { title: 'المياه والإصحاح', logo: 'images/memberships/wash-cluster.webp', width: 150, height: 42 }
  ];
}
