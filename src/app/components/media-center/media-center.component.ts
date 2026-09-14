import { Component, inject, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';
import { MediaItem } from '../../models/website.models';

@Component({
  selector: 'app-media-center',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="media" class="py-20 lg:py-28 bg-[#001f3b] text-white relative overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-[#f4921e] border border-white/15">
              <span class="w-2 h-2 rounded-full bg-[#f4921e]"></span>
              <span>النافذة الإعلامية للهيئة</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              المركز الإعلامي والتوثيقي
            </h2>
            <p class="text-white/70 max-w-2xl text-base">
              توثيق مرئي ومصور لجهود الإعمار، إصدارات هندسية متخصصة، وتقارير دورية تضعكم في صلب الحقيقة والعمل الميداني.
            </p>
          </div>

          <!-- Media Type Tabs -->
          <div class="flex items-center gap-2 p-1.5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/15 overflow-x-auto">
            <button 
              *ngFor="let tab of mediaTabs"
              (click)="selectTab(tab.key)"
              class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5"
              [class.bg-[#f4921e]]="activeTab() === tab.key"
              [class.text-[#001f3b]]="activeTab() === tab.key"
              [class.shadow-lg]="activeTab() === tab.key"
              [class.text-white/80]="activeTab() !== tab.key"
              [class.hover:text-white]="activeTab() !== tab.key"
            >
              <span>{{ tab.label }}</span>
            </button>
          </div>
        </div>

        <!-- Dynamic Content Display Based on Tab -->

        <!-- TAB 1: VIDEOS -->
        <div *ngIf="activeTab() === 'video'" class="space-y-8 animate-fadeIn">
          <!-- Featured Video Hero -->
          <div class="bg-black/30 border border-white/15 rounded-3xl overflow-hidden p-4 sm:p-6 shadow-2xl backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div class="lg:col-span-7 relative rounded-2xl overflow-hidden group cursor-pointer aspect-video" (click)="playVideo(videoItems[0])">
              <img [src]="videoItems[0].image" [alt]="videoItems[0].title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f4921e] text-[#001f3b] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <span class="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-md text-xs font-mono font-bold text-white">
                {{ videoItems[0].duration }}
              </span>
            </div>

            <div class="lg:col-span-5 space-y-4 p-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                فيديو مميز
              </span>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {{ videoItems[0].title }}
              </h3>
              <p class="text-white/70 text-sm leading-relaxed">
                مشاهد حية ومباشرة ترصد الآليات الهندسية وفرق العمل الميداني التابعة للهيئة أثناء فتح الشوارع المغلقة وتسهيل مرور قوافل الإغاثة الإنسانية.
              </p>
              <div class="pt-2 flex items-center justify-between text-xs text-white/60">
                <span>المتحدث: {{ videoItems[0].speaker }}</span>
                <span>{{ videoItems[0].date }}</span>
              </div>
              <button (click)="playVideo(videoItems[0])" class="w-full py-3 rounded-xl bg-[#008ecd] hover:bg-[#046bd2] text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2">
                <span>مشاهدة الفيديو الآن</span>
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>

          </div>

          <!-- Other Videos Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <div 
              *ngFor="let vid of videoItems.slice(1)"
              (click)="playVideo(vid)"
              class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            >
              <div class="relative h-48 overflow-hidden">
                <img [src]="vid.image" [alt]="vid.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div class="w-12 h-12 rounded-full bg-[#f4921e]/90 text-[#001f3b] flex items-center justify-center group-hover:scale-110 transition">
                    <svg class="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <span class="absolute bottom-3 right-3 bg-black/70 px-2.5 py-0.5 rounded text-[11px] font-mono text-white">
                  {{ vid.duration }}
                </span>
              </div>
              <div class="p-4 space-y-2">
                <span class="text-[11px] text-white/50">{{ vid.date }}</span>
                <h4 class="text-sm font-bold text-white group-hover:text-[#f4921e] transition line-clamp-2">
                  {{ vid.title }}
                </h4>
                <p *ngIf="vid.speaker" class="text-xs text-blue-300">{{ vid.speaker }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 2: PHOTOS -->
        <div *ngIf="activeTab() === 'photo'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
          <div 
            *ngFor="let pic of photoItems"
            (click)="previewPhoto(pic)"
            class="group relative rounded-2xl overflow-hidden border border-white/15 h-64 cursor-pointer shadow-lg"
          >
            <img [src]="pic.image" [alt]="pic.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute bottom-4 right-4 left-4 space-y-1">
              <span class="text-[11px] text-[#f4921e] font-bold">{{ pic.date }}</span>
              <p class="text-xs font-semibold text-white line-clamp-2">{{ pic.title }}</p>
            </div>
            <div class="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
            </div>
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
                <h4 class="text-base font-bold text-white leading-snug">{{ rep.title }}</h4>
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
                <h4 class="text-base font-bold text-white">{{ item.speaker }}</h4>
                <span class="text-xs text-white/50">{{ item.date }}</span>
              </div>
            </div>
            <blockquote class="text-sm sm:text-base text-white/85 leading-relaxed font-normal italic border-r-2 border-[#f4921e] pr-4">
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
  `]
})
export class MediaCenterComponent {
  @Output() openVideo = new EventEmitter<MediaItem>();
  @Output() openPhoto = new EventEmitter<MediaItem>();

  private dataService = inject(WebsiteDataService);
  mediaItems: MediaItem[] = this.dataService.mediaItems;

  activeTab = signal<'video' | 'photo' | 'report' | 'interview'>('video');

  mediaTabs = [
    { key: 'video' as const, label: 'مكتبة الفيديو' },
    { key: 'photo' as const, label: 'مكتبة الصور' },
    { key: 'report' as const, label: 'تقارير ودراسات' },
    { key: 'interview' as const, label: 'حوارات وتصريحات' }
  ];

  get videoItems(): MediaItem[] {
    return this.mediaItems.filter(m => m.type === 'video');
  }

  get photoItems(): MediaItem[] {
    return this.mediaItems.filter(m => m.type === 'photo');
  }

  get reportItems(): MediaItem[] {
    return this.mediaItems.filter(m => m.type === 'report');
  }

  get interviewItems(): MediaItem[] {
    return this.mediaItems.filter(m => m.type === 'interview');
  }

  selectTab(tab: 'video' | 'photo' | 'report' | 'interview') {
    this.activeTab.set(tab);
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
