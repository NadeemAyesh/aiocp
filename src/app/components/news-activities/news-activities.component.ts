import { Component, inject, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';
import { NewsArticle } from '../../models/website.models';

interface ActivityItem {
  id: string;
  badge: string;
  badgeType: 'partnerships' | 'board' | 'conferences' | 'field';
  badgeColor: string;
  timeAgo: string;
  title: string;
  excerpt: string;
  image: string;
  location?: string;
  projectsCount?: string;
  metrics?: { value: string; label: string; sub: string; color: string }[];
}

@Component({
  selector: 'app-news-activities',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- News & Activities Section (Exact Dark Navy Executive Layout as in Screenshot) -->
    <section id="activities" class="py-20 lg:py-28 bg-[#061527] text-white relative overflow-hidden">
      
      <!-- Subtle Radial Glow in Background -->
      <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div class="absolute bottom-10 left-10 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Breaking News Ticker Strip (تحديثات عاجلة - مخفي مؤقتاً) -->
        <div *ngIf="showBreakingNews()" class="mb-12 bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-3 shadow-2xl flex items-center gap-3 sm:gap-4 text-xs overflow-hidden transition-colors duration-200">
          <div class="flex-shrink-0 flex items-center gap-2 font-black text-[#f4921e] bg-[#f4921e]/15 px-3 py-1.5 rounded-xl border border-[#f4921e]/30 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-[#f4921e] animate-ping"></span>
            <span class="whitespace-nowrap">تحديثات عاجلة:</span>
          </div>
          <div class="overflow-hidden relative flex-1">
            <div class="whitespace-nowrap flex items-center gap-8 animate-ticker text-slate-300 font-medium">
              <span *ngFor="let item of breakingNews" class="inline-flex items-center gap-2.5 hover:text-white transition">
                <span class="text-[#f4921e]">✦</span>
                <span>{{ item }}</span>
              </span>
              <!-- Continuous looping repeat -->
              <span *ngFor="let item of breakingNews" class="inline-flex items-center gap-2.5 hover:text-white transition" aria-hidden="true">
                <span class="text-[#f4921e]">✦</span>
                <span>{{ item }}</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Section Header -->
        <div class="mb-10 space-y-3">
          <!-- Top Pill Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-950/80 text-[#38bdf8] border border-blue-800/40">
            <span class="text-sm">🔥</span>
            <span>الملتقيات والمؤتمرات والبيان</span>
          </div>

          <!-- Section Main Headline -->
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.25]">
            أنشطة وحراك الهيئة الدولي والإغاثي
          </h2>

          <!-- Subtitle -->
          <p class="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed font-normal">
            الإطار والمؤتمرات الدولية، اجتماعات مجلس الإدارة، والتحالفات الاستراتيجية لتسريع تنفيذ التدخلات الإعمارية والإنسانية في فلسطين.
          </p>
        </div>

        <!-- Filter Pills Bar (Matching Screenshot) -->
        <div class="flex flex-wrap items-center gap-2.5 mb-10">
          <button 
            *ngFor="let tab of filterTabs"
            (click)="selectFilter(tab.key)"
            class="px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 flex items-center gap-2 border"
            [class.bg-[#f4921e]]="activeFilter() === tab.key"
            [class.text-[#061527]]="activeFilter() === tab.key"
            [class.border-[#f4921e]]="activeFilter() === tab.key"
            [class.shadow-lg]="activeFilter() === tab.key"
            [class.shadow-orange-500/20]="activeFilter() === tab.key"
            [class.bg-[#0a2038]]="activeFilter() !== tab.key"
            [class.text-slate-300]="activeFilter() !== tab.key"
            [class.border-white/10]="activeFilter() !== tab.key"
            [class.hover:border-white/20]="activeFilter() !== tab.key"
            [class.hover:text-white]="activeFilter() !== tab.key"
          >
            <span *ngIf="tab.icon">{{ tab.icon }}</span>
            <span>{{ tab.label }}</span>
          </button>
        </div>

        <!-- Split Grid (Featured Spotlight on Right, 3 Stacked Cards on Left in RTL) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- RIGHT COLUMN (Span 7): Giant Featured News Showcase Card -->
          <div class="lg:col-span-7 bg-[#0b213a]/90 rounded-3xl p-5 sm:p-7 border border-white/10 shadow-2xl space-y-6">
            
            <!-- Featured Media Image Container with Floating Badges -->
            <div class="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 group">
              <img 
                [src]="featuredItem.image" 
                [alt]="featuredItem.title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <!-- Top Badges -->
              <div class="absolute top-3.5 right-3.5 flex flex-wrap items-center gap-2">
                <span class="px-3 py-1 rounded-lg text-xs font-black bg-[#f4921e] text-[#061527] shadow flex items-center gap-1.5">
                  <span>🔥</span>
                  <span>{{ featuredItem.badge }}</span>
                </span>
                <span class="px-3 py-1 rounded-lg text-xs font-bold bg-black/60 backdrop-blur-md text-white/90 border border-white/15">
                  تصنيف دولي
                </span>
              </div>

              <!-- Bottom Floating Badges on Image -->
              <div class="absolute bottom-3.5 right-3.5 left-3.5 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500 text-white shadow flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    <span>مرحلة التنفيذ الفوري</span>
                  </span>
                  <span *ngIf="featuredItem.location" class="hidden sm:inline-block px-2.5 py-1 rounded-lg text-[11px] font-medium bg-black/60 text-slate-300 border border-white/10 backdrop-blur-sm">
                    {{ featuredItem.location }}
                  </span>
                </div>

                <span *ngIf="featuredItem.projectsCount" class="px-3 py-1 rounded-lg text-xs font-black bg-amber-500/90 text-slate-950 shadow">
                  {{ featuredItem.projectsCount }}
                </span>
              </div>
            </div>

            <!-- Headline & Excerpt -->
            <div class="space-y-3">
              <h3 class="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug hover:text-[#38bdf8] transition-colors cursor-pointer" (click)="openArticleDetails(featuredItem)">
                {{ featuredItem.title }}
              </h3>

              <p class="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                {{ featuredItem.excerpt }}
              </p>
            </div>

            <!-- 3 Metrics Boxes Strip (Matching Screenshot) -->
            <div class="grid grid-cols-3 gap-3 pt-1">
              <div 
                *ngFor="let m of featuredItem.metrics"
                class="bg-[#07182c] rounded-2xl p-3.5 border border-white/10 text-center space-y-1"
              >
                <span class="block text-lg sm:text-2xl font-black font-display {{ m.color }}">{{ m.value }}</span>
                <span class="block text-xs font-bold text-white">{{ m.label }}</span>
                <span class="block text-[10px] text-slate-400 font-medium">{{ m.sub }}</span>
              </div>
            </div>

            <!-- Action Footer Bar -->
            <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <button 
                (click)="openArticleDetails(featuredItem)"
                class="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f4921e] to-[#de7c0d] hover:from-[#ff9e2e] hover:to-[#f4921e] text-[#061527] font-black text-xs sm:text-sm shadow-xl hover:shadow-orange-500/20 transition flex items-center gap-2"
              >
                <span>تفاصيل الاتفاقية والبيان المشترك</span>
                <span class="text-base font-bold">+</span>
              </button>

              <button 
                (click)="openArticleDetails(featuredItem)"
                class="text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5"
              >
                <span>قراءة التقرير الميداني</span>
                <svg class="w-3.5 h-3.5 transform -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>

          </div>

          <!-- LEFT COLUMN (Span 5): Vertical Stack of 3 Secondary Cards (Matching Screenshot) -->
          <div class="lg:col-span-5 space-y-4">
            
            <div 
              *ngFor="let item of secondaryItems"
              (click)="selectFeatured(item)"
              class="bg-[#0b213a]/80 hover:bg-[#0b213a] rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/25 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group flex flex-col justify-between"
              [class.ring-2]="featuredItem.id === item.id"
              [class.ring-[#f4921e]/40]="featuredItem.id === item.id"
            >
              <div class="flex items-start justify-between gap-4 mb-3">
                <div class="space-y-2 flex-1">
                  <!-- Category & Time -->
                  <div class="flex items-center gap-2 text-[11px]">
                    <span class="px-2.5 py-0.5 rounded-md font-bold text-xs {{ item.badgeColor }} bg-white/10">
                      {{ item.badge }}
                    </span>
                    <span class="text-slate-400">• {{ item.timeAgo }}</span>
                  </div>

                  <!-- Headline -->
                  <h4 class="text-sm sm:text-base font-extrabold text-white leading-snug group-hover:text-[#38bdf8] transition-colors line-clamp-2">
                    {{ item.title }}
                  </h4>
                </div>

                <!-- Thumbnail on Left with Inner Badge -->
                <div class="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 border border-white/15">
                  <img [src]="item.image" [alt]="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-black bg-black/75 text-white backdrop-blur-sm">
                    {{ item.badge }}
                  </span>
                </div>
              </div>

              <!-- Footer Link -->
              <div class="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                <button 
                  (click)="openArticleDetails(item); $event.stopPropagation()"
                  class="text-[#38bdf8] group-hover:text-[#f4921e] font-bold flex items-center gap-1 transition"
                >
                  <span>التفاصيل</span>
                  <span class="text-sm">←</span>
                </button>
                <span class="text-[11px] text-slate-500">إعلام الإعمار</span>
              </div>

            </div>

          </div>

        </div>

        <!-- Executive Bottom Archive & Impact Stats Strip (From User Reference) -->
        <div class="mt-12 bg-[#091b2e]/90 backdrop-blur-md rounded-2xl border border-white/10 p-5 sm:p-6 lg:px-8 lg:py-5 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <!-- Right Stats Group (In RTL) -->
          <div class="flex flex-wrap items-center gap-6 sm:gap-10 lg:gap-14">
            
            <!-- Stat 1: Meetings 2025 -->
            <div class="space-y-1">
              <span class="block text-[11px] sm:text-xs text-slate-400 font-medium">اجتماعات وملتقيات 2025</span>
              <span class="block text-xl sm:text-2xl font-black text-[#f4921e] tracking-tight font-mono">+18 لقاءً دولياً</span>
            </div>

            <!-- Stat 2: MoUs & Partnerships -->
            <div class="space-y-1">
              <span class="block text-[11px] sm:text-xs text-slate-400 font-medium">مذكرات تفاهم وشراكة</span>
              <span class="block text-xl sm:text-2xl font-black text-[#38bdf8] tracking-tight font-mono">14 اتفاقية</span>
            </div>

            <!-- Stat 3: Humanitarian Clusters -->
            <div class="space-y-1">
              <span class="block text-[11px] sm:text-xs text-slate-400 font-medium">تمثيل في التكتلات الإنسانية</span>
              <span class="block text-xl sm:text-2xl font-black text-emerald-400 tracking-tight font-mono">4 كتل أممية</span>
            </div>

          </div>

          <!-- Left CTA Button (In RTL) -->
          <div class="shrink-0">
            <button 
              (click)="onViewAllArchive()"
              class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#f4921e] hover:bg-[#ff9e2e] active:bg-[#e08112] text-[#00172e] font-black text-xs sm:text-sm transition-all duration-200 shadow-[0_4px_24px_rgba(244,146,30,0.35)] hover:shadow-[0_6px_30px_rgba(244,146,30,0.5)] hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <svg class="w-4 h-4 text-[#00172e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span>استعراض أرشيف الأنشطة والمؤتمرات بالكامل</span>
              <span class="text-base font-bold transform -translate-x-0.5">←</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    @keyframes ticker {
      0% { transform: translateX(0); }
      100% { transform: translateX(50%); }
    }
    .animate-ticker {
      display: inline-flex;
      animation: ticker 35s linear infinite;
    }
    .animate-ticker:hover {
      animation-play-state: paused;
    }
  `]
})
export class NewsActivitiesComponent {
  @Output() articleSelected = new EventEmitter<NewsArticle>();

  private dataService = inject(WebsiteDataService);
  breakingNews: string[] = this.dataService.breakingNews;
  showBreakingNews = signal<boolean>(false);

  activeFilter = signal<'all' | 'partnerships' | 'board' | 'conferences'>('all');

  filterTabs = [
    { key: 'all' as const, label: 'كل الأنشطة', icon: '🔥' },
    { key: 'partnerships' as const, label: 'تنسيق وشراكات', icon: '🤝' },
    { key: 'board' as const, label: 'مجلس الإدارة', icon: '🏛️' },
    { key: 'conferences' as const, label: 'مؤتمرات دولية', icon: '🌐' }
  ];

  activities: ActivityItem[] = [
    {
      id: 'act-1',
      badge: 'شراكة استراتيجية',
      badgeType: 'partnerships',
      badgeColor: 'text-[#f4921e]',
      timeAgo: 'قبل يومين',
      title: 'اتفاقيات شراكة استراتيجية بقيمة 29 مليون دولار لدعم مشاريع التعافي والإعمار في غزة',
      excerpt: 'توقيع حزمة عقود ومذكرات تفاهم لتنفيذ حزمة متكاملة من مشاريع المياه والصرف الصحي والمراكز الإيوائية الطارئة والمستشفيات الميدانية بالتنسيق مع سلطة المياه ووزارة الأشغال العامة لتمويل المدارس والمشاريع.',
      image: 'images/board-meeting.jpg',
      location: 'إسطنبول - غزة',
      projectsCount: '18 مشروعاً',
      metrics: [
        { value: '$29M', label: 'حجم التمويل', sub: 'تمويل معتمد', color: 'text-[#f4921e]' },
        { value: '12 قطاعاً', label: 'مجالات التدخل', sub: 'مختلف المحافظات', color: 'text-[#38bdf8]' },
        { value: '+500 ألف', label: 'نسمة مستفيدة', sub: 'مستفيد مباشر', color: 'text-emerald-400' }
      ]
    },
    {
      id: 'act-2',
      badge: 'مجلس الإدارة',
      badgeType: 'board',
      badgeColor: 'text-emerald-400',
      timeAgo: 'قبل يومين',
      title: 'الهيئة تعقد اجتماع مجلس إدارتها وتقر خطة طوارئ إنسانية وهندسية عاجلة',
      excerpt: 'خلال اجتماع موسع ضم نخبة من الخبراء الهندسيين ورجال الأعمال العرب، اعتمد المجلس موازنة الطوارئ وخطط التدخل السريع للمناطق المنكوبة.',
      image: 'images/board-meeting.jpg',
      location: 'المقر الرئيسي',
      projectsCount: '9 تدخلات',
      metrics: [
        { value: '$12M', label: 'موازنة الطوارئ', sub: 'إسناد عاجل', color: 'text-[#f4921e]' },
        { value: '4 محافظات', label: 'نطاق العمل', sub: 'غزة والشمال', color: 'text-[#38bdf8]' },
        { value: '100%', label: 'جاهزية الفرق', sub: 'طواقم ميدانية', color: 'text-emerald-400' }
      ]
    },
    {
      id: 'act-3',
      badge: 'مؤتمرات دولية',
      badgeType: 'conferences',
      badgeColor: 'text-[#38bdf8]',
      timeAgo: 'قبل 4 أيام',
      title: 'انطلاق أعمال ملتقى مجلس إدارة الهيئة الموسع برعاية دولية وهندسية واسعة',
      excerpt: 'مشاركة ممثلين عن منظمات أممية ونقابات مهندسين عربية لبحث آليات إزالة الركام، وتأهيل البنية التحتية والمياه والصرف الصحي.',
      image: 'images/rubble-removal.jpg',
      location: 'المؤتمر السنوي',
      projectsCount: '24 جهة شريكة',
      metrics: [
        { value: '24', label: 'جهة شريكة', sub: 'محلية ودولية', color: 'text-[#f4921e]' },
        { value: '+150K طن', label: 'ركام مستهدف', sub: 'فتح الشوارع', color: 'text-[#38bdf8]' },
        { value: '350 ألف', label: 'مستفيد', sub: 'سكان الأحياء', color: 'text-emerald-400' }
      ]
    },
    {
      id: 'act-4',
      badge: 'تنسيق وشراكات',
      badgeType: 'partnerships',
      badgeColor: 'text-purple-400',
      timeAgo: 'قبل أسبوع',
      title: 'إسهامات الهيئة في دعم الإعمار وتوقيع بروتوكولات مائية وخدمية جديدة',
      excerpt: 'توقيع اتفاقيات تشغيل آبار المياه بالطاقة الشمسية وشبكات التوزيع وتوفير آليات ترحيل النفايات الصلبة شمال قطاع غزة.',
      image: 'images/water-projects.jpg',
      location: 'محافظة الشمال',
      projectsCount: '12 بئراً مركزياً',
      metrics: [
        { value: '12 بئراً', label: 'آبار مياه', sub: 'طاقة شمسية', color: 'text-[#f4921e]' },
        { value: '250,000', label: 'نسمة مستفيدة', sub: 'مياه صالحة', color: 'text-[#38bdf8]' },
        { value: '$850K', label: 'قيمة المشروع', sub: 'تشغيل مباشر', color: 'text-emerald-400' }
      ]
    },
    {
      id: 'act-4',
      badge: 'تنسيق وشراكات',
      badgeType: 'partnerships',
      badgeColor: 'text-purple-400',
      timeAgo: 'قبل أسبوع',
      title: 'إسهامات الهيئة في دعم الإعمار وتوقيع بروتوكولات مائية وخدمية جديدة',
      excerpt: 'توقيع اتفاقيات تشغيل آبار المياه بالطاقة الشمسية وشبكات التوزيع وتوفير آليات ترحيل النفايات الصلبة شمال قطاع غزة.',
      image: 'images/water-projects.jpg',
      location: 'محافظة الشمال',
      projectsCount: '12 بئراً مركزياً',
      metrics: [
        { value: '12 بئراً', label: 'آبار مياه', sub: 'طاقة شمسية', color: 'text-[#f4921e]' },
        { value: '250,000', label: 'نسمة مستفيدة', sub: 'مياه صالحة', color: 'text-[#38bdf8]' },
        { value: '$850K', label: 'قيمة المشروع', sub: 'تشغيل مباشر', color: 'text-emerald-400' }
      ]
    }
  ];

  featuredItem: ActivityItem = this.activities[0];

  get secondaryItems(): ActivityItem[] {
    const filter = this.activeFilter();
    let list = this.activities.filter(a => a.id !== this.featuredItem.id);
    if (filter !== 'all') {
      list = this.activities.filter(a => a.badgeType === filter && a.id !== this.featuredItem.id);
    }
    return list;
  }

  selectFilter(key: 'all' | 'partnerships' | 'board' | 'conferences') {
    this.activeFilter.set(key);
    if (key !== 'all') {
      const match = this.activities.find(a => a.badgeType === key);
      if (match) this.featuredItem = match;
    }
  }

  selectFeatured(item: ActivityItem) {
    this.featuredItem = item;
  }

  openArticleDetails(item: ActivityItem) {
    this.articleSelected.emit({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      category: 'activities',
      categoryLabel: item.badge,
      image: item.image,
      date: item.timeAgo,
      readTime: '3 دقائق',
      author: 'إعلام الإعمار'
    });
  }

  @Output() viewAllArchive = new EventEmitter<void>();

  onViewAllArchive() {
    this.viewAllArchive.emit();
    this.openArticleDetails(this.featuredItem);
  }
}
