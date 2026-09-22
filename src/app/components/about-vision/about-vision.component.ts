import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';
import { Partner } from '../../models/website.models';

@Component({
  selector: 'app-about-vision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="partners" class="py-20 lg:py-28 relative dark:bg-[#030d1a] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Comprehensive Statistics Strip -->
        <div class="bg-gradient-to-r from-[#00284d] via-[#004380] to-[#00284d] rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-20 border border-white/10">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <h3 class="text-xl sm:text-2xl font-black">أرقام وإحصائيات موثقة</h3>
            <p class="text-white/70 text-xs sm:text-sm mt-1">حصاد ثقة المانحين والشركاء على مدار سنوات العطاء والعمل الميداني المتواصل</p>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-white/15">
            <div *ngFor="let stat of statistics" class="pt-4 sm:pt-0 space-y-2">
              <span class="block text-2xl sm:text-3xl lg:text-4xl font-black text-[#f4921e] font-display">
                {{ stat.value }}
              </span>
              <span class="block text-xs sm:text-sm font-bold text-white">
                {{ stat.label }}
              </span>
              <span class="block text-[11px] text-white/60 max-w-xs mx-auto">
                {{ stat.sublabel }}
              </span>
            </div>
          </div>
        </div>

        <!-- Strategic Partners Section (Modern Interactive Slider) -->
        <div class="relative pt-2">
          
          <!-- Slider Header & Controls Row -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            
            <!-- Titles & Badges (RTL Aligned) -->
            <div class="text-center sm:text-right space-y-1.5">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-[#004380]/10 dark:bg-sky-500/10 text-[#004380] dark:text-sky-300 border border-[#004380]/20 dark:border-sky-500/20">
                <span class="w-1.5 h-1.5 rounded-full bg-[#004380] dark:bg-sky-400"></span>
                <span>تحالفات إنسانية وهندسية معتمدة</span>
              </div>
              <h3 class="text-lg sm:text-xl font-black text-[#00284d] dark:text-white transition-colors tracking-tight">
                شركاء المسيرة والتحالفات الاستراتيجية
              </h3>
              <p class="text-slate-500 dark:text-slate-400 text-xs leading-relaxed transition-colors">
                عضويات فاعلة وشراكات موثقة مع كتل الأمم المتحدة والوزارات والنقابات المختصة.
              </p>
            </div>

            <!-- Slider Navigation Arrows & Counter (Left Aligned in RTL) -->
            <div class="flex items-center gap-2 shrink-0">
              <!-- Prev Slide Button (Points Right in RTL) -->
              <button 
                type="button" 
                (click)="prevSlide()" 
                class="w-9 h-9 rounded-xl bg-white dark:bg-[#091b2e] border border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-white hover:bg-[#00284d] hover:text-white dark:hover:bg-[#f4921e] dark:hover:text-[#00172e] flex items-center justify-center shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
                title="الشريك السابق"
                aria-label="الشريك السابق"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                </svg>
              </button>

              <!-- Slide Counter -->
              <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-[#091b2e] border border-slate-200/90 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-xs font-mono">
                {{ currentSlide() + 1 }} / {{ maxIndex + 1 }}
              </span>

              <!-- Next Slide Button (Points Left in RTL) -->
              <button 
                type="button" 
                (click)="nextSlide()" 
                class="w-9 h-9 rounded-xl bg-white dark:bg-[#091b2e] border border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-white hover:bg-[#00284d] hover:text-white dark:hover:bg-[#f4921e] dark:hover:text-[#00172e] flex items-center justify-center shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
                title="الشريك التالي"
                aria-label="الشريك التالي"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
            </div>

          </div>

          <!-- Slider Carousel Track Container -->
          <div 
            class="relative overflow-hidden rounded-2xl py-1 select-none"
            (mouseenter)="stopAutoPlay()" 
            (mouseleave)="startAutoPlay()"
            (touchstart)="onTouchStart($event)"
            (touchend)="onTouchEnd($event)"
          >
            <div 
              class="flex transition-transform duration-500 ease-out"
              [style.transform]="transformStyle"
            >
              <div 
                *ngFor="let partner of partners"
                class="w-full sm:w-1/2 lg:w-1/3 shrink-0 p-2"
              >
                <div class="h-full bg-white dark:bg-[#091b2e] rounded-2xl p-4 border border-slate-200/80 dark:border-white/10 shadow-xs hover:shadow-md hover:border-sky-300/50 dark:hover:border-sky-500/30 transition-all duration-200 flex flex-col justify-between group">
                  
                  <div class="space-y-2.5">
                    <!-- Top Row: Logo & Badges in Flex Layout -->
                    <div class="flex items-start gap-3">
                      <!-- Compact Logo Badge -->
                      <div class="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/70 dark:border-white/10 p-1.5 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                        <img 
                          [src]="partner.logo" 
                          [alt]="partner.name" 
                          class="max-h-full max-w-full object-contain" 
                        />
                      </div>

                      <!-- Titles & Badges -->
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-1 mb-1">
                          <span class="px-2 py-0.5 rounded text-[10px] font-bold border"
                            [ngClass]="{
                              'bg-sky-50 dark:bg-sky-500/10 text-[#0065B7] dark:text-sky-300 border-sky-200/80 dark:border-sky-500/20': partner.categoryKey === 'un',
                              'bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-200/80 dark:border-amber-500/20': partner.categoryKey === 'gov',
                              'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-500/20': partner.categoryKey === 'eng'
                            }"
                          >
                            {{ partner.category }}
                          </span>

                          <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>معتمد</span>
                          </span>
                        </div>

                        <h4 class="text-xs sm:text-[13px] font-extrabold text-[#00284d] dark:text-white truncate group-hover:text-[#046bd2] dark:group-hover:text-sky-400 transition-colors" [title]="partner.name">
                          {{ partner.name }}
                        </h4>
                        <span class="block text-[10px] font-mono font-bold text-[#f4921e] truncate">
                          {{ partner.code }}
                        </span>
                      </div>
                    </div>

                    <!-- Concise Description -->
                    <p class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {{ partner.description }}
                    </p>
                  </div>

                  <!-- Compact Footer -->
                  <div class="pt-2 mt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[10px] sm:text-[11px]">
                    <span class="text-slate-400 font-medium">طبيعة الشراكة:</span>
                    <span class="font-bold text-[#00284d] dark:text-slate-200 bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded text-[10px]">
                      {{ partner.role }}
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <!-- Pagination Indicator Dots -->
          <div class="flex items-center justify-center gap-2 mt-4">
            <button 
              *ngFor="let _ of dotArray; let i = index"
              type="button"
              (click)="goToSlide(i)"
              class="h-2 rounded-full transition-all duration-300 cursor-pointer"
              [class.w-6]="currentSlide() === i"
              [class.w-2]="currentSlide() !== i"
              [class.bg-[#f4921e]]="currentSlide() === i"
              [class.bg-slate-300]="currentSlide() !== i"
              [class.dark:bg-white/20]="currentSlide() !== i"
              [attr.aria-label]="'انتقل للشريحة ' + (i + 1)"
            ></button>
          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    .scrollbar-none::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-none {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `]
})
export class AboutVisionPartnersComponent implements OnInit, OnDestroy {
  private dataService = inject(WebsiteDataService);
  private platformId = inject(PLATFORM_ID);

  strategicPillars = this.dataService.strategicPillars;
  statistics = this.dataService.statistics;
  partners: Partner[] = this.dataService.partners;

  // Slider State
  currentSlide = signal<number>(0);
  itemsPerView = signal<number>(3);
  private autoPlayTimer: any = null;
  private touchStartX = 0;

  get maxIndex(): number {
    return Math.max(0, this.partners.length - this.itemsPerView());
  }

  get transformStyle(): string {
    const step = 100 / this.itemsPerView();
    return `translateX(${this.currentSlide() * step}%)`;
  }

  get dotArray(): number[] {
    return new Array(this.maxIndex + 1).fill(0);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateItemsPerView();
      window.addEventListener('resize', this.onResize);
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize);
    }
  }

  private onResize = (): void => {
    this.updateItemsPerView();
    if (this.currentSlide() > this.maxIndex) {
      this.currentSlide.set(this.maxIndex);
    }
  };

  private updateItemsPerView(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const width = window.innerWidth;
    if (width < 640) {
      this.itemsPerView.set(1);
    } else if (width < 1024) {
      this.itemsPerView.set(2);
    } else {
      this.itemsPerView.set(3);
    }
  }

  nextSlide(): void {
    if (this.currentSlide() >= this.maxIndex) {
      this.currentSlide.set(0);
    } else {
      this.currentSlide.update(i => i + 1);
    }
  }

  prevSlide(): void {
    if (this.currentSlide() <= 0) {
      this.currentSlide.set(this.maxIndex);
    } else {
      this.currentSlide.update(i => i - 1);
    }
  }

  goToSlide(index: number): void {
    this.currentSlide.set(Math.min(index, this.maxIndex));
    this.startAutoPlay();
  }

  startAutoPlay(): void {
    this.stopAutoPlay();
    if (!isPlatformBrowser(this.platformId)) return;
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, 4500);
  }

  stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.changedTouches[0].screenX;
    this.stopAutoPlay();
  }

  onTouchEnd(e: TouchEvent): void {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - this.touchStartX;
    // In RTL, dragging towards left is negative (next)
    // dragging towards right is positive (prev)
    if (diff < -40) {
      this.nextSlide();
    } else if (diff > 40) {
      this.prevSlide();
    }
    this.startAutoPlay();
  }
}

