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

        <!-- 4 Status Tabs Matching Palimar Categories -->
        <div class="flex items-center justify-center mb-12">
          <div class="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <button 
              *ngFor="let tab of statusTabs"
              (click)="selectTab(tab.key)"
              class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200"
              [class.bg-[#00284d]]="activeTab() === tab.key"
              [class.text-white]="activeTab() === tab.key"
              [class.shadow-md]="activeTab() === tab.key"
              [class.text-slate-600]="activeTab() !== tab.key"
              [class.hover:text-slate-900]="activeTab() !== tab.key"
            >
              {{ tab.label }}
              <span class="mr-1.5 px-2 py-0.5 rounded-full text-[11px]" 
                [class.bg-white/20]="activeTab() === tab.key"
                [class.bg-slate-100]="activeTab() !== tab.key">
                {{ getCountForStatus(tab.key) }}
              </span>
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let proj of filteredProjects"
            class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
          >
            <div>
              <!-- Image & Badges -->
              <div class="relative h-56 overflow-hidden">
                <img 
                  [src]="proj.image" 
                  [alt]="proj.title" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <!-- Status & Sector Badges -->
                <div class="absolute top-3.5 right-3.5 flex items-center gap-2">
                  <span class="px-3 py-1 rounded-full text-xs font-bold shadow"
                    [class.bg-blue-600]="proj.status === 'ongoing'"
                    [class.bg-emerald-600]="proj.status === 'completed'"
                    [class.bg-purple-600]="proj.status === 'future'"
                    [class.bg-rose-600]="proj.status === 'needs'"
                    class="text-white">
                    {{ proj.statusLabel }}
                  </span>
                </div>

                <div class="absolute bottom-3.5 right-3.5 left-3.5 flex items-center justify-between text-white text-xs font-semibold">
                  <span class="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    <svg class="w-3.5 h-3.5 text-[#f4921e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {{ proj.location }}
                  </span>
                  <span class="bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg text-white/90">
                    {{ proj.sectorLabel }}
                  </span>
                </div>
              </div>

              <!-- Project Description & Metrics -->
              <div class="p-6 space-y-4">
                <h3 class="text-lg font-bold text-[#00284d] group-hover:text-[#046bd2] transition-colors line-clamp-2 leading-snug">
                  {{ proj.title }}
                </h3>

                <p class="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {{ proj.description }}
                </p>

                <!-- Progress Bar -->
                <div class="space-y-1.5 pt-2">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-slate-500 font-medium">نسبة الإنجاز:</span>
                    <span class="font-extrabold text-[#00284d]">{{ proj.progressPercentage }}%</span>
                  </div>
                  <div class="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div 
                      class="h-full rounded-full transition-all duration-1000"
                      [style.width.%]="proj.progressPercentage"
                      [class.bg-[#f4921e]]="proj.progressPercentage < 100"
                      [class.bg-emerald-500]="proj.progressPercentage === 100"
                    ></div>
                  </div>
                </div>

                <!-- Financials / Beneficiaries -->
                <div class="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                  <div>
                    <span class="block text-slate-400 text-[11px]">الميزانية المستهدفة</span>
                    <span class="font-bold text-[#00284d]">{{ proj.targetedBudget }}</span>
                  </div>
                  <div>
                    <span class="block text-slate-400 text-[11px]">المستفيدون المقدرون</span>
                    <span class="font-bold text-[#00284d]">{{ proj.beneficiaries }}</span>
                  </div>
                </div>

              </div>
            </div>

            <!-- Card Actions -->
            <div class="p-6 pt-0 flex items-center gap-3">
              <button 
                (click)="projectDetails.emit(proj)"
                class="flex-1 py-2.5 rounded-xl border border-slate-200 text-[#00284d] hover:bg-slate-50 text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <span>تفاصيل المشروع</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>

              <button 
                (click)="donateProject.emit(proj)"
                class="flex-1 py-2.5 rounded-xl bg-[#004380] hover:bg-[#00284d] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow"
              >
                <span>ساهم بالتمويل</span>
                <svg class="w-3.5 h-3.5 text-[#f4921e] fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {
  @Output() projectDetails = new EventEmitter<ProjectItem>();
  @Output() donateProject = new EventEmitter<ProjectItem>();

  private dataService = inject(WebsiteDataService);
  allProjects: ProjectItem[] = this.dataService.projects;

  activeTab = signal<'all' | 'ongoing' | 'completed' | 'future' | 'needs'>('ongoing');

  statusTabs = [
    { key: 'ongoing' as const, label: 'في طور الإنجاز' },
    { key: 'completed' as const, label: 'المشاريع المنجزة' },
    { key: 'future' as const, label: 'المشاريع المستقبلية' },
    { key: 'needs' as const, label: 'الحاجة إلى الإعمار' },
    { key: 'all' as const, label: 'كافة المشاريع' }
  ];

  get filteredProjects(): ProjectItem[] {
    const tab = this.activeTab();
    if (tab === 'all') return this.allProjects;
    return this.allProjects.filter(p => p.status === tab);
  }

  selectTab(tab: 'all' | 'ongoing' | 'completed' | 'future' | 'needs') {
    this.activeTab.set(tab);
  }

  getCountForStatus(status: string): number {
    if (status === 'all') return this.allProjects.length;
    return this.allProjects.filter(p => p.status === status).length;
  }
}
