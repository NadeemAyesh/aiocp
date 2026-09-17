import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';
import { Partner } from '../../models/website.models';

@Component({
  selector: 'app-about-vision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 lg:py-28 relative dark:bg-[#030d1a] transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- About Overview Hero Banner -->
        <div class="bg-white dark:bg-[#091b2e] rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden mb-20 transition-colors">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
            
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-[#004380] dark:text-sky-300 border border-blue-200 dark:border-blue-500/20">
                <span class="w-2 h-2 rounded-full bg-[#004380] dark:bg-sky-400"></span>
                <span>من نحن • الهيئة في سطور</span>
              </div>

              <h2 class="text-2xl sm:text-3xl font-extrabold text-[#00284d] dark:text-white leading-tight transition-colors">
                رواد الهندسة والإعمار لدعم صمود الشعب الفلسطيني
              </h2>

              <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed transition-colors">
                الهيئة العربية الدولية للإعمار في فلسطين هيئة مهنية مستقلة غير ربحية، تأسست بمبادرة من كوكبة من الشخصيات العربية ونقابات المهندسين والمؤسسات التنموية، بهدف توحيد الجهود الهندسية والمالية لإعادة إعمار ما دمره الاحتلال في فلسطين، وتثبيت المواطنين فوق أرضهم عبر مشاريع تنموية مستدامة وفق أرفع معايير الحوكمة والنزاهة الدولية.
              </p>

              <!-- Highlights list -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">إشراف هندسي ونقابي معتمد</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">عضوية في كتل الأمم المتحدة الإنسانية</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">رقابة مالية وتدقيق دولي مستقل</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">طواقم ميدانية تعمل على مدار الساعة</span>
                </div>
              </div>

            </div>

            <!-- Visual Badge / Official Seal -->
            <div class="lg:col-span-5 flex justify-center">
              <div class="relative w-full max-w-sm">
                <div class="bg-gradient-to-br from-[#00284d] to-[#004380] rounded-3xl p-8 text-white text-center space-y-6 shadow-2xl relative z-10 border border-white/20">
                  <img src="images/logo-palimar.png" alt="شعار الهيئة" class="h-24 w-auto mx-auto bg-white p-2 rounded-2xl shadow-md" />
                  <div class="space-y-1">
                    <h3 class="text-base sm:text-lg font-black">الهيئة العربية الدولية</h3>
                    <p class="text-xs text-[#f4921e] font-bold">للإعمار في فلسطين</p>
                  </div>
                  <div class="p-4 rounded-xl bg-white/10 text-xs text-white/90 leading-relaxed backdrop-blur-sm border border-white/10">
                    «تحويل الألم إلى أمل.. والركام إلى عمران ينبض بالحياة والكرامة الإنسانية»
                  </div>
                  <div class="pt-2 border-t border-white/15 flex items-center justify-around text-xs">
                    <div>
                      <span class="block font-black text-lg text-[#f4921e]">2009</span>
                      <span class="text-white/60 text-[11px]">سنة التأسيس</span>
                    </div>
                    <div>
                      <span class="block font-black text-lg text-emerald-400">100%</span>
                      <span class="text-white/60 text-[11px]">غير ربحية</span>
                    </div>
                  </div>
                </div>
                <div class="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-[#f4921e]/20 -z-0"></div>
              </div>
            </div>

          </div>
        </div>

        <!-- 3 Strategic Pillars (Vision, Mission, Objectives) -->
        <div class="mb-20">
          <div class="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 class="text-xl sm:text-2xl font-extrabold text-[#00284d] dark:text-white transition-colors">
              الرؤية والرسالة والأهداف الاستراتيجية
            </h3>
            <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm transition-colors">
              منظومة قيم مؤسسية راسخة تحدد بوصلة العمل والإعمار التنموي المستدام.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              *ngFor="let pillar of strategicPillars"
              class="bg-white dark:bg-[#091b2e] rounded-2xl p-7 border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:shadow-2xl dark:hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div class="space-y-3.5">
                <div class="w-13 h-13 rounded-2xl bg-gradient-to-br {{ pillar.accent }} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg *ngIf="pillar.icon === 'eye'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <svg *ngIf="pillar.icon === 'flag'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>
                  <svg *ngIf="pillar.icon === 'target'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>

                <div>
                  <h4 class="text-base sm:text-lg font-extrabold text-[#00284d] dark:text-white transition-colors">{{ pillar.title }}</h4>
                  <span class="text-xs font-bold text-[#f4921e]">{{ pillar.subtitle }}</span>
                </div>

                <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed transition-colors">
                  {{ pillar.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

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

