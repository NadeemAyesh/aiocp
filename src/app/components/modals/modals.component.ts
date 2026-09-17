import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectItem, MediaItem, NewsArticle } from '../../models/website.models';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- PROJECT DETAILS MODAL -->
    <div 
      *ngIf="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      (click)="closeProject()"
    >
      <div 
        class="bg-white dark:bg-[#00172e] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-white/15 transition-colors"
        (click)="$event.stopPropagation()"
      >
        <div class="relative h-64 sm:h-72 overflow-hidden">
          <img [src]="selectedProject.image" [alt]="selectedProject.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
          
          <button 
            (click)="closeProject()"
            class="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition"
          >
            ✕
          </button>

          <div class="absolute bottom-4 right-4 left-4 text-white">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#f4921e] text-[#001f3b] mb-2 inline-block shadow">
              {{ selectedProject.statusLabel }} • {{ selectedProject.sectorLabel }}
            </span>
            <h3 class="text-lg sm:text-xl font-extrabold leading-snug">
              {{ selectedProject.title }}
            </h3>
          </div>
        </div>

        <div class="p-6 sm:p-8 space-y-6">
          <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed transition-colors">
            {{ selectedProject.description }}
          </p>

          <!-- Metrics Box -->
          <div class="bg-gradient-to-br from-slate-50 to-[#f0f7ff] dark:from-white/[0.04] dark:to-white/[0.02] rounded-2xl p-5 border border-slate-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center transition-colors">
            <div>
              <span class="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">قيمة التمويل المطلوب</span>
              <span class="font-black text-lg text-[#00284d] dark:text-white font-mono">{{ selectedProject.targetedBudget }}</span>
            </div>
            <div>
              <span class="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">التمويل المحصل</span>
              <span class="font-bold text-base text-emerald-600 dark:text-emerald-400 font-mono">{{ selectedProject.raisedBudget }}</span>
            </div>
            <div>
              <span class="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">المستفيدون المقدرون</span>
              <span class="font-bold text-sm text-[#046bd2] dark:text-sky-400">{{ selectedProject.beneficiaries }}</span>
            </div>
            <div>
              <span class="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">الموقع الميداني</span>
              <span class="font-bold text-sm text-slate-700 dark:text-slate-200">{{ selectedProject.location }}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-3 pt-2">
            <button 
              (click)="openDonate.emit(); closeProject()"
              class="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#f4921e] to-[#de7c0d] text-white font-bold text-sm shadow-lg hover:shadow-orange-500/25 transition flex items-center justify-center gap-2"
            >
              <span>تبرع لدعم هذا المشروع الآن</span>
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
            <button 
              (click)="closeProject()"
              class="px-6 py-3.5 rounded-xl border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-white/10 transition"
            >
              إغلاق
            </button>
          </div>

        </div>
      </div>
    </div>

    <!-- VIDEO PLAYER MODAL -->
    <div 
      *ngIf="selectedVideo"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      (click)="closeVideo()"
    >
      <div 
        class="bg-[#00172e] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/20 text-white"
        (click)="$event.stopPropagation()"
      >
        <div class="flex items-center justify-between p-4 border-b border-white/10">
          <div class="space-y-0.5">
            <h4 class="font-bold text-sm sm:text-base">{{ selectedVideo.title }}</h4>
            <span class="text-xs text-[#f4921e]">{{ selectedVideo.speaker || 'تقرير الهيئة' }} • {{ selectedVideo.date }}</span>
          </div>
          <button (click)="closeVideo()" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white">
            ✕
          </button>
        </div>

        <div class="relative aspect-video bg-black flex items-center justify-center">
          <img [src]="selectedVideo.image" [alt]="selectedVideo.title" class="w-full h-full object-cover opacity-60" />
          <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div class="w-16 h-16 rounded-full bg-[#f4921e] text-[#001f3b] flex items-center justify-center shadow-2xl">
              <svg class="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p class="text-xs sm:text-sm text-white/90 max-w-md">
              لمشاهدة التقرير الميداني عبر قناة الهيئة الرسمية:
            </p>
            <a 
              href="https://www.youtube.com/@imargaza" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-2 shadow"
            >
              <span>فتح الفيديو على يوتيوب</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- PHOTO LIGHTBOX MODAL -->
    <div 
      *ngIf="selectedPhoto"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      (click)="closePhoto()"
    >
      <div 
        class="max-w-4xl w-full text-center space-y-4"
        (click)="$event.stopPropagation()"
      >
        <div class="flex justify-end">
          <button (click)="closePhoto()" class="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/40 flex items-center justify-center text-lg font-bold">
            ✕
          </button>
        </div>
        <img [src]="selectedPhoto.image" [alt]="selectedPhoto.title" class="max-h-[75vh] w-auto mx-auto rounded-2xl shadow-2xl border border-white/20" />
        <div class="text-white">
          <h4 class="text-lg font-bold">{{ selectedPhoto.title }}</h4>
          <span class="text-xs text-[#f4921e]">{{ selectedPhoto.date }}</span>
        </div>
      </div>
    </div>

    <!-- ARTICLE DETAILS MODAL -->
    <div 
      *ngIf="selectedArticle"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      (click)="closeArticle()"
    >
      <div 
        class="bg-white dark:bg-[#00172e] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-white/15 transition-colors"
        (click)="$event.stopPropagation()"
      >
        <div class="relative h-64 overflow-hidden">
          <img [src]="selectedArticle.image" [alt]="selectedArticle.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <button 
            (click)="closeArticle()"
            class="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center"
          >
            ✕
          </button>
          <span class="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-[#f4921e] text-[#001f3b]">
            {{ selectedArticle.categoryLabel }}
          </span>
        </div>

        <div class="p-6 sm:p-8 space-y-6">
          <div class="flex items-center gap-3 text-xs text-slate-400">
            <span>{{ selectedArticle.date }}</span>
            <span>•</span>
            <span>قراءة {{ selectedArticle.readTime }}</span>
            <span>•</span>
            <span class="text-[#004380] dark:text-sky-400 font-bold">{{ selectedArticle.author }}</span>
          </div>

          <h3 class="text-lg sm:text-xl font-extrabold text-[#00284d] dark:text-white leading-snug transition-colors">
            {{ selectedArticle.title }}
          </h3>

          <div class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3.5 transition-colors">
            <p>{{ selectedArticle.excerpt }}</p>
            <p>
              تواصل الفرق والكوادر الهندسية التابعة للهيئة العربية الدولية للإعمار العمل الميداني الدؤوب بالتنسيق مع الجهات الشريكة ووزارة الأشغال العامة لتقديم الحلول الهندسية العاجلة وتخفيف المعاناة عن المتضررين.
            </p>
            <p>
              وتدعو الهيئة كافة المؤسسات العربية والدولية والخيرين حول العالم لتعزيز مساهماتهم ودعم حملات الإعمار المتواصلة لإعادة تأهيل المرافق الحيوية في قطاع غزة.
            </p>
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
            <button 
              (click)="openDonate.emit(); closeArticle()"
              class="py-3 px-6 rounded-xl bg-[#004380] dark:bg-[#046bd2] text-white font-bold text-xs sm:text-sm hover:bg-[#00284d] transition"
            >
              ساهم في دعم مشاريع الإعمار
            </button>
            <button (click)="closeArticle()" class="px-5 py-3 rounded-xl border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/10 transition">
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- SHARE MODAL -->
    <div 
      *ngIf="showShareModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      (click)="closeShare()"
    >
      <div 
        class="bg-white dark:bg-[#00172e] rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 dark:border-white/15 transition-colors"
        (click)="$event.stopPropagation()"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-full bg-orange-100 dark:bg-[#f4921e]/20 text-[#f4921e] flex items-center justify-center">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 16.08a2.9 2.9 0 0 0-1.95.77L8.91 12.7a3.3 3.3 0 0 0 0-1.4l7.05-4.11A2.98 2.98 0 1 0 15 5c0 .24.04.47.09.7L8.04 9.81a3 3 0 1 0 0 4.38l7.12 4.16c-.05.21-.08.43-.08.65a2.92 2.92 0 1 0 2.92-2.92z"/></svg>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-[#00284d] dark:text-white">مشاركة الموقع</h3>
          </div>
          <button (click)="closeShare()" class="text-slate-400 hover:text-slate-700 dark:hover:text-white">✕</button>
        </div>

        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
          ساهم في نشر رسالة الإعمار ودعم صمود الشعب الفلسطيني عبر مشاركة الرابط مع أصدقائك:
        </p>

        <!-- Social Share Buttons -->
        <div class="grid grid-cols-4 gap-3 text-center">
          <button (click)="shareTo('whatsapp')" class="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition flex flex-col items-center gap-1.5 font-bold text-xs">
            <span>واتساب</span>
          </button>
          <button (click)="shareTo('facebook')" class="p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-sky-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition flex flex-col items-center gap-1.5 font-bold text-xs">
            <span>فيسبوك</span>
          </button>
          <button (click)="shareTo('x')" class="p-3 rounded-2xl bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/20 transition flex flex-col items-center gap-1.5 font-bold text-xs">
            <span>منصة X</span>
          </button>
          <button (click)="shareTo('telegram')" class="p-3 rounded-2xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-500/20 transition flex flex-col items-center gap-1.5 font-bold text-xs">
            <span>تيليغرام</span>
          </button>
        </div>

        <!-- Copy Link Input -->
        <div class="flex items-center gap-2 p-2 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
          <input type="text" [value]="pageUrl" readonly class="flex-1 bg-transparent text-xs text-slate-600 dark:text-slate-300 outline-none px-2" dir="ltr" />
          <button (click)="copyLink()" class="px-4 py-2 rounded-lg bg-[#004380] text-white text-xs font-bold hover:bg-[#00284d] transition">
            {{ isCopied ? 'تم النسخ!' : 'نسخ' }}
          </button>
        </div>
      </div>
    </div>

    <!-- QUICK SEARCH MODAL -->
    <div 
      *ngIf="showSearchModal"
      class="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/75 backdrop-blur-md animate-fadeIn"
      (click)="closeSearch()"
    >
      <div 
        class="bg-white dark:bg-[#00172e] rounded-3xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-slate-200 dark:border-white/15 transition-colors"
        (click)="$event.stopPropagation()"
      >
        <div class="flex items-center gap-3 border-b border-slate-200 dark:border-white/15 pb-3">
          <svg class="w-5 h-5 text-[#004380] dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input 
            type="text" 
            [(ngModel)]="searchQuery" 
            placeholder="ابحث عن المشاريع، الأخبار، التقارير الميدانية..." 
            class="flex-1 text-sm font-medium text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-transparent outline-none"
            autofocus
          />
          <button (click)="closeSearch()" class="text-slate-400 hover:text-slate-700 dark:hover:text-white">✕</button>
        </div>

        <div class="space-y-2 max-h-64 overflow-y-auto pt-2">
          <span class="text-[11px] font-bold text-slate-400 dark:text-slate-400">روابط مقترحة سريعة:</span>
          <div class="flex flex-wrap gap-2">
            <a href="#activities" (click)="closeSearch()" class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-xs font-bold text-slate-700 dark:text-slate-200 transition">إزالة الركام</a>
            <a href="#projects" (click)="closeSearch()" class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-xs font-bold text-slate-700 dark:text-slate-200 transition">مخيمات الإيواء في جباليا</a>
            <a href="#projects" (click)="closeSearch()" class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-xs font-bold text-slate-700 dark:text-slate-200 transition">تأهيل آبار المياه</a>
            <a href="#media" (click)="closeSearch()" class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-xs font-bold text-slate-700 dark:text-slate-200 transition">التقرير الهندسي الشامل</a>
            <a href="#about" (click)="closeSearch()" class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-xs font-bold text-slate-700 dark:text-slate-200 transition">شركاؤنا والأمم المتحدة</a>
          </div>
        </div>
      </div>
    </div>

    <!-- QUICK DONATION MODAL -->
    <div 
      *ngIf="showDonateModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      (click)="closeDonate()"
    >
      <div 
        class="bg-white dark:bg-[#00172e] rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 dark:border-white/15 transition-colors"
        (click)="$event.stopPropagation()"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-[#f4921e]/15 text-[#f4921e] flex items-center justify-center">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <div>
              <h3 class="text-lg font-extrabold text-[#00284d] dark:text-white">ساهم في إعمار فلسطين</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">مساهمتك تعيد بناء البيوت وترمم الأمل</p>
            </div>
          </div>
          <button (click)="closeDonate()" class="text-slate-400 hover:text-slate-700 dark:hover:text-white">✕</button>
        </div>

        <!-- Predefined Amounts -->
        <div class="space-y-2">
          <label class="block text-xs font-bold text-slate-700 dark:text-slate-300">اختر قيمة التبرع (USD):</label>
          <div class="grid grid-cols-4 gap-2.5">
            <button 
              *ngFor="let amt of donationAmounts"
              (click)="selectedAmount = amt"
              class="py-3 rounded-xl border text-sm font-extrabold transition-all duration-200"
              [class.bg-[#00284d]]="selectedAmount === amt"
              [class.dark:bg-[#f4921e]]="selectedAmount === amt"
              [class.text-white]="selectedAmount === amt"
              [class.dark:text-[#00172e]]="selectedAmount === amt"
              [class.border-[#00284d]]="selectedAmount === amt"
              [class.dark:border-[#f4921e]]="selectedAmount === amt"
              [class.bg-slate-50]="selectedAmount !== amt"
              [class.dark:bg-white/5]="selectedAmount !== amt"
              [class.border-slate-200]="selectedAmount !== amt"
              [class.dark:border-white/10]="selectedAmount !== amt"
              [class.dark:text-slate-200]="selectedAmount !== amt"
            >
              \${{ amt }}
            </button>
          </div>
        </div>

        <!-- Custom Amount -->
        <div class="space-y-1">
          <label class="block text-xs font-bold text-slate-700 dark:text-slate-300">أو أدخل مبلغاً مخصصاً:</label>
          <div class="relative">
            <input 
              type="number" 
              [(ngModel)]="selectedAmount" 
              placeholder="مثال: 300" 
              class="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-sm font-bold text-[#00284d] dark:text-white outline-none focus:border-[#004380] dark:focus:border-[#f4921e]"
            />
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">USD</span>
          </div>
        </div>

        <!-- Submit to AIOCP Donate Platform -->
        <div class="pt-2 space-y-3">
          <a 
            href="https://donate.aiocp.org/home" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full py-4 rounded-xl bg-gradient-to-r from-[#f4921e] to-[#e67e00] text-white font-extrabold text-sm shadow-xl hover:shadow-orange-500/30 transition flex items-center justify-center gap-2"
          >
            <span>المتابعة إلى بوابة الدفع الآمنة (AIOCP Donate)</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
          <p class="text-[11px] text-center text-slate-400 dark:text-slate-400 flex items-center justify-center gap-1">
            <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            <span>بوابة تبرع مشفرة ومحمية بأعلى معايير الأمان المصرفي الدولي</span>
          </p>
        </div>

      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fadeIn {
      animation: fadeIn 0.2s ease-out forwards;
    }
  `]
})
export class ModalsComponent {
  @Input() selectedProject: ProjectItem | null = null;
  @Input() selectedVideo: MediaItem | null = null;
  @Input() selectedPhoto: MediaItem | null = null;
  @Input() selectedArticle: NewsArticle | null = null;
  @Input() showShareModal = false;
  @Input() showSearchModal = false;
  @Input() showDonateModal = false;

  @Output() closeProjectModal = new EventEmitter<void>();
  @Output() closeVideoModal = new EventEmitter<void>();
  @Output() closePhotoModal = new EventEmitter<void>();
  @Output() closeArticleModal = new EventEmitter<void>();
  @Output() closeShareModal = new EventEmitter<void>();
  @Output() closeSearchModal = new EventEmitter<void>();
  @Output() closeDonateModal = new EventEmitter<void>();
  @Output() openDonate = new EventEmitter<void>();

  searchQuery = '';
  donationAmounts = [50, 100, 250, 500];
  selectedAmount = 100;
  isCopied = false;

  get pageUrl(): string {
    return window.location.href;
  }

  closeProject() { this.closeProjectModal.emit(); }
  closeVideo() { this.closeVideoModal.emit(); }
  closePhoto() { this.closePhotoModal.emit(); }
  closeArticle() { this.closeArticleModal.emit(); }
  closeShare() { this.closeShareModal.emit(); }
  closeSearch() { this.closeSearchModal.emit(); }
  closeDonate() { this.closeDonateModal.emit(); }

  copyLink() {
    navigator.clipboard.writeText(this.pageUrl);
    this.isCopied = true;
    setTimeout(() => this.isCopied = false, 2500);
  }

  shareTo(platform: string) {
    const text = encodeURIComponent('الهيئة العربية الدولية للإعمار في فلسطين — معاً لإعادة إعمار غزة والأمل');
    const url = encodeURIComponent(this.pageUrl);
    let target = '';

    switch (platform) {
      case 'whatsapp': target = `https://api.whatsapp.com/send?text=${text}%20${url}`; break;
      case 'facebook': target = `https://www.facebook.com/sharer/sharer.php?u=${url}`; break;
      case 'x': target = `https://twitter.com/intent/tweet?text=${text}&url=${url}`; break;
      case 'telegram': target = `https://t.me/share/url?url=${url}&text=${text}`; break;
    }

    if (target) window.open(target, '_blank', 'noopener,noreferrer');
  }
}
