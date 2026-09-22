import { Component, inject, signal, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';
import { MediaItem } from '../../models/website.models';

@Component({
  selector: 'app-media-center',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <section id="media" class="aura-container py-20 lg:py-28 text-white relative overflow-hidden">
      <!-- Aura Layer 1: Wide Navy/Blue Screen Gradient -->
      <div class="aura-layer-1 absolute inset-0 pointer-events-none" aria-hidden="true"></div>

      <!-- Aura Layer 2: Radial Amber/Navy Center Glow -->
      <div class="aura-layer-2 absolute inset-0 pointer-events-none" aria-hidden="true"></div>

      <!-- Aura Layer 3: Cyan/Sky Soft Overlay -->
      <div class="aura-layer-3 absolute inset-0 pointer-events-none" aria-hidden="true"></div>

      <!-- Film-Grain Noise Overlay (GPU-Accelerated CSS Pattern) -->
      <div class="aura-grain absolute inset-0 pointer-events-none" aria-hidden="true"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-[#f4921e] border border-white/15">
            <span class="w-2 h-2 rounded-full bg-[#f4921e]"></span>
            <span>النافذة الإعلامية للهيئة</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            المركز الإعلامي والتوثيقي
          </h2>
          <p class="text-white/70 text-xs sm:text-sm leading-relaxed">
            توثيق مرئي ومصور لجهود الإعمار، إصدارات هندسية متخصصة، وتقارير دورية تضعكم في صلب الحقيقة والعمل الميداني.
          </p>
        </div>

        <!-- Media Type Tabs (Positioned Below Header, Centered & Spacious) -->
        <div class="flex items-center justify-center mb-12 overflow-x-auto max-w-full px-2 pb-2 scrollbar-none">
          <div class="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/15 shrink-0 shadow-xl">
            <button 
              *ngFor="let tab of mediaTabs"
              (click)="selectTab(tab.key)"
              class="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer shrink-0"
              [class.bg-[#f4921e]]="activeTab() === tab.key"
              [class.text-[#001f3b]]="activeTab() === tab.key"
              [class.shadow-lg]="activeTab() === tab.key"
              [class.text-white/80]="activeTab() !== tab.key"
              [class.hover:text-white]="activeTab() !== tab.key"
              [class.hover:bg-white/10]="activeTab() !== tab.key"
            >
              <!-- Video Tab Icon -->
              <svg *ngIf="tab.key === 'video'" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>

              <!-- Photo Tab Icon -->
              <svg *ngIf="tab.key === 'photo'" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>

              <!-- Reports Tab Icon -->
              <svg *ngIf="tab.key === 'report'" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>

              <!-- Interviews Tab Icon -->
              <svg *ngIf="tab.key === 'interview'" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
              </svg>

              <span>{{ tab.label }}</span>
            </button>
          </div>
        </div>

        <!-- Dynamic Content Display Based on Tab -->

        <!-- TAB 1: VIDEOS (Expanding Card Gallery) -->
        <div *ngIf="activeTab() === 'video'" class="animate-fadeIn space-y-4">
          <!-- Gallery Header Helper -->
          <div class="flex items-center justify-between px-2 text-xs text-white/60">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-[#f4921e] animate-pulse"></span>
              <span>انقر على أي شريحة لتوسيعها واستعراض الفيديو</span>
            </span>
            <div class="flex items-center gap-2">
              <button 
                (click)="prevVideo()" 
                class="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f4921e] hover:text-[#001f3b] text-white flex items-center justify-center transition cursor-pointer"
                title="الفيديو السابق"
              >
                <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
              <button 
                (click)="nextVideo()" 
                class="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f4921e] hover:text-[#001f3b] text-white flex items-center justify-center transition cursor-pointer"
                title="الفيديو التالي"
              >
                <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
            </div>
          </div>

          <!-- Expanding Cards Container -->
          <div class="expanding-cards-container flex gap-2.5 sm:gap-3.5 h-[500px] sm:h-[560px] w-full overflow-x-auto lg:overflow-visible pb-4 pt-1 px-1 scrollbar-none snap-x">
            <div 
              *ngFor="let vid of videoItems; let i = index"
              (click)="setActiveVideo(i, $event)"
              class="expanding-card relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer select-none border transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group shrink-0 lg:shrink"
              [class.card-expanded]="activeVideoIndex() === i"
              [class.card-collapsed]="activeVideoIndex() !== i"
              [class.border-[#f4921e]/80]="activeVideoIndex() === i"
              [class.shadow-[0_12px_40px_rgba(244,146,30,0.25)]]="activeVideoIndex() === i"
              [class.border-white/15]="activeVideoIndex() !== i"
              [class.hover:border-white/40]="activeVideoIndex() !== i"
            >
              <!-- Background Image -->
              <img 
                [src]="vid.image" 
                [alt]="vid.title" 
                loading="lazy"
                decoding="async"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <!-- Dark Overlay Gradients -->
              <div 
                class="absolute inset-0 transition-opacity duration-500"
                [ngClass]="activeVideoIndex() === i 
                  ? 'bg-gradient-to-t from-[#00172e] via-[#00172e]/70 via-50% to-black/25' 
                  : 'bg-black/60 group-hover:bg-black/35'"
              ></div>

              <!-- Collapsed State Content (Sleek Vertical Strip) -->
              <div 
                *ngIf="activeVideoIndex() !== i"
                class="absolute inset-0 flex flex-col items-center justify-between p-3.5 sm:p-4 z-10 pointer-events-none"
              >
                <span class="w-6 h-6 rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold flex items-center justify-center">
                  {{ i + 1 }}
                </span>
                
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white flex items-center justify-center group-hover:bg-[#f4921e] group-hover:text-[#001f3b] group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>

              <!-- Expanded State Content (Rich Details matching reference) -->
              <div 
                *ngIf="activeVideoIndex() === i"
                class="absolute inset-0 flex flex-col justify-between p-5 sm:p-7 z-10 animate-fadeScale overflow-hidden"
              >
                <!-- Top Row Badges -->
                <div class="flex items-center justify-end">
                  <span class="bg-black/65 backdrop-blur-md border border-white/20 px-3 py-1 rounded-xl text-xs font-mono font-bold text-white/95">
                    {{ vid.duration }}
                  </span>
                </div>

                <!-- Center Floating Play Button -->
                <div class="self-center my-auto">
                  <button 
                    (click)="playVideo(vid); $event.stopPropagation()"
                    class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f4921e] hover:bg-[#ff9f30] text-[#001f3b] flex items-center justify-center shadow-[0_0_35px_rgba(244,146,30,0.55)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                    title="تشغيل الفيديو الآن"
                  >
                    <svg class="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                </div>

                <!-- Bottom Text, Tags & Actions -->
                <div class="space-y-3 pt-3">
                  <!-- Speaker & Date Meta -->
                  <div class="flex flex-wrap items-center gap-3 text-xs text-white/70">
                    <span *ngIf="vid.speaker" class="flex items-center gap-1.5 text-[#38bdf8] font-medium">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                      <span>{{ vid.speaker }}</span>
                    </span>
                    <span *ngIf="vid.speaker">•</span>
                    <span class="flex items-center gap-1.5">
                      <svg class="w-3.5 h-3.5 text-[#f4921e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    <span>{{ vid.date }}</span>
                    </span>
                  </div>

                  <!-- Title -->
                  <h3 class="text-lg sm:text-xl md:text-2xl font-black text-white leading-snug line-clamp-2">
                    {{ vid.title }}
                  </h3>

                  <!-- Description -->
                  <p *ngIf="vid.description" class="text-xs sm:text-sm text-white/80 leading-relaxed max-w-3xl line-clamp-2 sm:line-clamp-3">
                    {{ vid.description }}
                  </p>

                  <!-- Action Button Row -->
                  <div class="flex items-center pt-1">
                    <!-- Watch Action Button -->
                    <button 
                      (click)="playVideo(vid); $event.stopPropagation()"
                      class="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#f4921e] to-[#de7c0d] hover:from-[#ff9f30] hover:to-[#f4921e] text-[#001f3b] text-xs sm:text-sm font-black transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 shrink-0 cursor-pointer active:scale-95"
                    >
                      <span>مشاهدة الفيديو الآن</span>
                      <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- Bottom Dot Indicators -->
          <div class="flex items-center justify-center gap-2 pt-2">
            <button 
              *ngFor="let vid of videoItems; let i = index"
              (click)="setActiveVideo(i)"
              class="h-2 rounded-full transition-all duration-300 cursor-pointer"
              [class.w-8]="activeVideoIndex() === i"
              [class.bg-[#f4921e]]="activeVideoIndex() === i"
              [class.w-2]="activeVideoIndex() !== i"
              [class.bg-white/25]="activeVideoIndex() !== i"
              [class.hover:bg-white/45]="activeVideoIndex() !== i"
              [attr.aria-label]="'الانتقال إلى ' + vid.title"
            ></button>
          </div>
        </div>

        <!-- TAB 2: PHOTOS (Expanding Card Gallery) -->
        <div *ngIf="activeTab() === 'photo'" class="animate-fadeIn space-y-4">
          <!-- Gallery Header Helper -->
          <div class="flex items-center justify-between px-2 text-xs text-white/60">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-[#008ecd] animate-pulse"></span>
              <span>انقر على أي صورة لتوسيعها واستعراض تفاصيلها</span>
            </span>
            <div class="flex items-center gap-2">
              <button 
                (click)="prevPhoto()" 
                class="w-8 h-8 rounded-full bg-white/10 hover:bg-[#008ecd] hover:text-white text-white flex items-center justify-center transition cursor-pointer"
                title="الصورة السابقة"
              >
                <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
              <button 
                (click)="nextPhoto()" 
                class="w-8 h-8 rounded-full bg-white/10 hover:bg-[#008ecd] hover:text-white text-white flex items-center justify-center transition cursor-pointer"
                title="الصورة التالية"
              >
                <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
            </div>
          </div>

          <!-- Expanding Cards Container -->
          <div class="expanding-cards-container flex gap-2.5 sm:gap-3.5 h-[500px] sm:h-[560px] w-full overflow-x-auto lg:overflow-visible pb-4 pt-1 px-1 scrollbar-none snap-x">
            <div 
              *ngFor="let pic of photoItems; let i = index"
              (click)="setActivePhoto(i, $event)"
              class="expanding-card relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer select-none border transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group shrink-0 lg:shrink"
              [class.card-expanded]="activePhotoIndex() === i"
              [class.card-collapsed]="activePhotoIndex() !== i"
              [class.border-[#008ecd]/80]="activePhotoIndex() === i"
              [class.shadow-[0_12px_40px_rgba(0,142,205,0.25)]]="activePhotoIndex() === i"
              [class.border-white/15]="activePhotoIndex() !== i"
              [class.hover:border-white/40]="activePhotoIndex() !== i"
            >
              <!-- Background Image -->
              <img 
                [src]="pic.image" 
                [alt]="pic.title" 
                loading="lazy"
                decoding="async"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <!-- Dark Overlay Gradients -->
              <div 
                class="absolute inset-0 transition-opacity duration-500"
                [ngClass]="activePhotoIndex() === i 
                  ? 'bg-gradient-to-t from-[#00172e] via-[#00172e]/70 via-50% to-black/25' 
                  : 'bg-black/60 group-hover:bg-black/35'"
              ></div>

              <!-- Collapsed State Content (Sleek Vertical Strip) -->
              <div 
                *ngIf="activePhotoIndex() !== i"
                class="absolute inset-0 flex flex-col items-center justify-between p-3.5 sm:p-4 z-10 pointer-events-none"
              >
                <span class="w-6 h-6 rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold flex items-center justify-center">
                  {{ i + 1 }}
                </span>
                
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white flex items-center justify-center group-hover:bg-[#008ecd] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                </div>
              </div>

              <!-- Expanded State Content (Rich Details matching reference) -->
              <div 
                *ngIf="activePhotoIndex() === i"
                class="absolute inset-0 flex flex-col justify-between p-5 sm:p-7 z-10 animate-fadeScale overflow-hidden"
              >
                <!-- Top Row Badges -->
                <div class="flex items-center justify-end">
                  <span class="bg-black/65 backdrop-blur-md border border-white/20 px-3 py-1 rounded-xl text-xs font-mono font-bold text-white/95">
                    {{ pic.date }}
                  </span>
                </div>

                <!-- Center Floating Zoom Button -->
                <div class="self-center my-auto">
                  <button 
                    (click)="previewPhoto(pic); $event.stopPropagation()"
                    class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#008ecd] hover:bg-[#046bd2] text-white flex items-center justify-center shadow-[0_0_35px_rgba(0,142,205,0.55)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                    title="تكبير واستعراض الصورة"
                  >
                    <svg class="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                  </button>
                </div>

                <!-- Bottom Text, Tags & Actions -->
                <div class="space-y-3 pt-3">
                  <!-- Title -->
                  <h3 class="text-lg sm:text-xl md:text-2xl font-black text-white leading-snug line-clamp-2">
                    {{ pic.title }}
                  </h3>

                  <!-- Description -->
                  <p *ngIf="pic.description" class="text-xs sm:text-sm text-white/80 leading-relaxed max-w-3xl line-clamp-2 sm:line-clamp-3">
                    {{ pic.description }}
                  </p>

                  <!-- Action Button Row -->
                  <div class="flex items-center pt-1">
                    <!-- Full Preview Action Button -->
                    <button 
                      (click)="previewPhoto(pic); $event.stopPropagation()"
                      class="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#008ecd] to-[#046bd2] hover:from-[#00a3e8] hover:to-[#008ecd] text-white text-xs sm:text-sm font-black transition-all shadow-lg hover:shadow-sky-500/30 flex items-center gap-2 shrink-0 cursor-pointer active:scale-95"
                    >
                      <span>استعراض بالدقة الكاملة</span>
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- Bottom Dot Indicators -->
          <div class="flex items-center justify-center gap-2 pt-2">
            <button 
              *ngFor="let pic of photoItems; let i = index"
              (click)="setActivePhoto(i)"
              class="h-2 rounded-full transition-all duration-300 cursor-pointer"
              [class.w-8]="activePhotoIndex() === i"
              [class.bg-[#008ecd]]="activePhotoIndex() === i"
              [class.w-2]="activePhotoIndex() !== i"
              [class.bg-white/25]="activePhotoIndex() !== i"
              [class.hover:bg-white/45]="activePhotoIndex() !== i"
              [attr.aria-label]="'الانتقال إلى ' + pic.title"
            ></button>
          </div>
        </div>

        <!-- TAB 3: REPORTS -->
        <div *ngIf="activeTab() === 'report'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          <div 
            *ngFor="let rep of reportItems"
            class="bg-white/5 border border-white/15 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div class="flex items-start gap-4">
              <div class="w-12 h-14 rounded-lg bg-red-500/20 border border-red-400/30 flex items-center justify-center text-red-400 font-bold flex-shrink-0">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div class="space-y-1">
                <span class="text-xs font-bold text-[#f4921e]">{{ rep.date }}</span>
                <h4 class="text-xs sm:text-sm font-bold text-white leading-snug">{{ rep.title }}</h4>
              </div>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between">
              <span class="text-xs text-white/50 font-mono">{{ rep.fileSize }}</span>
              <a 
                href="#"
                (click)="downloadReport(rep); $event.preventDefault()"
                class="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#f4921e] hover:text-[#001f3b] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                <span>تحميل PDF</span>
              </a>
            </div>
          </div>
        </div>

        <!-- TAB 4: INTERVIEWS -->
        <div *ngIf="activeTab() === 'interview'" class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          <div 
            *ngFor="let item of interviewItems"
            class="bg-white/5 border border-white/15 rounded-2xl p-6 hover:bg-white/10 transition space-y-4"
          >
            <div class="flex items-center gap-3">
              <img [src]="item.image" [alt]="item.title" class="w-14 h-14 rounded-full object-cover border-2 border-[#f4921e]" />
              <div>
                <h4 class="text-sm sm:text-base font-bold text-white">{{ item.speaker }}</h4>
                <span class="text-xs text-white/50">{{ item.date }}</span>
              </div>
            </div>
            <blockquote class="text-xs sm:text-sm text-white/85 leading-relaxed font-normal italic border-r-2 border-[#f4921e] pr-4">
              «{{ item.title }}»
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.25s ease-out forwards;
    }
    @keyframes fadeScale {
      from { opacity: 0; transform: scale(0.97); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fadeScale {
      animation: fadeScale 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .scrollbar-none::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-none {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .expanding-card {
      will-change: flex-grow, flex-basis, width;
    }
    .card-expanded {
      flex: 5.5 1 0% !important;
    }
    .card-collapsed {
      flex: 1 1 0% !important;
    }
    @media (max-width: 1024px) {
      .card-expanded {
        min-width: 320px !important;
        flex: 0 0 320px !important;
      }
      .card-collapsed {
        min-width: 65px !important;
        flex: 0 0 65px !important;
      }
    }
    @media (min-width: 640px) and (max-width: 1024px) {
      .card-expanded {
        min-width: 440px !important;
        flex: 0 0 440px !important;
      }
      .card-collapsed {
        min-width: 76px !important;
        flex: 0 0 76px !important;
      }
    }

    /* Aura Background Styles (AIOCP Navy & Amber Palette - Fast GPU Optimized) */
    .aura-container {
      background-color: #00162b;
      isolation: isolate;
      contain: paint;
    }
    .aura-layer-1 {
      background: radial-gradient(ellipse 90% 60% at 50% 50%, rgba(0, 142, 205, 0.35) 0%, rgba(0, 75, 140, 0.22) 50%, transparent 80%);
      mix-blend-mode: screen;
      filter: blur(40px);
      transform: translateZ(0);
    }
    .aura-layer-2 {
      background: radial-gradient(ellipse 65% 45% at 50% 60%, rgba(244, 146, 30, 0.3) 0%, rgba(0, 142, 205, 0.15) 45%, transparent 75%);
      mix-blend-mode: screen;
      filter: blur(35px);
      opacity: 0.95;
      transform: translateZ(0);
    }
    .aura-layer-3 {
      background: radial-gradient(ellipse 75% 35% at 50% 50%, rgba(56, 189, 248, 0.14) 0%, transparent 70%);
      mix-blend-mode: overlay;
      filter: blur(25px);
      opacity: 0.85;
      transform: translateZ(0);
    }
    .aura-grain {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0.18 0.6 0.06 0 0.07 0.18 0.6 0.06 0 0.07 0.18 0.6 0.06 0 0.07 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 160px 160px;
      mix-blend-mode: overlay;
      opacity: 0.65;
      contain: strict;
    }
  `]
})
export class MediaCenterComponent {
  @Output() openVideo = new EventEmitter<MediaItem>();
  @Output() openPhoto = new EventEmitter<MediaItem>();

  private dataService = inject(WebsiteDataService);
  mediaItems: MediaItem[] = this.dataService.mediaItems;

  activeTab = signal<'video' | 'photo' | 'report' | 'interview'>('video');
  activeVideoIndex = signal<number>(0);
  activePhotoIndex = signal<number>(0);

  mediaTabs = [
    { key: 'video' as const, label: 'مكتبة الفيديو' },
    { key: 'photo' as const, label: 'مكتبة الصور' },
    { key: 'report' as const, label: 'تقارير ودراسات' },
    { key: 'interview' as const, label: 'حوارات وتصريحات' }
  ];

  readonly videoItems: MediaItem[] = this.mediaItems.filter(m => m.type === 'video');
  readonly photoItems: MediaItem[] = this.mediaItems.filter(m => m.type === 'photo');
  readonly reportItems: MediaItem[] = this.mediaItems.filter(m => m.type === 'report');
  readonly interviewItems: MediaItem[] = this.mediaItems.filter(m => m.type === 'interview');

  trackByMedia = (_index: number, item: MediaItem): string => item.id;

  selectTab(tab: 'video' | 'photo' | 'report' | 'interview') {
    if (this.activeTab() === tab) return;
    this.activeTab.set(tab);
  }

  setActiveVideo(index: number, event?: Event) {
    if (this.activeVideoIndex() === index) {
      this.playVideo(this.videoItems[index]);
    } else {
      this.activeVideoIndex.set(index);
      if (event?.currentTarget) {
        (event.currentTarget as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }

  setActivePhoto(index: number, event?: Event) {
    if (this.activePhotoIndex() === index) {
      this.previewPhoto(this.photoItems[index]);
    } else {
      this.activePhotoIndex.set(index);
      if (event?.currentTarget) {
        (event.currentTarget as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }

  nextVideo() {
    const next = (this.activeVideoIndex() + 1) % this.videoItems.length;
    this.activeVideoIndex.set(next);
  }

  prevVideo() {
    const prev = (this.activeVideoIndex() - 1 + this.videoItems.length) % this.videoItems.length;
    this.activeVideoIndex.set(prev);
  }

  nextPhoto() {
    const next = (this.activePhotoIndex() + 1) % this.photoItems.length;
    this.activePhotoIndex.set(next);
  }

  prevPhoto() {
    const prev = (this.activePhotoIndex() - 1 + this.photoItems.length) % this.photoItems.length;
    this.activePhotoIndex.set(prev);
  }

  playVideo(item: MediaItem) {
    this.openVideo.emit(item);
  }

  previewPhoto(item: MediaItem) {
    this.openPhoto.emit(item);
  }

  downloadReport(item: MediaItem) {
    alert(`بدء تحميل: ${item.title} (${item.fileSize})`);
  }
}
