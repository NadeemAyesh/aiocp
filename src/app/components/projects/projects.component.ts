import { Component, inject, signal, computed, ChangeDetectionStrategy, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';
import { ProjectItem } from '../../models/website.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 lg:py-28 bg-[#f1f5f9]/70 dark:bg-[#030d1a] relative border-t border-b border-slate-200 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      
      <!-- Dynamic Ambient Sector Aura -->
      <div 
        class="absolute top-28 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-48 rounded-full pointer-events-none blur-3xl opacity-25 dark:opacity-20 transition-all duration-700 ease-out -z-10"
        [style.background]="'radial-gradient(ellipse at center, ' + activeSectorColor() + ' 0%, transparent 70%)'"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-500/10 text-[#775a19] dark:text-amber-300 border border-amber-200 dark:border-amber-500/20">
            <span class="w-2 h-2 rounded-full bg-[#f4921e]"></span>
            <span>بناء الأمل واستعادة الحياة</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#00284d] dark:text-white tracking-tight transition-colors">
            مشاريع الإعمار والتنمية
          </h2>
          <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed transition-colors">
            مشاريع هندسية متخصصة تركز على استعادة البنية التحتية، توفير المأوى الكريم، تأهيل شبكات المياه والصحة، وتوثيق الاحتياجات العاجلة في فلسطين.
          </p>
        </div>

        <!-- Sector Band Filter Strip with Dynamic Floating Glider -->
        <div class="relative flex items-center justify-center mb-12 overflow-x-auto max-w-full px-2 pb-2 scrollbar-none">
          <div 
            #stripContainer
            role="group" 
            [class.sector-band__strip--has-glider]="gliderStyle().ready"
            class="sector-band__strip relative flex flex-nowrap gap-1.5 sm:gap-2 w-max shrink-0 p-1.5 sm:p-2 bg-white dark:bg-[#091b2e] rounded-full border border-slate-200/90 dark:border-white/10 shadow-sm" 
            aria-label="اختيار القطاع"
          >
            <!-- Sliding Dynamic Glider Pill -->
            <div 
              *ngIf="gliderStyle().ready"
              class="sector-band__glider pointer-events-none absolute rounded-full z-0"
              [style.transform]="'translate3d(' + gliderStyle().left + 'px, ' + gliderStyle().top + 'px, 0)'"
              [style.width.px]="gliderStyle().width"
              [style.height.px]="gliderStyle().height"
              [style.background-color]="gliderStyle().color"
              [style.box-shadow]="'0 6px 20px -2px ' + gliderStyle().color + '85, 0 0 16px -2px ' + gliderStyle().color + '45'"
            >
              <!-- Subtle 3D gloss top sheen -->
              <div class="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 via-white/10 to-transparent pointer-events-none"></div>
            </div>
            
            <!-- All Sectors Chip -->
            <button 
              data-sector="all"
              type="button" 
              (click)="selectSector('all', $event)"
              class="sector-band__chip shrink-0 inline-flex items-center gap-1.5 ps-2.5 pe-3.5 py-1.5 max-md:ps-2 max-md:pe-3 max-md:py-1 font-bold text-[12px] max-md:text-[11px] leading-4 whitespace-nowrap cursor-pointer transition-all duration-200 relative z-10 active:scale-95 select-none"
              [class.sector-band__chip--on]="activeSector() === 'all'"
              [attr.aria-pressed]="activeSector() === 'all'"
              style="--chip: #f4921e;"
            >
              <span class="sector-band__mark w-[26px] h-[26px] max-md:w-[21px] max-md:h-[21px] shrink-0 rounded-full inline-flex items-center justify-center transition-all duration-300"
                [class.scale-110]="activeSector() === 'all'"
                [class.rotate-12]="activeSector() === 'all'">
                <svg 
                  class="w-[17px] h-[17px] max-md:w-[15px] max-md:h-[15px] shrink-0 fill-current transition-colors duration-200" 
                  [class.text-white]="activeSector() === 'all'"
                  [class.text-[#f4921e]]="activeSector() !== 'all'"
                  viewBox="0 -960 960 960" 
                  aria-hidden="true"
                >
                  <path d="M240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q14 0 26 3t23 8l57-71q-28-31-39-70t-5-78l-81-27q-17 25-43 40t-58 15q-50 0-85-35T0-580q0-50 35-85t85-35q50 0 85 35t35 85v8l81 28q20-36 53.5-61t75.5-32v-87q-39-11-64.5-42.5T360-840q0-50 35-85t85-35q50 0 85 35t35 85q0 42-26 73.5T510-724v87q42 7 75.5 32t53.5 61l81-28v-8q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-32 0-58.5-15T739-515l-81 27q6 39-5 77.5T614-340l57 70q11-5 23-7.5t26-2.5q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-20 6.5-38.5T624-232l-57-71q-41 23-87.5 23T392-303l-56 71q11 15 17.5 33.5T360-160q0 50-35 85t-85 35ZM120-540q17 0 28.5-11.5T160-580q0-17-11.5-28.5T120-620q-17 0-28.5 11.5T80-580q0 17 11.5 28.5T120-540Zm120 420q17 0 28.5-11.5T280-160q0-17-11.5-28.5T240-200q-17 0-28.5 11.5T200-160q0 17 11.5 28.5T240-120Zm240-680q17 0 28.5-11.5T520-840q0-17-11.5-28.5T480-880q-17 0-28.5 11.5T440-840q0 17 11.5 28.5T480-800Zm0 440q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm240 240q17 0 28.5-11.5T760-160q0-17-11.5-28.5T720-200q-17 0-28.5 11.5T680-160q0 17 11.5 28.5T720-120Zm120-420q17 0 28.5-11.5T880-580q0-17-11.5-28.5T840-620q-17 0-28.5 11.5T800-580q0 17 11.5 28.5T840-540ZM480-840ZM120-580Zm360 120Zm360-120ZM240-160Zm480 0Z"/>
                </svg>
              </span>
              <span>الكل</span>
              <span class="sector-count-badge mr-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono transition-all duration-300"
                [class.bg-white/20]="activeSector() === 'all'"
                [class.text-white]="activeSector() === 'all'"
                [class.bg-slate-200/70]="activeSector() !== 'all'"
                [class.dark:bg-white/10]="activeSector() !== 'all'"
                [class.text-slate-600]="activeSector() !== 'all'"
                [class.dark:text-slate-300]="activeSector() !== 'all'">
                {{ sectorCounts()['all'] }}
              </span>
            </button>

            <!-- Each Individual Sector Chip -->
            <button 
              *ngFor="let s of sectors"
              [attr.data-sector]="s.key"
              type="button" 
              (click)="selectSector(s.key, $event)"
              class="sector-band__chip shrink-0 inline-flex items-center gap-1.5 max-md:gap-1 ps-1.5 pe-3.5 py-1.5 max-md:pe-2.5 max-md:py-1 font-bold text-[12px] max-md:text-[11px] leading-4 whitespace-nowrap cursor-pointer transition-all duration-200 relative z-10 active:scale-95 select-none"
              [class.sector-band__chip--on]="activeSector() === s.key"
              [attr.aria-pressed]="activeSector() === s.key"
              [style.--chip]="s.color"
            >
              <span class="sector-band__mark w-[26px] h-[26px] max-md:w-[21px] max-md:h-[21px] shrink-0 rounded-full inline-flex items-center justify-center transition-all duration-300"
                [class.scale-110]="activeSector() === s.key"
                [class.rotate-[-8deg]]="activeSector() === s.key">
                <img [src]="s.iconUrl" [alt]="s.label" aria-hidden="true" class="w-[19px] h-[19px] max-md:w-[15px] max-md:h-[15px] object-contain transition-transform duration-300">
              </span>
              <span>{{ s.label }}</span>
              <span class="sector-count-badge mr-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono transition-all duration-300"
                [class.bg-white/20]="activeSector() === s.key"
                [class.text-white]="activeSector() === s.key"
                [class.bg-slate-200/70]="activeSector() !== s.key"
                [class.dark:bg-white/10]="activeSector() !== s.key"
                [class.text-slate-600]="activeSector() !== s.key"
                [class.dark:text-slate-300]="activeSector() !== s.key">
                {{ sectorCounts()[s.key] || 0 }}
              </span>
            </button>

          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let proj of filteredProjects(); trackBy: trackByProj"
            class="project-card-animate bg-white dark:bg-[#091b2e] rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-[0_4px_20px_-4px_rgba(0,40,77,0.08)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-12px_rgba(0,40,77,0.16)] dark:hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
          >
            <!-- Image & Badges -->
            <div class="relative h-56 sm:h-60 overflow-hidden shrink-0">
              <img 
                [src]="proj.image" 
                [alt]="proj.title" 
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#00172e]/85 via-[#00172e]/25 to-transparent"></div>
              
              <!-- Sector & Status Badges Top Row -->
              <div class="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
                <!-- Sector Badge -->
                <span class="px-3 py-1.5 rounded-full text-xs font-black shadow-lg text-white inline-flex items-center gap-1.5 backdrop-blur-md"
                  [style.background-color]="getSectorColor(proj.sector)">
                  <img *ngIf="getSectorIcon(proj.sector)" [src]="getSectorIcon(proj.sector)" alt="" class="w-3.5 h-3.5 object-contain brightness-0 invert shrink-0" />
                  <span>{{ proj.sectorLabel }}</span>
                </span>

                <!-- Status Badge -->
                <span class="px-3 py-1 rounded-full text-[11px] font-bold shadow-md backdrop-blur-md bg-black/50 text-white/95 border border-white/20 inline-flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full" [ngClass]="getStatusDotColor(proj.status)"></span>
                  <span>{{ proj.statusLabel }}</span>
                </span>
              </div>

              <!-- Location Badge Bottom -->
              <div class="absolute bottom-3.5 right-3.5 left-3.5 flex items-center text-white/95 text-xs font-semibold">
                <span class="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 shadow-sm">
                  <svg class="w-3.5 h-3.5 text-[#f4921e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span>{{ proj.location }}</span>
                </span>
              </div>
            </div>

            <!-- Project Description & Metrics Content -->
            <div class="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-3.5">
              <div class="space-y-1.5">
                <!-- Title -->
                <h3 class="text-sm sm:text-[15px] font-extrabold text-[#00284d] dark:text-white group-hover:text-[#046bd2] dark:group-hover:text-[#38bdf8] transition-colors line-clamp-2 leading-snug min-h-[2.5rem]">
                  {{ proj.title }}
                </h3>

                <!-- Excerpt -->
                <p class="text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs line-clamp-2 leading-relaxed font-normal min-h-[2.25rem] transition-colors">
                  {{ proj.description }}
                </p>
              </div>

              <!-- Financial & Impact Highlight Box -->
              <div class="bg-gradient-to-br from-slate-50 via-slate-50 to-[#f0f7ff] dark:from-white/[0.04] dark:via-white/[0.03] dark:to-white/[0.02] rounded-2xl p-3 border border-slate-200/80 dark:border-white/10 space-y-2 transition-colors">
                <div class="flex items-center justify-between gap-3">
                  <div class="space-y-0.5 min-w-0">
                    <span class="text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#f4921e]"></span>
                      <span>قيمة التمويل المطلوب</span>
                    </span>
                    <span class="text-base sm:text-lg font-black text-[#00284d] dark:text-white font-mono tracking-tight block">
                      {{ proj.targetedBudget }}
                    </span>
                  </div>

                  <div class="text-left space-y-0.5 border-r border-slate-200/80 dark:border-white/10 pr-3 shrink-0">
                    <span class="text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 block">المستفيدون المقدرون</span>
                    <span class="text-xs sm:text-[13px] font-extrabold text-[#046bd2] dark:text-[#38bdf8] block">
                      {{ proj.beneficiaries }}
                    </span>
                  </div>
                </div>

                <!-- Collected / Raised Amount Row -->
                <div *ngIf="proj.raisedBudget" class="pt-2 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs">
                  <span class="text-slate-500 dark:text-slate-400 font-medium text-[11px]">التمويل المحصل:</span>
                  <span class="font-bold font-mono text-emerald-600 dark:text-emerald-400 text-xs">{{ proj.raisedBudget }}</span>
                </div>
              </div>

              <!-- Single Clean Action Button (تفاصيل المشروع - Compact with no empty gap) -->
              <button 
                (click)="projectDetails.emit(proj)"
                class="w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-[#004380] dark:hover:bg-[#004380] text-[#00284d] dark:text-white hover:text-white border border-slate-200/90 dark:border-white/10 hover:border-[#004380] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer group/btn"
              >
                <svg class="w-3.5 h-3.5 text-slate-400 dark:text-slate-300 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                <span>تفاصيل المشروع</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    .sector-band__strip {
      box-shadow: 0 4px 20px -4px rgba(0, 40, 77, 0.08);
      position: relative;
    }
    :host-context(html.dark) .sector-band__strip,
    html.dark .sector-band__strip {
      box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.5);
    }
    .sector-band__chip {
      --chip: #046bd2;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 999px;
      color: #334155;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
    }
    :host-context(html.dark) .sector-band__chip,
    html.dark .sector-band__chip {
      background: #0d233a;
      border-color: rgba(255, 255, 255, 0.12);
      color: #cbd5e1;
    }
    .sector-band__chip:hover:not(.sector-band__chip--on) {
      background: #ffffff;
      border-color: color-mix(in srgb, var(--chip) 60%, #cbd5e1);
      transform: translateY(-1px);
    }
    :host-context(html.dark) .sector-band__chip:hover:not(.sector-band__chip--on),
    html.dark .sector-band__chip:hover:not(.sector-band__chip--on) {
      background: #132f4c;
      border-color: color-mix(in srgb, var(--chip) 70%, #ffffff);
      color: #ffffff;
    }
    .sector-band__chip--on {
      background: var(--chip) !important;
      color: #ffffff !important;
      border-color: var(--chip) !important;
      box-shadow: 0 4px 14px -3px var(--chip);
    }
    .sector-band__strip--has-glider .sector-band__chip--on {
      background: transparent !important;
      border-color: transparent !important;
      box-shadow: none !important;
    }
    .sector-band__mark {
      background: rgba(0, 0, 0, 0.05);
      transition: background-color 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    :host-context(html.dark) .sector-band__mark,
    html.dark .sector-band__mark {
      background: rgba(255, 255, 255, 0.1);
    }
    .sector-band__chip--on .sector-band__mark {
      background: #ffffff !important;
    }
    .sector-band__chip--on .sector-count-badge {
      animation: badgePulsePop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes badgePulsePop {
      0% { transform: scale(1); }
      50% { transform: scale(1.25); }
      100% { transform: scale(1); }
    }
    .sector-band__glider {
      position: absolute;
      top: 0;
      left: 0;
      will-change: transform, width;
      transition: transform 0.24s cubic-bezier(0.34, 1.25, 0.64, 1),
                  width 0.22s ease-out,
                  background-color 0.2s ease,
                  box-shadow 0.2s ease;
    }
    .project-card-animate {
      animation: cardFadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1) both;
      will-change: transform, opacity;
      contain: layout style;
    }
    @keyframes cardFadeIn {
      0% {
        opacity: 0;
        transform: translate3d(0, 8px, 0);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    .scrollbar-none::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-none {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `]
})
export class ProjectsComponent implements AfterViewInit {
  @Output() projectDetails = new EventEmitter<ProjectItem>();
  @Output() donateProject = new EventEmitter<ProjectItem>();

  @ViewChild('stripContainer', { static: false }) stripContainer?: ElementRef<HTMLElement>;

  private dataService = inject(WebsiteDataService);
  allProjects: ProjectItem[] = this.dataService.projects;

  activeSector = signal<string>('all');

  gliderStyle = signal<{
    left: number;
    top: number;
    width: number;
    height: number;
    color: string;
    ready: boolean;
  }>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    color: '#f4921e',
    ready: false
  });

  sectors = [
    { key: 'shelter', label: 'الإيواء', color: '#9B8985', iconUrl: 'images/sectors/shelter.svg' },
    { key: 'health', label: 'الصحة', color: '#F34841', iconUrl: 'images/sectors/health.svg' },
    { key: 'education', label: 'التعليم', color: '#0065B7', iconUrl: 'images/sectors/education.svg' },
    { key: 'food', label: 'الأمن الغذائي', color: '#70BB92', iconUrl: 'images/sectors/food.svg' },
    { key: 'water', label: 'المياه والصرف الصحي', color: '#3F9AD1', iconUrl: 'images/sectors/water.svg' },
    { key: 'debris', label: 'إدارة الركام والنفايات الصلبة', color: '#515558', iconUrl: 'images/sectors/debris.svg' },
    { key: 'damage-assessment', label: 'حصر الأضرار', color: '#E0A526', iconUrl: 'images/sectors/damage-assessment.svg' }
  ];

  filteredProjects = computed(() => {
    const sec = this.activeSector();
    if (sec === 'all') return this.allProjects;
    return this.allProjects.filter(p => p.sector === sec);
  });

  activeSectorColor = computed(() => {
    return this.getSectorColor(this.activeSector());
  });

  sectorCounts = computed(() => {
    const counts: Record<string, number> = { all: this.allProjects.length };
    for (const p of this.allProjects) {
      counts[p.sector] = (counts[p.sector] || 0) + 1;
    }
    return counts;
  });

  trackByProj = (_index: number, item: ProjectItem): string | number => {
    return item.id || item.title;
  };

  ngAfterViewInit() {
    setTimeout(() => this.syncGlider(), 40);
    setTimeout(() => this.syncGlider(), 180);
    if (typeof document !== 'undefined' && (document as any).fonts) {
      (document as any).fonts.ready.then(() => this.syncGlider());
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.syncGlider();
  }

  selectSector(key: string, event?: MouseEvent) {
    if (this.activeSector() === key) return;
    this.activeSector.set(key);
    let targetBtn: HTMLElement | null = null;
    if (event && event.currentTarget) {
      targetBtn = event.currentTarget as HTMLElement;
    }
    this.syncGlider(targetBtn);
    if (targetBtn && this.stripContainer?.nativeElement?.parentElement) {
      const scroller = this.stripContainer.nativeElement.parentElement;
      if (scroller.scrollWidth > scroller.clientWidth) {
        const btnRect = targetBtn.getBoundingClientRect();
        const scrollerRect = scroller.getBoundingClientRect();
        const currentScrollLeft = scroller.scrollLeft;
        const offsetInScroller = btnRect.left - scrollerRect.left + (btnRect.width / 2);
        const targetScroll = currentScrollLeft + offsetInScroller - (scrollerRect.width / 2);
        scroller.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  }

  syncGlider(targetEl?: HTMLElement | null) {
    if (!this.stripContainer?.nativeElement) return;
    const container = this.stripContainer.nativeElement;

    let btn = targetEl;
    if (!btn) {
      btn = container.querySelector(`[data-sector="${this.activeSector()}"]`) as HTMLElement;
    }
    if (!btn) return;

    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();
    const unscaledW = btn.offsetWidth || bRect.width;
    const unscaledH = btn.offsetHeight || bRect.height;
    const leftOffset = (bRect.left - cRect.left) - (unscaledW - bRect.width) / 2;
    const topOffset = (bRect.top - cRect.top) - (unscaledH - bRect.height) / 2;

    this.gliderStyle.set({
      left: Math.round(leftOffset),
      top: Math.round(topOffset),
      width: Math.round(unscaledW),
      height: Math.round(unscaledH),
      color: this.getSectorColor(this.activeSector()),
      ready: true
    });
  }

  getSectorColor(sectorKey: string): string {
    if (sectorKey === 'all') return '#f4921e';
    const found = this.sectors.find(s => s.key === sectorKey);
    return found ? found.color : '#f4921e';
  }

  getSectorIcon(sectorKey: string): string | undefined {
    const found = this.sectors.find(s => s.key === sectorKey);
    return found?.iconUrl;
  }

  getStatusDotColor(status: string): string {
    switch (status) {
      case 'completed': return 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]';
      case 'ongoing': return 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse';
      case 'needs': return 'bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]';
      default: return 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]';
    }
  }
}
