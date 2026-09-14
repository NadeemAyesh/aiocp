import { Component, inject, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';
import { ProjectItem } from '../../models/website.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 lg:py-28 bg-[#f1f5f9]/70 relative border-t border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-[#775a19] border border-amber-200">
            <span class="w-2 h-2 rounded-full bg-[#f4921e]"></span>
            <span>بناء الأمل واستعادة الحياة</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#00284d] tracking-tight">
            مشاريع الإعمار والتنمية
          </h2>
          <p class="text-slate-600 text-base">
            مشاريع هندسية متخصصة تركز على استعادة البنية التحتية، توفير المأوى الكريم، تأهيل شبكات المياه والصحة، وتوثيق الاحتياجات العاجلة في فلسطين.
          </p>
        </div>

        <!-- Sector Band Filter Strip (Exact Replica from donate.aiocp.org) -->
        <div class="flex items-center justify-center mb-12 overflow-x-auto max-w-full px-2 pb-2 scrollbar-none">
          <div role="group" class="sector-band__strip flex flex-nowrap gap-1.5 sm:gap-2 w-max shrink-0 p-1.5 sm:p-2 bg-white rounded-full border border-slate-200/90 shadow-sm" aria-label="اختيار القطاع">
            
            <!-- All Sectors Chip -->
            <button 
              type="button" 
              (click)="selectSector('all')"
              class="sector-band__chip shrink-0 inline-flex items-center gap-1.5 ps-2.5 pe-3.5 py-1.5 max-md:ps-2 max-md:pe-3 max-md:py-1 font-bold text-[12px] max-md:text-[11px] leading-4 whitespace-nowrap cursor-pointer transition-all duration-200"
              [class.sector-band__chip--on]="activeSector() === 'all'"
              [attr.aria-pressed]="activeSector() === 'all'"
              style="--chip: #f4921e;"
            >
              <svg 
                class="w-[17px] h-[17px] max-md:w-[15px] max-md:h-[15px] shrink-0 fill-current transition-colors duration-200" 
                [class.text-white]="activeSector() === 'all'"
                [class.text-[#f4921e]]="activeSector() !== 'all'"
                viewBox="0 -960 960 960" 
                aria-hidden="true"
              >
                <path d="M240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q14 0 26 3t23 8l57-71q-28-31-39-70t-5-78l-81-27q-17 25-43 40t-58 15q-50 0-85-35T0-580q0-50 35-85t85-35q50 0 85 35t35 85v8l81 28q20-36 53.5-61t75.5-32v-87q-39-11-64.5-42.5T360-840q0-50 35-85t85-35q50 0 85 35t35 85q0 42-26 73.5T510-724v87q42 7 75.5 32t53.5 61l81-28v-8q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-32 0-58.5-15T739-515l-81 27q6 39-5 77.5T614-340l57 70q11-5 23-7.5t26-2.5q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-20 6.5-38.5T624-232l-57-71q-41 23-87.5 23T392-303l-56 71q11 15 17.5 33.5T360-160q0 50-35 85t-85 35ZM120-540q17 0 28.5-11.5T160-580q0-17-11.5-28.5T120-620q-17 0-28.5 11.5T80-580q0 17 11.5 28.5T120-540Zm120 420q17 0 28.5-11.5T280-160q0-17-11.5-28.5T240-200q-17 0-28.5 11.5T200-160q0 17 11.5 28.5T240-120Zm240-680q17 0 28.5-11.5T520-840q0-17-11.5-28.5T480-880q-17 0-28.5 11.5T440-840q0 17 11.5 28.5T480-800Zm0 440q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm240 240q17 0 28.5-11.5T760-160q0-17-11.5-28.5T720-200q-17 0-28.5 11.5T680-160q0 17 11.5 28.5T720-120Zm120-420q17 0 28.5-11.5T880-580q0-17-11.5-28.5T840-620q-17 0-28.5 11.5T800-580q0 17 11.5 28.5T840-540ZM480-840ZM120-580Zm360 120Zm360-120ZM240-160Zm480 0Z"/>
              </svg>
              <span>الكل</span>
              <span class="mr-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono"
                [class.bg-white/20]="activeSector() === 'all'"
                [class.text-white]="activeSector() === 'all'"
                [class.bg-slate-200/70]="activeSector() !== 'all'"
                [class.text-slate-600]="activeSector() !== 'all'">
                {{ getCountForSector('all') }}
              </span>
            </button>

            <!-- Each Individual Sector Chip (Exact from donate.aiocp.org) -->
            <button 
              *ngFor="let s of sectors"
              type="button" 
              (click)="selectSector(s.key)"
              class="sector-band__chip shrink-0 inline-flex items-center gap-1.5 max-md:gap-1 ps-1.5 pe-3.5 py-1.5 max-md:pe-2.5 max-md:py-1 font-bold text-[12px] max-md:text-[11px] leading-4 whitespace-nowrap cursor-pointer transition-all duration-200"
              [class.sector-band__chip--on]="activeSector() === s.key"
              [attr.aria-pressed]="activeSector() === s.key"
              [style.--chip]="s.color"
            >
              <span class="sector-band__mark w-[26px] h-[26px] max-md:w-[21px] max-md:h-[21px] shrink-0 rounded-[999px] inline-flex items-center justify-center">
                <img [src]="s.iconUrl" [alt]="s.label" aria-hidden="true" class="w-[19px] h-[19px] max-md:w-[15px] max-md:h-[15px] object-contain">
              </span>
              <span>{{ s.label }}</span>
              <span class="mr-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono"
                [class.bg-white/20]="activeSector() === s.key"
                [class.text-white]="activeSector() === s.key"
                [class.bg-slate-200/70]="activeSector() !== s.key"
                [class.text-slate-600]="activeSector() !== s.key">
                {{ getCountForSector(s.key) }}
              </span>
            </button>

          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let proj of filteredProjects"
            class="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,40,77,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(0,40,77,0.16)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
          >
            <!-- Image & Badges -->
            <div class="relative h-56 sm:h-60 overflow-hidden shrink-0">
              <img 
                [src]="proj.image" 
                [alt]="proj.title" 
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
              <div class="space-y-2">
                <!-- Title -->
                <h3 class="text-[17px] sm:text-lg font-black text-[#00284d] group-hover:text-[#046bd2] transition-colors line-clamp-2 leading-snug min-h-[2.75rem]">
                  {{ proj.title }}
                </h3>

                <!-- Excerpt -->
                <p class="text-slate-600 text-xs sm:text-[13px] line-clamp-2 leading-relaxed font-normal min-h-[2.5rem]">
                  {{ proj.description }}
                </p>
              </div>

              <!-- Financial & Impact Highlight Box -->
              <div class="bg-gradient-to-br from-slate-50 via-slate-50 to-[#f0f7ff] rounded-2xl p-3.5 border border-slate-200/80 space-y-2.5">
                <div class="flex items-center justify-between gap-3">
                  <div class="space-y-0.5 min-w-0">
                    <span class="text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-[#f4921e]"></span>
                      <span>قيمة التمويل المطلوب</span>
                    </span>
                    <span class="text-lg sm:text-xl font-black text-[#00284d] font-mono tracking-tight block">
                      {{ proj.targetedBudget }}
                    </span>
                  </div>

                  <div class="text-left space-y-0.5 border-r border-slate-200/80 pr-3.5 shrink-0">
                    <span class="text-[11px] font-bold text-slate-500 block">المستفيدون المقدرون</span>
                    <span class="text-xs sm:text-sm font-extrabold text-[#046bd2] block">
                      {{ proj.beneficiaries }}
                    </span>
                  </div>
                </div>

                <!-- Collected / Raised Amount Row -->
                <div *ngIf="proj.raisedBudget" class="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span class="text-slate-500 font-medium">التمويل المحصل:</span>
                  <span class="font-bold font-mono text-emerald-600">{{ proj.raisedBudget }}</span>
                </div>
              </div>

              <!-- Single Clean Action Button (تفاصيل المشروع - Compact with no empty gap) -->
              <button 
                (click)="projectDetails.emit(proj)"
                class="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-slate-50 hover:bg-[#004380] text-[#00284d] hover:text-white border border-slate-200/90 hover:border-[#004380] text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer group/btn"
              >
                <svg class="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
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
    }
    .sector-band__chip {
      --chip: #046bd2;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 999px;
      color: #334155;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
    }
    .sector-band__chip:hover {
      background: #ffffff;
      border-color: color-mix(in srgb, var(--chip) 60%, #cbd5e1);
      transform: translateY(-1px);
    }
    .sector-band__chip--on {
      background: var(--chip) !important;
      color: #ffffff !important;
      border-color: var(--chip) !important;
      box-shadow: 0 4px 14px -3px var(--chip);
    }
    .sector-band__mark {
      background: rgba(0, 0, 0, 0.05);
      transition: background-color 0.2s ease;
    }
    .sector-band__chip--on .sector-band__mark {
      background: #ffffff !important;
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
export class ProjectsComponent {
  @Output() projectDetails = new EventEmitter<ProjectItem>();
  @Output() donateProject = new EventEmitter<ProjectItem>();

  private dataService = inject(WebsiteDataService);
  allProjects: ProjectItem[] = this.dataService.projects;

  activeSector = signal<string>('all');

  sectors = [
    { key: 'shelter', label: 'الإيواء', color: '#9B8985', iconUrl: 'images/sectors/shelter.svg' },
    { key: 'health', label: 'الصحة', color: '#F34841', iconUrl: 'images/sectors/health.svg' },
    { key: 'education', label: 'التعليم', color: '#0065B7', iconUrl: 'images/sectors/education.svg' },
    { key: 'food', label: 'الأمن الغذائي', color: '#70BB92', iconUrl: 'images/sectors/food.svg' },
    { key: 'water', label: 'المياه والصرف الصحي', color: '#3F9AD1', iconUrl: 'images/sectors/water.svg' },
    { key: 'debris', label: 'إدارة الركام والنفايات الصلبة', color: '#515558', iconUrl: 'images/sectors/debris.svg' },
    { key: 'damage-assessment', label: 'حصر الأضرار', color: '#E0A526', iconUrl: 'images/sectors/damage-assessment.svg' }
  ];

  get filteredProjects(): ProjectItem[] {
    const sec = this.activeSector();
    if (sec === 'all') return this.allProjects;
    return this.allProjects.filter(p => p.sector === sec);
  }

  selectSector(key: string) {
    this.activeSector.set(key);
  }

  getCountForSector(key: string): number {
    if (key === 'all') return this.allProjects.length;
    return this.allProjects.filter(p => p.sector === key).length;
  }

  getSectorColor(sectorKey: string): string {
    const found = this.sectors.find(s => s.key === sectorKey);
    return found ? found.color : '#004380';
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
