import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';

@Component({
  selector: 'app-about-vision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 lg:py-28 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- About Overview Hero Banner -->
        <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-20">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
            
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#004380] border border-blue-200">
                <span class="w-2 h-2 rounded-full bg-[#004380]"></span>
                <span>من نحن • الهيئة في سطور</span>
              </div>

              <h2 class="text-3xl sm:text-4xl font-extrabold text-[#00284d] leading-tight">
                رواد الهندسة والإعمار لدعم صمود الشعب الفلسطيني
              </h2>

              <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
                الهيئة العربية الدولية للإعمار في فلسطين هيئة مهنية مستقلة غير ربحية، تأسست بمبادرة من كوكبة من الشخصيات العربية ونقابات المهندسين والمؤسسات التنموية، بهدف توحيد الجهود الهندسية والمالية لإعادة إعمار ما دمره الاحتلال في فلسطين، وتثبيت المواطنين فوق أرضهم عبر مشاريع تنموية مستدامة وفق أرفع معايير الحوكمة والنزاهة الدولية.
              </p>

              <!-- Highlights list -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <span class="text-sm font-bold text-slate-800">إشراف هندسي ونقابي معتمد</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <span class="text-sm font-bold text-slate-800">عضوية في كتل الأمم المتحدة الإنسانية</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <span class="text-sm font-bold text-slate-800">رقابة مالية وتدقيق دولي مستقل</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                  <span class="text-sm font-bold text-slate-800">طواقم ميدانية تعمل على مدار الساعة</span>
                </div>
              </div>

            </div>

            <!-- Visual Badge / Official Seal -->
            <div class="lg:col-span-5 flex justify-center">
              <div class="relative w-full max-w-sm">
                <div class="bg-gradient-to-br from-[#00284d] to-[#004380] rounded-3xl p-8 text-white text-center space-y-6 shadow-2xl relative z-10 border border-white/20">
                  <img src="images/logo-palimar.png" alt="شعار الهيئة" class="h-24 w-auto mx-auto bg-white p-2 rounded-2xl shadow-md" />
                  <div class="space-y-1">
                    <h3 class="text-xl font-black">الهيئة العربية الدولية</h3>
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
          <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 class="text-2xl sm:text-3xl font-extrabold text-[#00284d]">
              الرؤية والرسالة والأهداف الاستراتيجية
            </h3>
            <p class="text-slate-600 text-sm sm:text-base">
              منظومة قيم مؤسسية راسخة تحدد بوصلة العمل والإعمار التنموي المستدام.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              *ngFor="let pillar of strategicPillars"
              class="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div class="space-y-4">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br {{ pillar.accent }} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg *ngIf="pillar.icon === 'eye'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <svg *ngIf="pillar.icon === 'flag'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>
                  <svg *ngIf="pillar.icon === 'target'" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>

                <div>
                  <h4 class="text-xl font-extrabold text-[#00284d]">{{ pillar.title }}</h4>
                  <span class="text-xs font-bold text-[#f4921e]">{{ pillar.subtitle }}</span>
                </div>

                <p class="text-slate-600 text-sm leading-relaxed">
                  {{ pillar.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Comprehensive Statistics Strip -->
        <div class="bg-gradient-to-r from-[#00284d] via-[#004380] to-[#00284d] rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-20 border border-white/10">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <h3 class="text-2xl sm:text-3xl font-black">أرقام وإحصائيات موثقة</h3>
            <p class="text-white/70 text-sm mt-1">حصاد ثقة المانحين والشركاء على مدار سنوات العطاء والعمل الميداني المتواصل</p>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-white/15">
            <div *ngFor="let stat of statistics" class="pt-4 sm:pt-0 space-y-2">
              <span class="block text-3xl sm:text-4xl lg:text-5xl font-black text-[#f4921e] font-display">
                {{ stat.value }}
              </span>
              <span class="block text-sm sm:text-base font-bold text-white">
                {{ stat.label }}
              </span>
              <span class="block text-xs text-white/60 max-w-xs mx-auto">
                {{ stat.sublabel }}
              </span>
            </div>
          </div>
        </div>

        <!-- Strategic Partners Section -->
        <div>
          <div class="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
              <span>تحالفات إنسانية وهندسية متينة</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-[#00284d]">
              شركاؤنا في النجاح والإعمار
            </h3>
            <p class="text-slate-600 text-sm">
              تفخر الهيئة بشراكاتها الاستراتيجية مع كبرى منظمات الأمم المتحدة، الوزارات المختصة، ونقابات المهندسين.
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            <div 
              *ngFor="let partner of partners"
              class="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-center gap-3 h-36 group"
            >
              <img [src]="partner.logo" [alt]="partner.name" class="h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
              <div>
                <span class="block text-[11px] font-bold text-slate-800 line-clamp-1">{{ partner.name }}</span>
                <span class="block text-[10px] text-slate-400">{{ partner.category }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class AboutVisionPartnersComponent {
  private dataService = inject(WebsiteDataService);
  strategicPillars = this.dataService.strategicPillars;
  statistics = this.dataService.statistics;
  partners = this.dataService.partners;
}
