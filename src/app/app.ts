import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { NewsActivitiesComponent } from './components/news-activities/news-activities.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DirectDonationComponent } from './components/direct-donation/direct-donation.component';
import { MediaCenterComponent } from './components/media-center/media-center.component';
import { AboutVisionPartnersComponent } from './components/about-vision/about-vision.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ProjectItem, MediaItem, NewsArticle } from './models/website.models';

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
    MediaCenterComponent,
    AboutVisionPartnersComponent,
    FooterComponent,
    ModalsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Modal states
  selectedProject = signal<ProjectItem | null>(null);
  selectedVideo = signal<MediaItem | null>(null);
  selectedPhoto = signal<MediaItem | null>(null);
  selectedArticle = signal<NewsArticle | null>(null);

  showShareModal = signal<boolean>(false);
  showSearchModal = signal<boolean>(false);
  showDonateModal = signal<boolean>(false);

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
}
