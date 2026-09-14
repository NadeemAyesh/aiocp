import { Component, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-direct-donation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Direct Contribution & Donation Gateway Section (Exact Layout Matching User Reference) -->
    <section id="donate-gateway" class="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#030e1d] via-[#06182e] to-[#030e1d] text-white relative overflow-hidden border-t border-b border-white/10">
      
      <!-- Ambient Lighting and Radial Accents -->
      <div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div class="absolute top-1/2 left-10 -translate-y-1/2 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- RIGHT COLUMN (Span 7 in RTL): Main Text and Trust Badges -->
          <div class="lg:col-span-7 space-y-5 text-right">
            
            <!-- Eyebrow Category -->
            <span class="inline-block text-[#f4921e] font-extrabold text-xs sm:text-sm lg:text-base tracking-wide">
              المساهمة الأهلية المباشرة
            </span>

            <!-- Main Title -->
            <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-[1.2] tracking-tight">
              ترغب في المساهمة وإعادة<br class="hidden sm:inline" />
              إعمار غزة؟
            </h2>

            <!-- Subtitle -->
            <h3 class="text-base sm:text-lg lg:text-xl font-bold text-white/95 leading-relaxed">
              هناك خيارات متعددة لإيصال تبرعك بأمان تام
            </h3>

            <!-- Description -->
            <p class="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl font-normal">
              يمكنك التبرع عبر منصتنا الرسمية المعتمدة والمشفرة للدفع الإلكتروني بالبطاقات البنكية أو التحويلات المصرفية المباشرة (IBAN) مع تزويدك بتقارير هندسية موثقة.
            </p>

            <!-- Trust Highlights Row -->
            <div class="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-200">
              
              <!-- Badge 1: 100% Secure E-Payment -->
              <div class="inline-flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-black shrink-0">
                  ✓
                </span>
                <span>دفع إلكتروني آمن 100%</span>
              </div>

              <!-- Badge 2: Certified International Bank Accounts -->
              <div class="inline-flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-black shrink-0">
                  ✓
                </span>
                <span>حسابات بنكية دولية معتمدة</span>
              </div>

              <!-- Badge 3: Periodic Photo Reports for Donors -->
              <div class="inline-flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-black shrink-0">
                  ✓
                </span>
                <span>تقارير مصورة دورية للمتبرعين</span>
              </div>

            </div>

          </div>

          <!-- LEFT COLUMN (Span 5 in RTL): Floating Gateway Card -->
          <div class="lg:col-span-5">
            <div class="bg-[#0b1f36]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-white/20">
              
              <!-- Card Header -->
              <div class="mb-6 space-y-1">
                <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">
                  بوابة التبرع المباشر
                </h3>
                <p class="text-xs text-slate-400 font-medium">
                  اختر الرابط المباشر للانتقال إلى المنصة الآمنة:
                </p>
              </div>

              <!-- Interactive Buttons -->
              <div class="space-y-3.5">
                
                <!-- Button 1: Official Donation Platform (Orange) -->
                <a 
                  href="https://donate.aiocp.org/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-full px-5 py-4 rounded-2xl bg-[#d97724] hover:bg-[#e6842c] active:bg-[#c4691c] text-white font-extrabold text-sm sm:text-base flex items-center justify-between shadow-[0_4px_20px_rgba(217,119,36,0.35)] hover:shadow-[0_6px_25px_rgba(217,119,36,0.5)] transition-all duration-200 hover:scale-[1.01] active:scale-98 group/btn"
                >
                  <div class="flex items-center gap-3">
                    <!-- Credit Card Icon -->
                    <svg class="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="5" width="20" height="14" rx="2" stroke-width="2"/>
                      <line x1="2" y1="10" x2="22" y2="10" stroke-width="2"/>
                    </svg>
                    <span>الانتقال إلى منصة التبرع الرسمية</span>
                  </div>
                  <span class="text-lg font-bold text-white/80 group-hover/btn:translate-x-[-3px] transition-transform">‹</span>
                </a>

              </div>

              <!-- Card Divider -->
              <div class="border-t border-white/10 my-5"></div>

              <!-- WhatsApp Support Direct Link -->
              <div class="text-center">
                <a 
                  href="https://wa.me/962793011191" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  dir="ltr"
                  class="inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition group/wa"
                >
                  <span>WhatsApp Support: +962 79 301 1191</span>
                  <!-- WhatsApp Official SVG Icon -->
                  <svg class="w-4 h-4 text-[#25D366] fill-current shrink-0 group-hover/wa:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.838.813 2.796.813 3.183 0 5.769-2.588 5.769-5.766 0-3.18-2.586-5.766-5.769-5.766zm3.385 8.163c-.145.407-.841.776-1.169.824-.328.047-.758.07-2.222-.536-1.871-.774-3.08-2.673-3.174-.798-.094-.125-.758-1.009-.758-1.925 0-.916.48-1.369.65-1.558.17-.188.373-.235.498-.235.124 0 .25.002.359.007.114.005.267-.043.418.32.156.374.533 1.3.58 1.395.047.094.078.204.016.328-.063.125-.094.203-.188.312-.094.11-.197.245-.281.33-.094.093-.193.195-.083.383.11.188.487.804 1.045 1.3.719.64 1.325.838 1.513.932.188.094.297.078.406-.047.11-.125.469-.547.594-.734.125-.188.25-.156.422-.094.172.062 1.094.516 1.281.609.188.094.312.141.359.219.047.078.047.453-.098.86z"/>
                  </svg>
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

