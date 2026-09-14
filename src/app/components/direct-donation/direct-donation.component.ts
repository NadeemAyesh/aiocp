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
                  class="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-[#d97724] hover:bg-[#e6842c] active:bg-[#c4691c] text-white font-extrabold text-xs sm:text-sm flex items-center justify-between shadow-[0_4px_20px_rgba(217,119,36,0.35)] hover:shadow-[0_6px_25px_rgba(217,119,36,0.5)] transition-all duration-200 hover:scale-[1.01] active:scale-98 group/btn"
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

                <!-- Button 2: Bank Accounts Data (IBAN) (Dark Navy Slate) -->
                <button 
                  type="button"
                  (click)="openIbanModal()"
                  class="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-[#132c4a] hover:bg-[#18365a] active:bg-[#0f243d] border border-white/10 hover:border-white/25 text-white font-extrabold text-xs sm:text-sm flex items-center justify-between transition-all duration-200 hover:scale-[1.01] active:scale-98 group/btn cursor-pointer"
                >
                  <div class="flex items-center gap-3">
                    <!-- Bank / Columns Icon -->
                    <svg class="w-5 h-5 text-[#38bdf8] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    <span>بيانات الحسابات البنكية (IBAN)</span>
                  </div>
                  <span class="text-lg font-bold text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-[-3px] transition-all">‹</span>
                </button>

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

    <!-- Interactive IBAN & Bank Accounts Modal -->
    <div 
      *ngIf="showIbanModal()" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      (click)="closeIbanModal()"
    >
      <div 
        class="bg-[#00172e] rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-white/20 text-white relative"
        (click)="$event.stopPropagation()"
      >
        <!-- Modal Header -->
        <div class="flex items-start justify-between border-b border-white/10 pb-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-[#f4921e]/15 text-[#f4921e] flex items-center justify-center shrink-0 border border-[#f4921e]/30">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg sm:text-xl font-black text-white">بيانات الحسابات البنكية الرسمية</h3>
              <p class="text-xs text-slate-400">الهيئة العربية الدولية للإعمار في فلسطين</p>
            </div>
          </div>
          <button 
            type="button"
            (click)="closeIbanModal()" 
            class="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition text-lg"
          >
            ✕
          </button>
        </div>

        <!-- Bank Details Card -->
        <div class="space-y-4">
          
          <!-- Bank Name & Branch -->
          <div class="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400">اسم المصرف:</span>
              <span class="font-bold text-[#f4921e]">البنك الإسلامي الأردني (Jordan Islamic Bank)</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400">الفرع:</span>
              <span class="font-bold text-slate-200">الشميساني - عمان (Shmeisani)</span>
            </div>
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-400">اسم الحساب:</span>
              <span class="font-bold text-slate-200">الهيئة العربية الدولية للإعمار في فلسطين</span>
            </div>
          </div>

          <!-- IBAN Row with Copy -->
          <div class="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-1.5">
            <div class="flex items-center justify-between text-xs text-slate-400">
              <span>رقم الآيبان الدولي (IBAN):</span>
              <span class="text-[11px] text-emerald-400 font-mono">حساب معتمد للتحويلات الدولية</span>
            </div>
            <div class="flex items-center justify-between gap-3 pt-1">
              <span class="font-mono font-bold text-sm sm:text-base text-white tracking-wider select-all" dir="ltr">
                {{ ibanNumber }}
              </span>
              <button 
                type="button"
                (click)="copyToClipboard(ibanNumber, 'iban')"
                class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 cursor-pointer"
                [class.bg-emerald-500]="copiedTarget() === 'iban'"
                [class.text-white]="copiedTarget() === 'iban'"
                [class.bg-[#f4921e]]="copiedTarget() !== 'iban'"
                [class.text-[#00172e]]="copiedTarget() !== 'iban'"
              >
                <span>{{ copiedTarget() === 'iban' ? '✓ تم النسخ!' : 'نسخ الآيبان' }}</span>
              </button>
            </div>
          </div>

          <!-- SWIFT & CliQ Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            <!-- SWIFT -->
            <div class="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-1">
              <span class="block text-xs text-slate-400">رمز السويفت (SWIFT Code):</span>
              <div class="flex items-center justify-between gap-2 pt-1">
                <span class="font-mono font-black text-sm text-white" dir="ltr">{{ swiftCode }}</span>
                <button 
                  type="button"
                  (click)="copyToClipboard(swiftCode, 'swift')"
                  class="px-2.5 py-1 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                >
                  {{ copiedTarget() === 'swift' ? '✓' : 'نسخ' }}
                </button>
              </div>
            </div>

            <!-- CliQ (Jordan) -->
            <div class="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-1">
              <span class="block text-xs text-slate-400">خدمة التحويل الفوري (CliQ):</span>
              <div class="flex items-center justify-between gap-2 pt-1">
                <span class="font-mono font-black text-sm text-[#38bdf8]" dir="ltr">JEAAID</span>
                <button 
                  type="button"
                  (click)="copyToClipboard('JEAAID', 'cliq')"
                  class="px-2.5 py-1 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                >
                  {{ copiedTarget() === 'cliq' ? '✓' : 'نسخ' }}
                </button>
              </div>
            </div>

          </div>

          <!-- Notice & Instructions -->
          <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
            <span class="text-amber-400 text-sm mt-0.5">ℹ</span>
            <span>
              يرجى إرسال إشعار التحويل البنكي عبر رقم الواتساب المعتمد (<span dir="ltr" class="font-mono font-bold">+962 79 301 1191</span>) لإصدار السند المالي الرسمي وتزويدكم بالتقرير الهندسي التنفيذي.
            </span>
          </div>

        </div>

        <!-- Action Footer -->
        <div class="pt-2 flex items-center gap-3">
          <a 
            href="https://wa.me/962793011191?text=السلام%20عليكم%2C%20أرغب%20في%20تأكيد%20حوالة%20بنكية%20لصالح%20إعمار%20غزة" 
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
          >
            <span>إرسال إشعار التحويل عبر واتساب</span>
            <span class="text-sm">←</span>
          </a>
          <button 
            type="button"
            (click)="closeIbanModal()" 
            class="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm transition cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.2s ease-out forwards;
    }
  `]
})
export class DirectDonationComponent {
  @Output() openDonate = new EventEmitter<void>();

  showIbanModal = signal<boolean>(false);
  copiedTarget = signal<string | null>(null);

  readonly ibanNumber = 'JO86JIBA0020000025304512400006';
  readonly swiftCode = 'JIBAJOAM';

  openIbanModal() {
    this.showIbanModal.set(true);
  }

  closeIbanModal() {
    this.showIbanModal.set(false);
    this.copiedTarget.set(null);
  }

  copyToClipboard(text: string, target: string) {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    this.copiedTarget.set(target);
    setTimeout(() => {
      if (this.copiedTarget() === target) {
        this.copiedTarget.set(null);
      }
    }, 2500);
  }
}
