import { Component, OnInit, OnDestroy, inject, signal, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';

export interface KonstrukSlide {
  id: string;
  badge: string;
  tag: string;
  shortTopic: string;
  title: string;
  titleBreak?: string;
  excerpt: string;
  image: string;
  actionText: string;
  actionLink: string;
  secondaryActionText?: string;
  secondaryActionLink?: string;
  statNumber: string;
  statLabel: string;
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Konstruk Hero Section with Skyline (Mosque & Church), Real AIOCP Photos & Engineering Grid -->
    <section
      id="hero"
      class="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e8eef5] dark:from-[#030d1a] dark:via-[#051325] dark:to-[#020b16] transition-colors duration-500 select-none konstruk-hero-wrapper border-b border-slate-200/80 dark:border-white/10 h-[calc(100vh-80px)] lg:h-[calc(100vh-120px)] h-[calc(100dvh-80px)] lg:h-[calc(100dvh-120px)] min-h-[580px] flex flex-col justify-center"
      (mouseenter)="pauseAutoPlay()"
      (mouseleave)="resumeAutoPlay()"
      (touchstart)="onTouchStart($event)"
      (touchend)="onTouchEnd($event)"
    >
      <!-- 1. Architectural Subtle Blueprint Grid (Clean, Crisp, Zero Blur) -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-60 dark:opacity-30">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#0043800a_1px,transparent_1px),linear-gradient(to_bottom,#0043800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#38bdf812_1px,transparent_1px),linear-gradient(to_bottom,#38bdf812_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      <!-- 2. Architectural Skyline Layer (Palestinian & Jerusalem Cityscape: Mosque Minaret & Church Dome Highlighted) -->
      <div class="absolute bottom-0 inset-x-0 w-full pointer-events-none z-10 overflow-hidden select-none">
        <div class="relative w-full h-[150px] sm:h-[190px] md:h-[230px] lg:h-[270px]">

          <svg
            class="w-full h-full transition-opacity duration-700 opacity-50 dark:opacity-65"
            viewBox="0 0 2668.96 662.24"
            preserveAspectRatio="xMidYBottom slice"
          >
            <defs>
              <!-- Light Mode Skyline Gradient -->
              <linearGradient id="skylineGradLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#004380" stop-opacity="0.12" />
                <stop offset="50%" stop-color="#00386b" stop-opacity="0.22" />
                <stop offset="100%" stop-color="#00284d" stop-opacity="0.32" />
              </linearGradient>

              <!-- Dark Mode Skyline Gradient -->
              <linearGradient id="skylineGradDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.20" />
                <stop offset="50%" stop-color="#0284c7" stop-opacity="0.30" />
                <stop offset="100%" stop-color="#030d1a" stop-opacity="0.55" />
              </linearGradient>

              <!-- Golden Warm Radiant Glow -->
              <filter id="goldenGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Complete Dual Skyline Vector Silhouette (Proportional & Crisp) -->
            <g
              class="fill-[url(#skylineGradLight)] dark:fill-[url(#skylineGradDark)] stroke-[#004380]/25 dark:stroke-[#38bdf8]/35 stroke-[1.2]"
              fill-rule="evenodd"
            >
              <!-- Copy 1 (Left Half: Church Dome & Cross at x=186, Mosque Minaret & Crescent at x=1240) -->
              <path d="M1239.84 0L1236.41 2L1233.62 5L1231.84 7.46L1230.65 10L1229.76 13L1229.37 16L1229.73 20L1231.91 26L1235.84 30.51L1238.84 32.55L1239.64 34L1239.64 42L1239.06 46L1235.83 51L1235.13 53L1232.44 58L1231.43 59L1231.43 60L1227.06 68L1218.44 83L1218.44 84L1210.61 98L1209.79 99L1209.08 101L1205.5 107L1202.01 114L1201.19 115L1199.8 118.74L1199.8 190L1198.84 191.73L1197.84 191.76L1188.84 191.78L1188.19 193L1188.19 266L1186.84 267.53L1173.84 267.53L1173.21 268L1172.65 269L1172.65 434L1171.84 434.73L1170.84 434.73L1167.84 432.36L1164.84 429.17L1162.84 428.07L1162.05 427L1153.41 420L1152.73 419L1149.84 417.14L1148.84 417.14L1134.84 432.25L1133.84 432.93L1129.54 438L1125.84 441.69L1124.07 444L1119.11 449L1118.28 451L1118.28 464L1117.58 465L1116.84 465.42L1073.84 465.42L1072.64 466L1072.61 572L1071.69 573L1069.84 573.47L1044.84 573.47L1043.71 573L1042.85 572L1042.85 355L1040.84 354.64L859.84 354.64L858.84 355L858.78 357L858.75 582L857.84 583.04L856.84 583.07L851.84 583.1L760.84 583.11L759.84 583.59L759.38 585L759.38 610L758.84 611.1L756.84 611.65L716.84 611.65L715.53 611L715.06 610L715.05 559.8L713.84 559.36L707.84 559.32L601.84 559.3L600.83 558L600.83 461L599.84 459.95L564.84 459.95L563.84 459.52L563.03 459L563.02 446L561.84 445.14L338.84 445.15L338.03 446L338.01 447L338 490L337.34 491L334.84 491.61L311.84 491.61L311.23 492L311.22 660L309.84 661.27L283.84 661.27L282.84 660.82L282.19 660L282.19 573L281.16 571L279.84 570.43L276.84 567.84L271.84 564.3L270.57 563L255.47 552L254.52 551L253.76 549L253.76 387L253.31 386L252.84 383.55L250.53 379L249 377L244.84 372.8L238.84 369.89L229.84 368.85L229.34 368L229.34 367L230.03 364L230.03 359L229.09 353L226.63 347L220.84 337.95L214.07 331L209.84 327.93L204.84 325L199.84 323.06L195.84 322.39L195.23 322L194.56 320L194.57 310L195.84 309.17L207.84 309.16L208.59 308L208.59 303L207.84 301.61L195.84 301.6L194.84 300.47L194.36 299L194.35 289L192.84 288.62L187.84 288.62L186.65 289L186.65 300L185.9 301L184.84 301.53L173.84 301.52L172.52 302L172.5 304L172.67 308L172.67 309.03L184.84 309.03L186.4 310L186.46 311L186.49 321L184.84 322.17L179.64 323L173.84 324.98L169.58 327L166.84 328.94L165.84 328.94L161.84 332.51L157.84 336.69L156.09 339L151.86 347L150.84 351.03L149.92 359L150.93 367L150.93 368.26L149.84 369.04L141.84 369.71L135.84 372.64L133.84 374.12L129.37 379L129.37 380L127.84 382.24L126.3 387L126.3 635L125.89 636L124.84 636.9L93.84 636.9L92.7 638L92.69 651L91.84 651.7L53.84 651.7L52.61 650L52.59 613L50.84 612.4L0.84 612.4L0 613L0 662.24L3.84 662.2L1334.48 662.19L1334.48 261L1333.84 259.24L1332.84 259.21L1312.33 259.2L1311.38 258L1311.38 179L1310.84 178.52L1309.84 178.49L1298.84 178.48L1298.27 177L1298.27 122L1297.86 117L1292.84 109.7L1291.3 108L1290.92 107L1285.36 100L1285.36 99L1284.06 98L1280.92 93L1274.03 84L1267.84 74.82L1261.25 66L1260.84 64.97L1259.8 64L1256.45 59L1255.46 58L1252.84 53.78L1251.84 52.95L1250.75 51L1249.42 50L1249.42 49L1248.78 47L1248.78 37L1249.21 35L1249.84 34.52L1253.54 34L1257.66 32L1260.84 29.59L1263.54 26L1264.89 23L1265.84 20.29L1265.84 17.48L1262.84 22.38L1258.84 25.28L1255.84 26.58L1250.84 27.04L1248.84 27.04L1244.84 25.75L1242.84 24.51L1239.86 22L1238.34 20L1237.44 18L1236.11 13L1236.11 10L1237.54 5L1238.65 3L1240.99 0Z" />

              <!-- Copy 2 (Right Half: Church Dome & Cross at x=1521, Mosque Minaret & Crescent at x=2574) -->
              <path transform="translate(1334.48 0)" d="M1239.84 0L1236.41 2L1233.62 5L1231.84 7.46L1230.65 10L1229.76 13L1229.37 16L1229.73 20L1231.91 26L1235.84 30.51L1238.84 32.55L1239.64 34L1239.64 42L1239.06 46L1235.83 51L1235.13 53L1232.44 58L1231.43 59L1231.43 60L1227.06 68L1218.44 83L1218.44 84L1210.61 98L1209.79 99L1209.08 101L1205.5 107L1202.01 114L1201.19 115L1199.8 118.74L1199.8 190L1198.84 191.73L1197.84 191.76L1188.84 191.78L1188.19 193L1188.19 266L1186.84 267.53L1173.84 267.53L1173.21 268L1172.65 269L1172.65 434L1171.84 434.73L1170.84 434.73L1167.84 432.36L1164.84 429.17L1162.84 428.07L1162.05 427L1153.41 420L1152.73 419L1149.84 417.14L1148.84 417.14L1134.84 432.25L1133.84 432.93L1129.54 438L1125.84 441.69L1124.07 444L1119.11 449L1118.28 451L1118.28 464L1117.58 465L1116.84 465.42L1073.84 465.42L1072.64 466L1072.61 572L1071.69 573L1069.84 573.47L1044.84 573.47L1043.71 573L1042.85 572L1042.85 355L1040.84 354.64L859.84 354.64L858.84 355L858.78 357L858.75 582L857.84 583.04L856.84 583.07L851.84 583.1L760.84 583.11L759.84 583.59L759.38 585L759.38 610L758.84 611.1L756.84 611.65L716.84 611.65L715.53 611L715.06 610L715.05 559.8L713.84 559.36L707.84 559.32L601.84 559.3L600.83 558L600.83 461L599.84 459.95L564.84 459.95L563.84 459.52L563.03 459L563.02 446L561.84 445.14L338.84 445.15L338.03 446L338.01 447L338 490L337.34 491L334.84 491.61L311.84 491.61L311.23 492L311.22 660L309.84 661.27L283.84 661.27L282.84 660.82L282.19 660L282.19 573L281.16 571L279.84 570.43L276.84 567.84L271.84 564.3L270.57 563L255.47 552L254.52 551L253.76 549L253.76 387L253.31 386L252.84 383.55L250.53 379L249 377L244.84 372.8L238.84 369.89L229.84 368.85L229.34 368L229.34 367L230.03 364L230.03 359L229.09 353L226.63 347L220.84 337.95L214.07 331L209.84 327.93L204.84 325L199.84 323.06L195.84 322.39L195.23 322L194.56 320L194.57 310L195.84 309.17L207.84 309.16L208.59 308L208.59 303L207.84 301.61L195.84 301.6L194.84 300.47L194.36 299L194.35 289L192.84 288.62L187.84 288.62L186.65 289L186.65 300L185.9 301L184.84 301.53L173.84 301.52L172.52 302L172.5 304L172.67 308L172.67 309.03L184.84 309.03L186.4 310L186.46 311L186.49 321L184.84 322.17L179.64 323L173.84 324.98L169.58 327L166.84 328.94L165.84 328.94L161.84 332.51L157.84 336.69L156.09 339L151.86 347L150.84 351.03L149.92 359L150.93 367L150.93 368.26L149.84 369.04L141.84 369.71L135.84 372.64L133.84 374.12L129.37 379L129.37 380L127.84 382.24L126.3 387L126.3 635L125.89 636L124.84 636.9L93.84 636.9L92.7 638L92.69 651L91.84 651.7L53.84 651.7L52.61 650L52.59 613L50.84 612.4L0.84 612.4L0 613L0 662.24L3.84 662.2L1334.48 662.19L1334.48 261L1333.84 259.24L1332.84 259.21L1312.33 259.2L1311.38 258L1311.38 179L1310.84 178.52L1309.84 178.49L1298.84 178.48L1298.27 177L1298.27 122L1297.86 117L1292.84 109.7L1291.3 108L1290.92 107L1285.36 100L1285.36 99L1284.06 98L1280.92 93L1274.03 84L1267.84 74.82L1261.25 66L1260.84 64.97L1259.8 64L1256.45 59L1255.46 58L1252.84 53.78L1251.84 52.95L1250.75 51L1249.42 50L1249.42 49L1248.78 47L1248.78 37L1249.21 35L1249.84 34.52L1253.54 34L1257.66 32L1260.84 29.59L1263.54 26L1264.89 23L1265.84 20.29L1265.84 17.48L1262.84 22.38L1258.84 25.28L1255.84 26.58L1250.84 27.04L1248.84 27.04L1244.84 25.75L1242.84 24.51L1239.86 22L1238.34 20L1237.44 18L1236.11 13L1236.11 10L1237.54 5L1238.65 3L1240.99 0Z" />
            </g>

            <!-- Mosque Minaret & Crescent Highlights (Golden Warm Aura & Star) -->
            <!-- Mosque 1 (x=1240, y=10) -->
            <g transform="translate(1240, 10)">
              <circle r="18" fill="#ffb703" fill-opacity="0.2" />
              <circle r="8" fill="#ffb703" filter="url(#goldenGlow)" />
              <circle r="3" fill="#ffffff" />
            </g>

            <!-- Mosque 2 (x=2574, y=10) -->
            <g transform="translate(2574, 10)">
              <circle r="18" fill="#ffb703" fill-opacity="0.2" />
              <circle r="8" fill="#ffb703" filter="url(#goldenGlow)" />
              <circle r="3" fill="#ffffff" />
            </g>

            <!-- Church Dome & Cross Highlights (Golden Warm Aura & Star) -->
            <!-- Church 1 (x=186.65, y=298) -->
            <g transform="translate(186.65, 298)">
              <circle r="18" fill="#ffb703" fill-opacity="0.2" />
              <circle r="8" fill="#ffb703" filter="url(#goldenGlow)" />
              <circle r="3" fill="#ffffff" />
            </g>

            <!-- Church 2 (x=1521, y=298) -->
            <g transform="translate(1521, 298)">
              <circle r="18" fill="#ffb703" fill-opacity="0.2" />
              <circle r="8" fill="#ffb703" filter="url(#goldenGlow)" />
              <circle r="3" fill="#ffffff" />
            </g>
          </svg>

          <!-- Soft Bottom Fog Gradient for Clean Foundation Blending -->
          <div class="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#f4f7fa] dark:from-[#030d1a] to-transparent pointer-events-none"></div>

        </div>
      </div>

      <!-- 3. Floating Architectural Triangles (Konstruk Signature Accent - Discretely Positioned) -->
      <div class="absolute z-20 pointer-events-none hidden md:block konstruk-float-top right-[8%] top-[12%]">
        <img src="images/konstruk/shape_3.png" alt="شكل هندسي" class="w-4 h-4 opacity-75" />
      </div>
      <div class="absolute z-20 pointer-events-none hidden md:block konstruk-float-bottom left-[6%] bottom-[15%]">
        <img src="images/konstruk/shape_3.png" alt="شكل هندسي" class="w-4 h-4 opacity-75" />
      </div>

      <!-- 6. Main Slider Viewport (Fit Screen Height & Vertically Centered) -->
      <div class="relative w-full h-full flex-1 flex items-center justify-center py-4 sm:py-6 lg:py-8 z-20 min-h-[520px]">

        <!-- Slides Loop -->
        <div
          *ngFor="let slide of konstrukSlides; let i = index"
          class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none flex items-center justify-center"
          [class.opacity-100]="currentSlide() === i"
          [class.opacity-0]="currentSlide() !== i"
          [class.z-20]="currentSlide() === i"
          [class.z-10]="currentSlide() !== i"
          [class.pointer-events-auto]="currentSlide() === i"
        >
          <!-- Max-width Content Container (Split Grid: ZERO Overlap Guaranteed) -->
          <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-2 sm:py-4">

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              <!-- Right Column (in RTL): Pure Arabic Editorial Typography (Takes 7 cols on desktop) -->
              <div
                dir="rtl"
                class="lg:col-span-7 text-right space-y-4 sm:space-y-6 order-2 lg:order-1"
              >
                <!-- Eyebrow: 4 Golden Dots + Badge -->
                <div
                  class="flex items-center gap-2.5 konstruk-anim-eyebrow justify-start"
                  [ngClass]="{'animate-eyebrow': currentSlide() === i}"
                >
                  <img
                    src="images/konstruk/shape_1.png"
                    alt="نقاط ذهبية"
                    class="w-3.5 h-3.5 object-contain shrink-0"
                  />
                  <span class="text-xs sm:text-[13px] font-bold text-[#ffb703] dark:text-[#ffb703] tracking-wide">
                    {{ slide.badge }}
                  </span>
                </div>

                <!-- Editorial Headline in Bold Arabic Typography with Luxury Accent Line -->
                <div
                  class="konstruk-anim-title relative border-r-4 border-[#ffb703] pr-4 sm:pr-5"
                  [ngClass]="{'animate-title': currentSlide() === i}"
                >
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-black text-[#010d14] dark:text-white leading-[1.25] tracking-tight drop-shadow-xs">
                    {{ slide.title }}
                    <span *ngIf="slide.titleBreak" class="block text-[#004380] dark:text-[#38bdf8] pt-1 sm:pt-1.5">
                      {{ slide.titleBreak }}
                    </span>
                  </h1>
                </div>

                <!-- Paragraph Excerpt -->
                <div 
                  class="konstruk-anim-excerpt max-w-2xl"
                  [ngClass]="{'animate-excerpt': currentSlide() === i}"
                >
                  <p class="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200 leading-[1.85] font-medium">
                    {{ slide.excerpt }}
                  </p>
                </div>

                <!-- Action CTA Buttons (Primary Action + Secondary Action) -->
                <div 
                  class="pt-2 sm:pt-4 konstruk-anim-button flex flex-wrap items-center justify-start gap-3 sm:gap-4"
                  [ngClass]="{'animate-button': currentSlide() === i}"
                >
                  <!-- Primary Action -->
                  <a 
                    [href]="slide.actionLink"
                    class="group inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 bg-[#ffb703] hover:bg-[#010d14] text-[#010d14] hover:text-white dark:hover:bg-white dark:hover:text-[#010d14] font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer rounded-sm"
                  >
                    <span>{{ slide.actionText }}</span>
                    <svg class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                  </a>

                  <!-- Secondary Action (Respectful Outline/Glass Button) -->
                  <a 
                    *ngIf="slide.secondaryActionText"
                    [href]="slide.secondaryActionLink"
                    (click)="onSecondaryAction(slide.secondaryActionLink, $event)"
                    class="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/90 dark:bg-[#06182c]/90 hover:bg-slate-100 dark:hover:bg-white/15 text-[#00284d] dark:text-white border border-slate-300/80 dark:border-white/20 font-bold text-sm sm:text-base rounded-sm transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer backdrop-blur-xs"
                  >
                    <span>{{ slide.secondaryActionText }}</span>
                    <svg class="w-4 h-4 text-[#004380] dark:text-[#ffb703]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>

                  <!-- Heritage Landmark Watermark Pill -->
                  <div class="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/85 dark:bg-[#010d14]/85 border border-slate-200/80 dark:border-white/10 shadow-xs text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span class="w-2 h-2 rounded-full bg-[#ffb703] animate-pulse"></span>
                    <span>أفق القدس وفلسطين • المسجد والكنيسة</span>
                  </div>
                </div>

              </div>

              <!-- Left Column (in RTL): REAL AIOCP PHOTO with Konstruk Architectural Chamfer Framing (Takes 5 cols) -->
              <div
                class="lg:col-span-5 order-1 lg:order-2 flex justify-center pt-4 sm:pt-5"
              >
                <!-- Framed Card with Konstruk Angular Polygon & Yellow Accent -->
                <div class="relative w-full max-w-[480px] lg:max-w-none group">

                  <!-- Background Decorative Offset Polygon in Konstruk Yellow -->
                  <div class="absolute -inset-2 sm:-inset-3 bg-[#ffb703]/25 dark:bg-[#ffb703]/20 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500"></div>

                  <!-- Yellow Chamfer Corner Accent -->
                  <div class="absolute -top-2.5 -left-2.5 sm:-top-3 sm:-left-3 z-30 w-8 sm:w-10 h-8 sm:h-10 bg-[#ffb703] flex items-center justify-center shadow-md rounded-tl-lg">
                    <svg class="w-4 h-4 text-[#010d14]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z"/>
                    </svg>
                  </div>

                  <!-- Floating Verified Stat Badge (Placed OUTSIDE overflow-hidden container to prevent clipping) -->
                  <div 
                    dir="rtl"
                    class="absolute -top-4 -right-2 sm:-top-5 sm:-right-3 z-30 bg-white/95 dark:bg-[#06182c]/95 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200/90 dark:border-white/15 shadow-xl flex items-center gap-2.5 sm:gap-3 transition-transform duration-300 group-hover:scale-105"
                  >
                    <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#ffb703]/20 flex items-center justify-center text-[#d97706] dark:text-[#ffb703] shrink-0 font-bold">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div class="text-right">
                      <span class="block text-sm sm:text-base font-black text-[#00284d] dark:text-white font-mono leading-tight">
                        {{ slide.statNumber }}
                      </span>
                      <span class="block text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-300 mt-0.5">
                        {{ slide.statLabel }}
                      </span>
                    </div>
                  </div>

                  <!-- Image Canvas Container (Proportional Height to Fit Screen Viewport - overflow-hidden is ONLY for the image) -->
                  <div class="relative z-20 h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] max-h-[50vh] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 dark:border-white/10 bg-slate-100 dark:bg-slate-800">

                    <!-- Real AIOCP Photo with Ken Burns Zoom -->
                    <img
                      [src]="slide.image"
                      [alt]="slide.title"
                      class="w-full h-full object-cover transition-transform duration-[6000ms] ease-out"
                      [ngClass]="{
                        'scale-105': currentSlide() === i,
                        'scale-100': currentSlide() !== i
                      }"
                    />

                    <!-- Soft Gradient Vignette at Bottom -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                    <!-- Authentic AIOCP Badge on the Photo -->
                    <div dir="rtl" class="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 flex items-center gap-2 bg-[#010d14]/85 backdrop-blur-md px-3.5 py-1.5 rounded border border-white/20 shadow-lg text-xs text-white">
                      <span class="w-2 h-2 rounded-full bg-[#ffb703] animate-pulse"></span>
                      <span class="font-bold">{{ slide.tag }}</span>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        <!-- Left Edge Navigation Arrow -->
        <button
          type="button"
          (click)="prevSlide()"
          class="absolute top-1/2 -translate-y-1/2 left-3 sm:left-6 z-40 w-10 h-10 rounded-full bg-white/85 dark:bg-[#010d14]/85 hover:bg-[#ffb703] dark:hover:bg-[#ffb703] text-slate-700 dark:text-white dark:hover:text-[#010d14] flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer"
          title="الشريحة السابقة"
          aria-label="الشريحة السابقة"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Right Edge Navigation Arrow -->
        <button
          type="button"
          (click)="nextSlide()"
          class="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 z-40 w-10 h-10 rounded-full bg-white/85 dark:bg-[#010d14]/85 hover:bg-[#ffb703] dark:hover:bg-[#ffb703] text-slate-700 dark:text-white dark:hover:text-[#010d14] flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer"
          title="الشريحة التالية"
          aria-label="الشريحة التالية"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Bottom Topic Navigation Strip with Synchronized Progress Bar (Prestigious Enterprise Navigation) -->
        <div class="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl px-4 hidden md:block">
          <div class="flex items-center gap-2.5 bg-white/95 dark:bg-[#07172b]/95 backdrop-blur-md p-1.5 rounded-xl border border-slate-200/90 dark:border-white/10 shadow-lg">
            
            <!-- 4 Topic Tabs (Grid cols 4) -->
            <div class="grid grid-cols-4 gap-2 flex-1">
              <button
                *ngFor="let s of konstrukSlides; let idx = index"
                type="button"
                (click)="goToSlide(idx)"
                class="text-right px-3 py-1.5 rounded-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
                [class.bg-[#00284d]/5]="currentSlide() === idx"
                [class.dark:bg-white/5]="currentSlide() === idx"
              >
                <div class="flex items-center justify-between gap-1 mb-1">
                  <span class="font-mono font-bold text-[10px]" [class.text-[#ffb703]]="currentSlide() === idx" [class.text-slate-400]="currentSlide() !== idx">
                    0{{ idx + 1 }}
                  </span>
                  <span class="font-bold truncate text-[11px]" [class.text-[#00284d]]="currentSlide() === idx" [class.dark:text-white]="currentSlide() === idx" [class.text-slate-500]="currentSlide() !== idx" [class.dark:text-slate-400]="currentSlide() !== idx">
                    {{ s.shortTopic }}
                  </span>
                </div>
                
                <!-- Progress Bar Track -->
                <div class="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-[#ffb703] transition-all"
                    [ngClass]="{
                      'progress-bar-active': currentSlide() === idx && isAutoPlayRunning,
                      'w-full': currentSlide() === idx && !isAutoPlayRunning,
                      'w-0': currentSlide() !== idx
                    }"
                    [attr.data-key]="slideKey()"
                  ></div>
                </div>
              </button>
            </div>

            <!-- Autoplay Pause / Play Toggle Button -->
            <button
              type="button"
              (click)="toggleAutoPlay()"
              class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-[#ffb703] text-slate-600 dark:text-slate-300 hover:text-[#010d14] flex items-center justify-center transition-all shadow-xs cursor-pointer shrink-0 border border-slate-200/60 dark:border-white/10"
              [title]="isAutoPlayRunning ? 'إيقاف التشغيل التلقائي مؤقتاً' : 'استئناف العرض التلقائي'"
            >
              <svg *ngIf="isAutoPlayRunning" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
              <svg *ngIf="!isAutoPlayRunning" class="w-3.5 h-3.5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>

          </div>
        </div>

        <!-- Mobile Compact Dots (Under md) -->
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 md:hidden">
          <button
            *ngFor="let s of konstrukSlides; let idx = index"
            type="button"
            (click)="goToSlide(idx)"
            class="h-2 transition-all duration-300 rounded-full cursor-pointer"
            [ngClass]="{
              'w-8 bg-[#ffb703]': currentSlide() === idx,
              'w-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400': currentSlide() !== idx
            }"
            [attr.aria-label]="'الانتقال إلى الشريحة ' + (idx + 1)"
          ></button>
        </div>

      </div>

      <!-- 7. Quick Strategic Metrics / Impact Strip (Directly Integrated Below Hero) -->


    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    /* Synchronized Slide Progress Bar */
    @keyframes slideProgress {
      0% { width: 0%; }
      100% { width: 100%; }
    }
    .progress-bar-active {
      animation: slideProgress 6s linear infinite;
    }

    /* Floating Keyframe Animations */
    @keyframes floatUpDown {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-16px) rotate(12deg);
      }
    }

    @keyframes floatDownUp {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(14px) rotate(-10deg);
      }
    }

    .konstruk-float-top {
      animation: floatUpDown 4.5s ease-in-out infinite;
    }

    .konstruk-float-bottom {
      animation: floatDownUp 5.2s ease-in-out infinite;
    }

    /* Layer Entrance Animations matching Revolution Slider */
    @keyframes eyebrowIn {
      0% {
        opacity: 0;
        transform: translateY(-18px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes titleIn {
      0% {
        opacity: 0;
        transform: translateY(35px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes excerptIn {
      0% {
        opacity: 0;
        transform: translateX(-25px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes buttonIn {
      0% {
        opacity: 0;
        transform: translateY(22px) scale(0.96);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .animate-eyebrow {
      animation: eyebrowIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .animate-title {
      animation: titleIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
    }

    .animate-excerpt {
      animation: excerptIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    }

    .animate-button {
      animation: buttonIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
    }
  `]
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  @Output() donateTrigger = new EventEmitter<void>();

  private dataService = inject(WebsiteDataService);

  currentSlide = signal(0);
  slideKey = signal(0);
  isAutoPlayRunning = true;
  private timer: any;
  private touchStartX = 0;

  readonly konstrukSlides: KonstrukSlide[] = [
    {
      id: 'slide-1',
      badge: 'الهيئة العربية الدولية للإعمار في فلسطين',
      tag: 'ميدان غزة • التدخل الطارئ',
      shortTopic: 'إزالة الركام وفتح الطرق',
      title: 'من الركام نبني الأمل',
      titleBreak: 'ونُعيد إعمار أرض فلسطين.',
      excerpt: 'طواقمنا الهندسية الميدانية تواصل مهام إزالة آلاف الأطنان من الركام وفتح الشوارع والمحاور الحيوية لتسهيل الإغاثة وعودة الحياة في قطاع غزة.',
      image: 'images/rubble-removal.jpg',
      actionText: 'استكشف المشاريع الميدانية',
      actionLink: '#activities',
      secondaryActionText: 'ساهم في فتح الطرق',
      secondaryActionLink: 'https://donate.aiocp.org/home',
      statNumber: '+85,000 طن',
      statLabel: 'ركام تم رفعه لفتح الشرايين الحيوية'
    },
    {
      id: 'slide-2',
      badge: 'قطاع المياه والإصحاح البيئي',
      tag: 'تأهيل الآبار • غزة',
      shortTopic: 'تأهيل آبار ومحطات المياه',
      title: 'شريان الحياة مستمر',
      titleBreak: 'لتأهيل الآبار وتمديد المياه.',
      excerpt: 'حفر وصيانة آبار المياه المركزية وتمديد خطوط الإمداد ومحطات التحلية بالتعاون مع البلديات لتأمين مياه الشرب النظيفة لأهلنا.',
      image: 'images/water-projects.jpg',
      actionText: 'مشاريع البنية التحتية',
      actionLink: '#projects',
      secondaryActionText: 'ادعم مشاريع المياه',
      secondaryActionLink: 'https://donate.aiocp.org/home',
      statNumber: '+18 بئراً ومحطة',
      statLabel: 'تأهيل وتشغيل عاجل لتأمين الشرب'
    },
    {
      id: 'slide-3',
      badge: 'المنظومة الوطنية لحصر الأضرار (INDAS)',
      tag: 'فريق الحصر الهندسي الميداني',
      shortTopic: 'الحصر والتقييم الهندسي',
      title: 'توثيق هندسي دقيق',
      titleBreak: 'لقيادة مرحلة التعافي الشامل.',
      excerpt: 'توثيق وتقييم علمي متكامل لكافة المباني والمنشآت المتضررة في قطاع غزة بالتعاون مع وزارة الأشغال والمنظمات الدولية كأساس لإعادة الإعمار.',
      image: 'images/slide-mobile.webp',
      actionText: 'استكشف المنظومة الرقمية',
      actionLink: 'https://idap.aiocp.org',
      secondaryActionText: 'منصة INDAS الرسمية',
      secondaryActionLink: 'https://idap.aiocp.org',
      statNumber: '+12,400 مبنى',
      statLabel: 'تم حصرها وتوثيقها ببيانات جغرافية'
    },
    {
      id: 'slide-4',
      badge: 'الائتلاف الدولي لإعادة إعمار فلسطين',
      tag: 'مؤتمرات وشراكات الإعمار',
      shortTopic: 'التحالفات والشراكات الدولية',
      title: 'تحالفات استراتيجية',
      titleBreak: 'لحشد طاقات الإعمار والتنمية.',
      excerpt: 'تنسيق الجهود العربية والإسلامية والدولية وتوقيع اتفاقيات كبرى لتمويل وتنفيذ مشاريع الإيواء والمستشفيات والمدارس والمرافق الحيوية.',
      image: 'images/aiocp-field-1.jpg',
      actionText: 'تعرف على الشراكات',
      actionLink: '#about',
      secondaryActionText: 'انضم لشركاء الإعمار',
      secondaryActionLink: '#about',
      statNumber: '+$29,000,000',
      statLabel: 'مذكرات شراكة دولية ومشاريع مشتركة'
    }
  ];

  get activeSlide(): KonstrukSlide {
    return this.konstrukSlides[this.currentSlide()];
  }

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.isAutoPlayRunning = true;
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  stopAutoPlay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isAutoPlayRunning = false;
  }

  pauseAutoPlay() {
    this.stopAutoPlay();
  }

  resumeAutoPlay() {
    this.startAutoPlay();
  }

  toggleAutoPlay() {
    if (this.isAutoPlayRunning) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  onSecondaryAction(link: string | undefined, event: Event) {
    if (link && link.includes('donate')) {
      event.preventDefault();
      this.donateTrigger.emit();
    }
  }

  nextSlide() {
    this.slideKey.update(k => k + 1);
    this.currentSlide.update(i => (i + 1) % this.konstrukSlides.length);
  }

  prevSlide() {
    this.slideKey.update(k => k + 1);
    this.currentSlide.update(i => (i - 1 + this.konstrukSlides.length) % this.konstrukSlides.length);
  }

  goToSlide(idx: number) {
    this.slideKey.update(k => k + 1);
    this.currentSlide.set(idx);
    if (this.isAutoPlayRunning) {
      this.startAutoPlay();
    }
  }

  // Touch Swipe Support
  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchEnd(e: TouchEvent) {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - this.touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    }
  }

  // Keyboard navigation
  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (e.key === 'ArrowRight') {
      this.nextSlide();
    }
  }
}
