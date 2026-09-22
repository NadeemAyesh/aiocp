import { Component, signal, OnInit, inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { NewsActivitiesComponent } from './components/news-activities/news-activities.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DirectDonationComponent } from './components/direct-donation/direct-donation.component';
import { MediaCenterComponent } from './components/media-center/media-center.component';
import { AboutOverviewComponent } from './components/about-overview/about-overview.component';
import { AboutVisionPartnersComponent } from './components/about-vision/about-vision.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ProjectItem, MediaItem, NewsArticle } from './models/website.models';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSliderComponent,
    NewsActivitiesComponent,
    ProjectsComponent,
    DirectDonationComponent,
    AboutOverviewComponent,
    MediaCenterComponent,
    AboutVisionPartnersComponent,
    FooterComponent,
    ModalsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private platformId = inject(PLATFORM_ID);

  // Modal states
  selectedProject = signal<ProjectItem | null>(null);
  selectedVideo = signal<MediaItem | null>(null);
  selectedPhoto = signal<MediaItem | null>(null);
  selectedArticle = signal<NewsArticle | null>(null);

  showShareModal = signal<boolean>(false);
  showSearchModal = signal<boolean>(false);
  showDonateModal = signal<boolean>(false);

  // FAB & Scroll to Top states
  showBackToTop = signal<boolean>(false);
  scrollProgress = signal<number>(0);
  isFabOpen = signal<boolean>(false);

  private scrollTicking = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.lenis || !isPlatformBrowser(this.platformId) || this.scrollTicking) return;
    this.scrollTicking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const shouldShow = scrollY > 280;
      if (this.showBackToTop() !== shouldShow) {
        this.showBackToTop.set(shouldShow);
      }

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((scrollY / docHeight) * 100)));
        if (Math.abs(this.scrollProgress() - progress) >= 1) {
          this.scrollProgress.set(progress);
        }
      }
      this.scrollTicking = false;
    });
  }

  scrollToTop(): void {
    if (this.lenis) {
      this.lenis.scrollTo(0, { duration: 1.2 });
    } else if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleFab(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.isFabOpen.update(v => !v);
  }

  closeFab(): void {
    this.isFabOpen.set(false);
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    if (this.isFabOpen()) {
      this.isFabOpen.set(false);
    }
  }

  // Modal handlers
  onProjectDetails(p: ProjectItem) {
    this.selectedProject.set(p);
  }

  onDonateProject(p: ProjectItem) {
    this.showDonateModal.set(true);
  }

  onArticleSelected(a: NewsArticle) {
    this.selectedArticle.set(a);
  }

  onOpenVideo(v: MediaItem) {
    this.selectedVideo.set(v);
  }

  onOpenPhoto(p: MediaItem) {
    this.selectedPhoto.set(p);
  }

  onOpenSearch() {
    this.showSearchModal.set(true);
  }

  onOpenDonate() {
    this.showDonateModal.set(true);
  }

  onOpenShare() {
    this.showShareModal.set(true);
  }

  closeAllModals() {
    this.selectedProject.set(null);
    this.selectedVideo.set(null);
    this.selectedPhoto.set(null);
    this.selectedArticle.set(null);
    this.showShareModal.set(false);
    this.showSearchModal.set(false);
    this.showDonateModal.set(false);
  }

  private lenis?: Lenis;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.dismissPreloader();
      this.initLenis();
    }
  }

  private dismissPreloader(): void {
    // Elegant fade out after initial mount
    setTimeout(() => {
      const preloader = document.getElementById('app-preloader');
      if (preloader) {
        preloader.classList.add('app-preloader--hidden');
        setTimeout(() => {
          preloader.remove();
        }, 650);
      }
    }, 750);
  }

  private initLenis(): void {
    this.lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      duration: 1.1,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      anchors: {
        offset: -88
      },
      prevent: (node: HTMLElement) => {
        return node.closest('.scrollbar-none, .overflow-y-auto, .overflow-x-auto, textarea, input, select, app-modals') !== null;
      }
    });

    this.lenis.on('scroll', (e: any) => {
      const scrollY = typeof e.scroll === 'number' ? e.scroll : window.scrollY;
      const shouldShow = scrollY > 280;
      if (this.showBackToTop() !== shouldShow) {
        this.showBackToTop.set(shouldShow);
      }

      const limit = e.limit || (document.documentElement.scrollHeight - window.innerHeight);
      if (limit > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((scrollY / limit) * 100)));
        if (Math.abs(this.scrollProgress() - progress) >= 1) {
          this.scrollProgress.set(progress);
        }
      }
    });
  }
}
