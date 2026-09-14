import { Component, HostListener, Output, EventEmitter, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top Bar (Deep Navy with Contact & Socials) -->
    <div class="hidden lg:block bg-[#002242] text-white/85 text-xs border-b border-white/10 relative z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#f4921e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <a href="mailto:info@palimar.org" class="hover:text-white transition">info&#64;palimar.org</a>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#f4921e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span dir="ltr">+90 212 521 15 15</span>
          </div>
          <div class="flex items-center gap-2 border-r border-white/15 pr-4 mr-2">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-white/95 font-medium">مرحلة الاستجابة الطارئة وإعادة تأهيل غزة</span>
          </div>
        </div>

        <div class="flex items-center gap-5">
          <!-- Social Icons -->
          <div class="flex items-center gap-2.5 border-l border-white/15 pl-4">
            <a href="https://www.facebook.com/palimarorg" target="_blank" rel="noopener noreferrer" class="hover:text-[#f4921e] transition p-1" title="فيسبوك">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/palimarorg_/" target="_blank" rel="noopener noreferrer" class="hover:text-[#f4921e] transition p-1" title="انستغرام">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://x.com/palimarorg" target="_blank" rel="noopener noreferrer" class="hover:text-[#f4921e] transition p-1" title="منصة X">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.youtube.com/@imargaza" target="_blank" rel="noopener noreferrer" class="hover:text-[#f4921e] transition p-1" title="يوتيوب">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          <!-- Quick Actions -->
          <a href="https://donate.aiocp.org/home" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[#f4921e] font-semibold transition flex items-center gap-1.5">
            <span>منصة التبرعات</span>
            <svg class="w-3.5 h-3.5 text-[#f4921e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
          <button (click)="toggleLanguage()" class="hover:bg-white/20 transition px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-bold">
            English
          </button>
        </div>

      </div>
    </div>

    <!-- Main Navigation Header (Clean, Light Glass with Navy Brand & Shadow - Fixed on Scroll) -->
    <header 
      class="w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm"
      [class.navbar-fixed]="isScrolled()"
      [class.relative]="!isScrolled()"
      [class.z-40]="!isScrolled()"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between transition-all duration-300" [class.h-16]="isScrolled()" [class.h-20]="!isScrolled()">
          
          <!-- Logo & Brand Name -->
          <a href="#" class="flex items-center gap-3.5 group focus:outline-none">
            <div class="relative bg-white p-1 rounded-xl shadow-sm border border-slate-200 group-hover:scale-105 transition-transform duration-200">
              <img 
                src="images/logo-palimar.png" 
                alt="شعار الهيئة العربية الدولية للإعمار في فلسطين" 
                class="transition-all duration-200 object-contain"
                [class.h-10]="isScrolled()"
                [class.h-12]="!isScrolled()"
                [class.sm:h-11]="isScrolled()"
                [class.sm:h-13]="!isScrolled()"
              />
            </div>
            <div class="flex flex-col text-right">
              <span class="text-[#00284d] font-black text-sm sm:text-base leading-tight tracking-tight">
                الهيئة العربية الدولية
              </span>
              <span class="text-[#f4921e] font-extrabold text-xs sm:text-sm leading-tight">
                للإعمار في فلسطين
              </span>
              <span class="text-slate-500 text-[10px] hidden sm:block font-medium">
                منظمة إنسانية تنموية متخصصة
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Menu -->
          <nav class="hidden xl:flex items-center gap-1.5 2xl:gap-2">
            <!-- الرئيسية -->
            <a href="#hero" class="nav-item text-[#00284d] hover:text-[#f4921e] px-3.5 py-2 text-sm font-bold rounded-xl transition duration-150">
              الرئيسية
            </a>

            <!-- من نحن (Dropdown) -->
            <div class="relative group" (mouseenter)="openDropdown('about')" (mouseleave)="closeDropdown()">
              <button class="nav-item text-[#00284d] hover:text-[#f4921e] px-3.5 py-2 text-sm font-bold rounded-xl transition duration-150 flex items-center gap-1">
                <span>من نحن</span>
                <svg class="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div 
                [class.opacity-100]="activeDropdown() === 'about'"
                [class.invisible]="activeDropdown() !== 'about'"
                [class.translate-y-0]="activeDropdown() === 'about'"
                class="absolute right-0 top-full pt-2 w-56 opacity-0 invisible -translate-y-2 transition-all duration-200"
              >
                <div class="bg-[#00284d] text-white rounded-2xl shadow-2xl border border-white/15 p-2 overflow-hidden backdrop-blur-xl">
                  <a href="#about" (click)="closeDropdown()" class="dropdown-link">حول الهيئة</a>
                  <a href="#about" (click)="closeDropdown()" class="dropdown-link">الرؤية والرسالة والأهداف</a>
                  <a href="#about" (click)="closeDropdown()" class="dropdown-link">مجلس الإدارة والهيكل</a>
                  <a href="#about" (click)="closeDropdown()" class="dropdown-link">شركاؤنا في النجاح</a>
                </div>
              </div>
            </div>

            <!-- المشاريع (Dropdown) -->
            <div class="relative group" (mouseenter)="openDropdown('projects')" (mouseleave)="closeDropdown()">
              <button class="nav-item text-[#00284d] hover:text-[#f4921e] px-3.5 py-2 text-sm font-bold rounded-xl transition duration-150 flex items-center gap-1">
                <span>المشاريع</span>
                <svg class="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div 
                [class.opacity-100]="activeDropdown() === 'projects'"
                [class.invisible]="activeDropdown() !== 'projects'"
                [class.translate-y-0]="activeDropdown() === 'projects'"
                class="absolute right-0 top-full pt-2 w-56 opacity-0 invisible -translate-y-2 transition-all duration-200"
              >
                <div class="bg-[#00284d] text-white rounded-2xl shadow-2xl border border-white/15 p-2 overflow-hidden backdrop-blur-xl">
                  <a href="#projects" (click)="closeDropdown()" class="dropdown-link">في طور الإنجاز</a>
                  <a href="#projects" (click)="closeDropdown()" class="dropdown-link">المشاريع المنجزة</a>
                  <a href="#projects" (click)="closeDropdown()" class="dropdown-link">المشاريع المستقبلية</a>
                  <a href="#projects" (click)="closeDropdown()" class="dropdown-link">الحاجة إلى الإعمار</a>
                </div>
              </div>
            </div>

            <!-- أنشطة وأخبار (Dropdown) -->
            <div class="relative group" (mouseenter)="openDropdown('news')" (mouseleave)="closeDropdown()">
              <button class="nav-item text-[#00284d] hover:text-[#f4921e] px-3.5 py-2 text-sm font-bold rounded-xl transition duration-150 flex items-center gap-1">
                <span>أنشطة وأخبار</span>
                <svg class="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div 
                [class.opacity-100]="activeDropdown() === 'news'"
                [class.invisible]="activeDropdown() !== 'news'"
                [class.translate-y-0]="activeDropdown() === 'news'"
                class="absolute right-0 top-full pt-2 w-52 opacity-0 invisible -translate-y-2 transition-all duration-200"
              >
                <div class="bg-[#00284d] text-white rounded-2xl shadow-2xl border border-white/15 p-2 overflow-hidden backdrop-blur-xl">
                  <a href="#activities" (click)="closeDropdown()" class="dropdown-link">أنشطتنا الميدانية</a>
                  <a href="#activities" (click)="closeDropdown()" class="dropdown-link">أخبار الهيئة</a>
                  <a href="#activities" (click)="closeDropdown()" class="dropdown-link">حملاتنا (همم الإعمار)</a>
                  <a href="#activities" (click)="closeDropdown()" class="dropdown-link">بيانات صحفية</a>
                </div>
              </div>
            </div>

            <!-- المركز الإعلامي (Dropdown) -->
            <div class="relative group" (mouseenter)="openDropdown('media')" (mouseleave)="closeDropdown()">
              <button class="nav-item text-[#00284d] hover:text-[#f4921e] px-3.5 py-2 text-sm font-bold rounded-xl transition duration-150 flex items-center gap-1">
                <span>المركز الإعلامي</span>
                <svg class="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div 
                [class.opacity-100]="activeDropdown() === 'media'"
                [class.invisible]="activeDropdown() !== 'media'"
                [class.translate-y-0]="activeDropdown() === 'media'"
                class="absolute right-0 top-full pt-2 w-52 opacity-0 invisible -translate-y-2 transition-all duration-200"
              >
                <div class="bg-[#00284d] text-white rounded-2xl shadow-2xl border border-white/15 p-2 overflow-hidden backdrop-blur-xl">
                  <a href="#media" (click)="closeDropdown()" class="dropdown-link">مكتبة الفيديو</a>
                  <a href="#media" (click)="closeDropdown()" class="dropdown-link">مكتبة الصور</a>
                  <a href="#media" (click)="closeDropdown()" class="dropdown-link">تقارير ودراسات</a>
                  <a href="#media" (click)="closeDropdown()" class="dropdown-link">حوارات وتصريحات</a>
                </div>
              </div>
            </div>

            <!-- اتصل بنا -->
            <a href="#footer" class="nav-item text-[#00284d] hover:text-[#f4921e] px-3.5 py-2 text-sm font-bold rounded-xl transition duration-150">
              اتصل بنا
            </a>
          </nav>

          <!-- Right Action Buttons -->
          <div class="flex items-center gap-2.5 sm:gap-3">
            
            <!-- Language Selector Dropdown -->
            <div class="relative" (mouseleave)="isLangMenuOpen.set(false)">
              <button 
                (click)="toggleLangMenu()"
                class="h-10 px-3.5 rounded-xl flex items-center gap-2 text-slate-700 hover:text-[#00284d] bg-slate-50 hover:bg-slate-100 transition border border-slate-200 text-xs font-bold shadow-sm"
                title="تغيير اللغة / Change Language"
              >
                <svg class="w-4 h-4 text-[#004380]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
                <span>{{ currentLangLabel() }}</span>
                <svg class="w-3.5 h-3.5 text-slate-400 transition-transform duration-200" [class.rotate-180]="isLangMenuOpen()" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <!-- Language Dropdown Panel -->
              <div 
                *ngIf="isLangMenuOpen()"
                class="absolute left-0 top-full mt-1.5 w-40 bg-white rounded-2xl shadow-xl border border-slate-200 p-1.5 z-50 animate-fadeIn"
              >
                <button 
                  (click)="setLanguage('ar')"
                  class="w-full text-right px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-between"
                  [class.bg-blue-50]="currentLang() === 'ar'"
                  [class.text-[#004380]]="currentLang() === 'ar'"
                  [class.text-slate-700]="currentLang() !== 'ar'"
                  [class.hover:bg-slate-50]="currentLang() !== 'ar'"
                >
                  <span>العربية</span>
                  <span *ngIf="currentLang() === 'ar'" class="text-[#004380] font-black text-sm">✓</span>
                </button>

                <button 
                  (click)="setLanguage('en')"
                  class="w-full text-right px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-between"
                  [class.bg-blue-50]="currentLang() === 'en'"
                  [class.text-[#004380]]="currentLang() === 'en'"
                  [class.text-slate-700]="currentLang() !== 'en'"
                  [class.hover:bg-slate-50]="currentLang() !== 'en'"
                >
                  <span>English</span>
                  <span *ngIf="currentLang() === 'en'" class="text-[#004380] font-black text-sm">✓</span>
                </button>

                <button 
                  (click)="setLanguage('tr')"
                  class="w-full text-right px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-between"
                  [class.bg-blue-50]="currentLang() === 'tr'"
                  [class.text-[#004380]]="currentLang() === 'tr'"
                  [class.text-slate-700]="currentLang() !== 'tr'"
                  [class.hover:bg-slate-50]="currentLang() !== 'tr'"
                >
                  <span>Türkçe</span>
                  <span *ngIf="currentLang() === 'tr'" class="text-[#004380] font-black text-sm">✓</span>
                </button>
              </div>
            </div>

            <!-- Search Trigger -->
            <button 
              (click)="searchClicked.emit()" 
              class="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 hover:text-[#00284d] hover:bg-slate-100 transition border border-slate-200" 
              title="بحث سريع"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>

            <!-- Mobile Hamburger Toggle -->
            <button 
              (click)="toggleMobileMenu()" 
              class="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#00284d] hover:bg-slate-100 transition border border-slate-200" 
              aria-label="فتح القائمة"
            >
              <svg *ngIf="!isMobileMenuOpen()" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
              <svg *ngIf="isMobileMenuOpen()" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Drawer Navigation -->
      <div 
        *ngIf="isMobileMenuOpen()"
        class="xl:hidden bg-white border-b border-slate-200 px-5 py-6 shadow-2xl transition-all duration-300 animate-fadeIn"
      >
        <div class="flex flex-col gap-4 text-[#00284d]">
          <a href="#hero" (click)="closeMobileMenu()" class="font-black text-base">الرئيسية</a>
          
          <div class="border-t border-slate-100 pt-3">
            <span class="text-xs text-[#f4921e] font-extrabold tracking-wider">من نحن</span>
            <div class="grid grid-cols-2 gap-2 mt-2">
              <a href="#about" (click)="closeMobileMenu()" class="mobile-sublink">حول الهيئة</a>
              <a href="#about" (click)="closeMobileMenu()" class="mobile-sublink">الرؤية والأهداف</a>
              <a href="#about" (click)="closeMobileMenu()" class="mobile-sublink">الهيكل التنظيمي</a>
              <a href="#about" (click)="closeMobileMenu()" class="mobile-sublink">شركاؤنا</a>
            </div>
          </div>

          <div class="border-t border-slate-100 pt-3">
            <span class="text-xs text-[#f4921e] font-extrabold tracking-wider">المشاريع</span>
            <div class="grid grid-cols-2 gap-2 mt-2">
              <a href="#projects" (click)="closeMobileMenu()" class="mobile-sublink">في طور الإنجاز</a>
              <a href="#projects" (click)="closeMobileMenu()" class="mobile-sublink">المنجزة</a>
              <a href="#projects" (click)="closeMobileMenu()" class="mobile-sublink">المستقبلية</a>
              <a href="#projects" (click)="closeMobileMenu()" class="mobile-sublink">الحاجة للإعمار</a>
            </div>
          </div>

          <div class="border-t border-slate-100 pt-3">
            <span class="text-xs text-[#f4921e] font-extrabold tracking-wider">أنشطة وأخبار</span>
            <div class="grid grid-cols-2 gap-2 mt-2">
              <a href="#activities" (click)="closeMobileMenu()" class="mobile-sublink">أنشطة ميدانية</a>
              <a href="#activities" (click)="closeMobileMenu()" class="mobile-sublink">أخبار الهيئة</a>
              <a href="#activities" (click)="closeMobileMenu()" class="mobile-sublink">حملات الإعمار</a>
              <a href="#activities" (click)="closeMobileMenu()" class="mobile-sublink">بيانات صحفية</a>
            </div>
          </div>

          <div class="border-t border-slate-100 pt-3">
            <span class="text-xs text-[#f4921e] font-extrabold tracking-wider">المركز الإعلامي</span>
            <div class="grid grid-cols-2 gap-2 mt-2">
              <a href="#media" (click)="closeMobileMenu()" class="mobile-sublink">مكتبة الفيديو</a>
              <a href="#media" (click)="closeMobileMenu()" class="mobile-sublink">مكتبة الصور</a>
              <a href="#media" (click)="closeMobileMenu()" class="mobile-sublink">تقارير ودراسات</a>
              <a href="#media" (click)="closeMobileMenu()" class="mobile-sublink">تصريحات</a>
            </div>
          </div>

          <div class="border-t border-slate-100 pt-4 flex items-center justify-between">
            <a href="#footer" (click)="closeMobileMenu()" class="font-bold text-sm text-slate-700 hover:text-[#00284d]">اتصل بنا</a>
            <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button (click)="setLanguage('ar')" class="px-2.5 py-1 rounded-lg text-xs font-bold transition" [class.bg-white]="currentLang() === 'ar'" [class.text-[#004380]]="currentLang() === 'ar'" [class.shadow-sm]="currentLang() === 'ar'">عربي</button>
              <button (click)="setLanguage('en')" class="px-2.5 py-1 rounded-lg text-xs font-bold transition" [class.bg-white]="currentLang() === 'en'" [class.text-[#004380]]="currentLang() === 'en'" [class.shadow-sm]="currentLang() === 'en'">EN</button>
              <button (click)="setLanguage('tr')" class="px-2.5 py-1 rounded-lg text-xs font-bold transition" [class.bg-white]="currentLang() === 'tr'" [class.text-[#004380]]="currentLang() === 'tr'" [class.shadow-sm]="currentLang() === 'tr'">TR</button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Spacer when header is fixed to prevent layout shift / jumping -->
    <div *ngIf="isScrolled()" class="h-20" aria-hidden="true"></div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .navbar-fixed {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      z-index: 50 !important;
      box-shadow: 0 4px 20px -2px rgba(0, 40, 77, 0.12), 0 2px 6px -1px rgba(0, 40, 77, 0.08) !important;
      animation: navFixedSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes navFixedSlide {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }
    .nav-item {
      position: relative;
    }
    .nav-item::after {
      content: '';
      position: absolute;
      bottom: 2px;
      right: 50%;
      width: 0;
      height: 2.5px;
      background: #f4921e;
      border-radius: 9999px;
      transition: all 0.25s ease;
      transform: translateX(50%);
    }
    .nav-item:hover::after {
      width: 65%;
    }
    .dropdown-link {
      display: block;
      padding: 0.65rem 0.9rem;
      font-size: 0.8125rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.9);
      border-radius: 0.5rem;
      transition: all 0.15s ease;
    }
    .dropdown-link:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #f4921e;
    }
    .mobile-sublink {
      padding: 0.5rem 0.75rem;
      font-size: 0.75rem;
      border-radius: 0.5rem;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      font-weight: 600;
    }
    .mobile-sublink:hover {
      color: #f4921e;
      border-color: #f4921e;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.2s ease-out forwards;
    }
  `]
})
export class HeaderComponent implements OnInit {
  @Output() searchClicked = new EventEmitter<void>();
  @Output() donateClicked = new EventEmitter<void>();

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  activeDropdown = signal<string | null>(null);

  currentLang = signal<'ar' | 'en' | 'tr'>('ar');
  isLangMenuOpen = signal(false);

  currentLangLabel = computed(() => {
    switch (this.currentLang()) {
      case 'en': return 'EN';
      case 'tr': return 'TR';
      default: return 'العربية';
    }
  });

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (typeof window !== 'undefined') {
      const y = window.scrollY;
      if (!this.isScrolled() && y > 50) {
        this.isScrolled.set(true);
      } else if (this.isScrolled() && y < 20) {
        this.isScrolled.set(false);
      }
    }
  }

  openDropdown(name: string) {
    this.activeDropdown.set(name);
  }

  closeDropdown() {
    this.activeDropdown.set(null);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  toggleLangMenu() {
    this.isLangMenuOpen.update(v => !v);
  }

  setLanguage(lang: 'ar' | 'en' | 'tr') {
    this.currentLang.set(lang);
    this.isLangMenuOpen.set(false);
    if (lang !== 'ar') {
      alert(`النسخة باللغة (${lang.toUpperCase()}) قيد التجهيز وستتوفر قريباً.`);
    }
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'ar' ? 'en' : 'ar');
  }
}
