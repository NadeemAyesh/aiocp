import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-direct-donation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Standalone Direct Contribution Section (Visually Isolated Floating Card) -->
    <section id="donate-gateway" class="py-16 sm:py-20 lg:py-24 bg-slate-100/90 dark:bg-[#040d1a] relative overflow-hidden transition-colors duration-300 border-t border-slate-200/80 dark:border-white/5">
      
      <!-- Subtle Ambient Background Accents -->
      <div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-400/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Main Floating Premium CTA Card -->
        <div class="relative rounded-[2.5rem] bg-gradient-to-br from-[#002a52] via-[#00386b] to-[#044c8c] text-white p-7 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,40,77,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-amber-500/20 overflow-hidden">
          
          <!-- Top Accent Gradient Line -->
          <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-[#f4921e] to-sky-400"></div>

          <!-- Internal Soft Glow Spotlights -->
          <div class="absolute -top-24 -right-24 w-80 h-80 bg-[#f4921e]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            <!-- RIGHT COLUMN: Main Message & Trust Points -->
            <div class="lg:col-span-7 space-y-5 text-right">
              
              <!-- Eyebrow Badge -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold backdrop-blur-md">
                <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>المساهمة الأهلية المباشرة • بوابة التبرع</span>
              </div>

              <!-- Main Title -->
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                ترغب في المساهمة وإعادة<br class="hidden sm:inline" />
                <span class="bg-gradient-to-r from-amber-300 via-[#f4921e] to-amber-400 bg-clip-text text-transparent">إعمار غزة؟</span>
              </h2>

              <!-- Subtitle & Description -->
              <p class="text-slate-200 text-xs sm:text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                يمكنك التبرع عبر منصتنا الرسمية المعتمدة والمشفرة للدفع الإلكتروني بالبطاقات البنكية أو التحويلات المصرفية المباشرة (IBAN) مع تزويدك بتقارير هندسية وميدانية موثقة.
              </p>

              <!-- Trust Features Pills -->
              <div class="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-slate-100">
                
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <span class="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                  <span>دفع إلكتروني آمن 100%</span>
                </div>

                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <span class="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                  <span>حسابات بنكية دولية معتمدة</span>
                </div>

                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <span class="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black shrink-0">✓</span>
                  <span>تقارير مصورة دورية</span>
                </div>

              </div>

            </div>

            <!-- LEFT COLUMN: Action Glass Card -->
            <div class="lg:col-span-5">
              <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-4 text-right">
                
                <div class="space-y-1">
                  <h3 class="text-lg sm:text-xl font-black text-white tracking-tight">
                    بوابة التبرع المباشر
                  </h3>
                  <p class="text-xs text-slate-300 font-medium">
                    اختر الرابط المباشر للانتقال إلى المنصة الآمنة:
                  </p>
                </div>

                <!-- Action 1: Official Donation Platform (Primary Orange Button) -->
                <a 
                  href="https://donate.aiocp.org/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-full group relative inline-flex items-center justify-between px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#f4921e] to-[#d97706] hover:from-[#fa9d2b] hover:to-[#e6840d] text-white font-extrabold text-xs sm:text-sm shadow-[0_8px_25px_rgba(244,146,30,0.4)] hover:shadow-[0_12px_35px_rgba(244,146,30,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-white shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="5" width="20" height="14" rx="2" stroke-width="2"/>
                      <line x1="2" y1="10" x2="22" y2="10" stroke-width="2"/>
                    </svg>
                    <span>الانتقال إلى منصة التبرع الرسمية</span>
                  </div>
                  <span class="text-lg font-bold text-white/90 group-hover:translate-x-[-4px] transition-transform">‹</span>
                </a>

                <!-- Action 2: WhatsApp Support Link -->
                <a 
                  href="https://wa.me/962793011191?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%AD%D9%88%D9%84%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-200 font-bold text-xs transition-all duration-200 group/wa"
                >
                  <div class="flex items-center gap-2.5">
                    <svg class="w-4 h-4 text-[#25D366] fill-current shrink-0 group-hover/wa:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.838.813 2.796.813 3.183 0 5.769-2.588 5.769-5.766 0-3.18-2.586-5.766-5.766-5.766zm3.385 8.163c-.145.407-.841.776-1.169.824-.328.047-.758.07-2.222-.536-1.871-.774-3.08-2.673-3.174-.798-.094-.125-.758-1.009-.758-1.925 0-.916.48-1.369.65-1.558.17-.188.373-.235.498-.235.124 0 .25.002.359.007.114.005.267-.043.418.32.156.374.533 1.3.58 1.395.047.094.078.204.016.328-.063.125-.094.203-.188.312-.094.11-.197.245-.281.33-.094.093-.193.195-.083.383.11.188.487.804 1.045 1.3.719.64 1.325.838 1.513.932.188.094.297.078.406-.047.11-.125.469-.547.594-.734.125-.188.25-.156.422-.094.172.062 1.094.516 1.281.609.188.094.312.141.359.219.047.078.047.453-.098.86z"/>
                    </svg>
                    <span>الدعم المباشر عبر WhatsApp</span>
                  </div>
                  <span dir="ltr" class="text-[11px] font-mono text-emerald-300 font-normal">+962 79 301 1191</span>
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class DirectDonationComponent {
  @Output() openDonate = new EventEmitter<void>();
}


