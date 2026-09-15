import { Component, OnInit, OnDestroy, inject, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';
import { HeroSlide } from '../../models/website.models';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section (Light Canvas in Day, Deep Navy in Dark Mode) -->
    <section id="hero" class="relative overflow-hidden pt-6 sm:pt-10 pb-16 lg:pb-20 bg-gradient-to-b from-white via-[#f4f9fd] to-[#eef6fc] dark:from-[#030d1a] dark:via-[#07172b] dark:to-[#030d1a] transition-colors duration-300">
      
      <!-- Ambient Atmospheric Light Glows -->
      <div class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-400/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div class="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-amber-400/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <!-- The Official Palestinian Skyline Silhouette in the Background -->
      <div class="hero-skyline" aria-hidden="true"></div>

      <!-- Main Slider Container (z-10 on top of skyline) -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Top Split Grid: Story Content on Right & Framed Image on Left (in RTL) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          <!-- Content Column (Span 6 in RTL) -->
          <div class="lg:col-span-6 space-y-6">
            
            <!-- Category & Live Badge -->
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-[#f4921e]/15 text-[#b86100] dark:text-[#f4921e] border border-[#f4921e]/30">
                <span class="w-2 h-2 rounded-full bg-[#f4921e] animate-ping"></span>
                <span>{{ activeSlide.badge }}</span>
              </span>

              <span class="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-[#0b1f36] text-[#004380] dark:text-sky-300 border border-slate-200 dark:border-white/10 shadow-sm">
                {{ activeSlide.category }}
              </span>

              <div class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                <span>{{ activeSlide.date }}</span>
                <span>•</span>
                <span>قراءة {{ activeSlide.readTime }}</span>
              </div>
            </div>

            <!-- Active Headline (Fixed to exactly 2 lines) -->
            <h1 class="hero-title-clamp text-2xl sm:text-3xl lg:text-[2.15rem] xl:text-[2.4rem] font-black text-[#00284d] dark:text-white tracking-tight transition-all duration-300">
              {{ activeSlide.title }}
            </h1>

            <!-- Editorial Excerpt (Fixed to exactly 2 lines) -->
            <p class="hero-excerpt-clamp text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-[1.02rem] font-normal max-w-2xl">
              {{ activeSlide.excerpt }}
            </p>

            <!-- Metrics Pills Row -->
            <div class="flex flex-wrap items-center gap-3 pt-1">
              <!-- Relief Target Pill -->
              <div *ngIf="activeSlide.projectTarget" class="inline-flex items-center gap-3 py-2.5 px-4 rounded-2xl bg-white dark:bg-[#0b1f36] border border-slate-200/90 dark:border-white/10 shadow-sm text-xs font-bold text-[#004380] dark:text-sky-300">
                <div class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-sky-500/10 text-[#004380] dark:text-[#38bdf8] flex items-center justify-center font-black text-sm">
                  $
                </div>
                <div class="space-y-0.5">
                  <span class="block text-slate-400 dark:text-slate-400 text-[10px] font-medium">المستهدف الإغاثي</span>
                  <span class="block font-black text-sm text-[#00284d] dark:text-white font-mono">{{ activeSlide.projectTarget }}</span>
                </div>
              </div>

              <!-- Execution Status Pill -->
              <div class="inline-flex items-center gap-3 py-2.5 px-4 rounded-2xl bg-white dark:bg-[#0b1f36] border border-slate-200/90 dark:border-white/10 shadow-sm text-xs font-bold">
                <div class="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div class="space-y-0.5">
                  <span class="block text-slate-400 dark:text-slate-400 text-[10px] font-medium">حالة التنفيذ</span>
                  <span class="block font-black text-sm text-emerald-600 dark:text-emerald-400">جاهزية هندسية كاملة</span>
                </div>
              </div>
            </div>

            <!-- Action CTAs -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <!-- Primary Action Blue Button -->
              <a 
                [href]="activeSlide.actionLink"
                class="px-7 py-3.5 rounded-2xl bg-[#004380] hover:bg-[#00284d] dark:bg-[#046bd2] dark:hover:bg-[#004380] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-blue-900/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>اقرأ التقرير الميداني</span>
                <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              </a>

              <!-- Warm Orange Donate Button -->
              <button 
                (click)="donateTrigger.emit()"
                class="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#f4921e] to-[#de7c0d] hover:from-[#ff9e2e] hover:to-[#f4921e] text-white font-black text-sm sm:text-base shadow-xl hover:shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <svg class="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <span>تبرع الآن</span>
              </button>
            </div>


          </div>

          <!-- Visual Showcase Column (Framed Photo Card on Left in RTL) -->
          <div class="lg:col-span-6">
            <div class="relative">
              
              <!-- Subtle Ambient Glow behind the photo frame -->
              <div class="absolute -inset-3 bg-gradient-to-tr from-[#004380]/15 via-sky-500/10 to-[#f4921e]/15 rounded-[2.5rem] blur-2xl opacity-80 pointer-events-none -z-10"></div>

              <!-- Framed Active News Photo with generous size, glow & crisp borders -->
              <div class="relative rounded-3xl sm:rounded-[2rem] overflow-hidden border-4 sm:border-[5px] border-white dark:border-white/15 shadow-[0_20px_50px_-12px_rgba(0,40,77,0.25)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] bg-white dark:bg-[#0b1f36] h-[340px] sm:h-[420px] lg:h-[475px] xl:h-[520px] w-full group">
                <img 
                  [src]="activeSlide.image" 
                  [alt]="activeSlide.title" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                <!-- Bottom Gradient Tag inside frame -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#00172e]/90 via-[#00172e]/25 to-transparent pointer-events-none"></div>

                <!-- Top-Right Category Pill -->
                <span class="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl text-xs font-black bg-[#00284d]/90 text-white backdrop-blur-md border border-white/20 shadow-lg">
                  {{ activeSlide.category }}
                </span>

                <!-- Top-Left Verified Documentation Pill -->
                <span class="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold bg-black/60 text-white/95 backdrop-blur-md border border-white/20 shadow-lg inline-flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>توثيق ميداني معتمد</span>
                </span>

                <!-- Bottom Photo Caption (Full width, clean and unobstructed) -->
                <div class="absolute bottom-5 right-5 left-5 text-white pointer-events-none">
                  <p class="text-sm sm:text-base font-bold text-white/95 line-clamp-2 leading-relaxed drop-shadow-md">
                    {{ activeSlide.title }}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- 4 Interactive Story Cards Deck (Positioned Above Skyline) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 relative z-10">
          <div 
            *ngFor="let s of slides; let idx = index"
            (click)="goToSlide(idx)"
            class="cursor-pointer bg-white/95 dark:bg-[#0b1f36]/90 backdrop-blur-md rounded-2xl p-4 border transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            [class.border-[#f4921e]]="currentSlide() === idx"
            [class.shadow-lg]="currentSlide() === idx"
            [class.ring-2]="currentSlide() === idx"
            [class.ring-[#f4921e]/20]="currentSlide() === idx"
            [class.border-slate-200]="currentSlide() !== idx"
            [class.dark:border-white/10]="currentSlide() !== idx"
          >
            <div class="flex items-center gap-3 mb-2.5">
              <img [src]="s.image" [alt]="s.title" class="w-13 h-13 rounded-xl object-cover border border-slate-100 dark:border-white/10 flex-shrink-0" />
              <div class="min-w-0 flex-1">
                <span class="block text-[11px] font-extrabold text-[#f4921e]">{{ s.badge }}</span>
                <span class="block text-[10px] text-slate-400 font-medium">{{ s.date }}</span>
              </div>
            </div>

            <h4 class="text-xs font-bold text-[#00284d] dark:text-white line-clamp-2 leading-snug">
              {{ s.title }}
            </h4>

            <!-- Active Progress Timer Bar -->
            <div *ngIf="currentSlide() === idx" class="mt-3 h-1 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-[#f4921e] animate-timerBar"></div>
            </div>
          </div>
        </div>

        <!-- Confidence Metrics Bar (Impact Indicators Bar with Neat Icons) -->
        <div class="bg-white/95 dark:bg-[#0b1f36]/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 shadow-[0_10px_35px_-8px_rgba(0,40,77,0.08)] relative z-10">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 text-center divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-slate-100 dark:divide-white/10">
            
            <!-- Metric 1: International Partnerships / Funding -->
            <div class="pt-4 lg:pt-0 px-2 sm:px-4 group cursor-default transition-all duration-300 hover:-translate-y-1">
              <div class="w-13 h-13 rounded-2xl bg-blue-50/80 dark:bg-sky-500/10 text-[#004380] dark:text-[#38bdf8] border border-blue-100/90 dark:border-white/10 flex items-center justify-center mx-auto mb-3.5 shadow-sm group-hover:scale-110 group-hover:bg-[#004380] group-hover:text-white transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div class="space-y-1">
                <span class="block text-2xl sm:text-3xl font-black text-[#00284d] dark:text-white font-mono tracking-tight">$29M+</span>
                <span class="block text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200">مذكرات شراكة دولية</span>
                <span class="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">تمويل مباشر لمشاريع الطوارئ</span>
              </div>
            </div>

            <!-- Metric 2: Beneficiaries -->
            <div class="pt-4 lg:pt-0 px-2 sm:px-4 group cursor-default transition-all duration-300 hover:-translate-y-1">
              <div class="w-13 h-13 rounded-2xl bg-orange-50/80 dark:bg-amber-500/10 text-[#f4921e] border border-orange-100/90 dark:border-white/10 flex items-center justify-center mx-auto mb-3.5 shadow-sm group-hover:scale-110 group-hover:bg-[#f4921e] group-hover:text-white transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <div class="space-y-1">
                <span class="block text-2xl sm:text-3xl font-black text-[#f4921e] font-mono tracking-tight">1,500,000+</span>
                <span class="block text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200">مستفيد ومستفيدة</span>
                <span class="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">في قطاعات الإيواء والمياه والصحة</span>
              </div>
            </div>

            <!-- Metric 3: Completed Engineering Projects -->
            <div class="pt-4 lg:pt-0 px-2 sm:px-4 group cursor-default transition-all duration-300 hover:-translate-y-1">
              <div class="w-13 h-13 rounded-2xl bg-emerald-50/80 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100/90 dark:border-white/10 flex items-center justify-center mx-auto mb-3.5 shadow-sm group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div class="space-y-1">
                <span class="block text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight">450+</span>
                <span class="block text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200">مشروع هندسي منجز</span>
                <span class="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">بمعايير جودة ورقابة دولية</span>
              </div>
            </div>

            <!-- Metric 4: 15+ Years Legacy -->
            <div class="pt-4 lg:pt-0 px-2 sm:px-4 group cursor-default transition-all duration-300 hover:-translate-y-1">
              <div class="w-13 h-13 rounded-2xl bg-slate-100/80 dark:bg-white/5 text-[#00284d] dark:text-slate-200 border border-slate-200/90 dark:border-white/10 flex items-center justify-center mx-auto mb-3.5 shadow-sm group-hover:scale-110 group-hover:bg-[#00284d] group-hover:text-white transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div class="space-y-1">
                <span class="block text-2xl sm:text-3xl font-black text-[#00284d] dark:text-white font-mono tracking-tight">+15 عاماً</span>
                <span class="block text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200">خبرة مؤسسية موثقة</span>
                <span class="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">عضوية في كتل ومجالس أممية</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    /* Exact AIOCP Skyline Vector Silhouette in Background */
    .hero-skyline {
      position: absolute;
      inset-inline: 0;
      bottom: 0;
      margin-inline: auto;
      width: 100%;
      max-width: 1400px;
      height: 280px;
      pointer-events: none;
      background: linear-gradient(to top, rgba(0, 142, 205, 0.22) 0%, rgba(0, 142, 205, 0.05) 65%, transparent 100%);
      -webkit-mask-image: url('/images/skyline-pair.svg');
      mask-image: url('/images/skyline-pair.svg');
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: bottom center;
      mask-position: bottom center;
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      z-index: 1;
    }

    @media (max-width: 768px) {
      .hero-skyline {
        height: 180px;
        -webkit-mask-image: url('/images/skyline.svg');
        mask-image: url('/images/skyline.svg');
      }
    }

    /* Fixed 2-lines title & excerpt rules */
    .hero-title-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-clamp: 2;
      line-height: 1.35;
      min-height: calc(2 * 1.35em);
    }

    .hero-excerpt-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-clamp: 2;
      line-height: 1.7;
      min-height: calc(2 * 1.7em);
    }

    @keyframes timerBar {
      from { width: 0%; }
      to { width: 100%; }
    }
    .animate-timerBar {
      animation: timerBar 6s linear infinite;
    }
    @keyframes ticker {
      0% { transform: translateX(0); }
      100% { transform: translateX(50%); }
    }
    .animate-ticker {
      display: inline-flex;
      animation: ticker 28s linear infinite;
    }
    .animate-ticker:hover {
      animation-play-state: paused;
    }
  `]
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  @Output() donateTrigger = new EventEmitter<void>();

  private dataService = inject(WebsiteDataService);
  slides: HeroSlide[] = this.dataService.heroSlides;
  breakingNews: string[] = this.dataService.breakingNews;

  currentSlide = signal(0);
  private timer: any;

  get activeSlide(): HeroSlide {
    return this.slides[this.currentSlide()];
  }

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  stopAutoPlay() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  nextSlide() {
    this.currentSlide.update(i => (i + 1) % this.slides.length);
  }

  prevSlide() {
    this.currentSlide.update(i => (i - 1 + this.slides.length) % this.slides.length);
  }

  goToSlide(idx: number) {
    this.currentSlide.set(idx);
    this.startAutoPlay();
  }
}
