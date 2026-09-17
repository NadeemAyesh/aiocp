import { Component, OnInit, OnDestroy, inject, signal, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService } from '../../services/website-data.service';

export interface AtelierSlide {
  id: string;
  badge: string;
  shortTitle: string;
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  statNumber: string;
  statLabel: string;
  categoryIcon: string;
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Atelier AI Inspired Luxury Hero Section for AIOCP -->
    <section
      id="hero"
      class="relative overflow-hidden bg-gradient-to-b from-[#fbfbf9] via-[#f7f5f0] to-[#edf1f7] dark:from-[#030d1a] dark:via-[#051325] dark:to-[#020b16] transition-colors duration-500 select-none border-b border-slate-200/80 dark:border-white/10 lg:min-h-[calc(100vh-80px)] lg:max-h-[860px] flex flex-col justify-center py-6 sm:py-8 lg:py-10"
      (mouseenter)="pauseAutoPlay()"
      (mouseleave)="resumeAutoPlay()"
      (touchstart)="onTouchStart($event)"
      (touchend)="onTouchEnd($event)"
    >
      <!-- 1. Architectural Subtle Blueprint Grid (Clean, Crisp, Atelier Editorial Ambiance) -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-20">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#00284d0c_1px,transparent_1px),linear-gradient(to_bottom,#00284d0c_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#38bdf812_1px,transparent_1px),linear-gradient(to_bottom,#38bdf812_1px,transparent_1px)] bg-[size:52px_52px]"></div>
      </div>

      <!-- 2. Heritage Landmark Vector Layer: Palestinian & Jerusalem Skyline (Mosque Minaret & Church Dome with Golden Aura) -->
      <div class="absolute bottom-0 inset-x-0 w-full pointer-events-none z-0 overflow-hidden select-none">
        <div class="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[220px]">
          <svg
            class="w-full h-full transition-opacity duration-700 opacity-25 dark:opacity-40"
            viewBox="0 0 2668.96 662.24"
            preserveAspectRatio="xMidYBottom slice"
          >
            <defs>
              <linearGradient id="skylineGradLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#00284d" stop-opacity="0.10" />
                <stop offset="50%" stop-color="#00284d" stop-opacity="0.18" />
                <stop offset="100%" stop-color="#00284d" stop-opacity="0.28" />
              </linearGradient>

              <linearGradient id="skylineGradDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15" />
                <stop offset="50%" stop-color="#0284c7" stop-opacity="0.25" />
                <stop offset="100%" stop-color="#030d1a" stop-opacity="0.45" />
              </linearGradient>

              <filter id="goldenAura" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Dual Skyline Vector Silhouette -->
            <g
              class="fill-[url(#skylineGradLight)] dark:fill-[url(#skylineGradDark)] stroke-[#00284d]/20 dark:stroke-[#38bdf8]/30 stroke-[1]"
              fill-rule="evenodd"
            >
              <path d="M1239.84 0L1236.41 2L1233.62 5L1231.84 7.46L1230.65 10L1229.76 13L1229.37 16L1229.73 20L1231.91 26L1235.84 30.51L1238.84 32.55L1239.64 34L1239.64 42L1239.06 46L1235.83 51L1235.13 53L1232.44 58L1231.43 59L1231.43 60L1227.06 68L1218.44 83L1218.44 84L1210.61 98L1209.79 99L1209.08 101L1205.5 107L1202.01 114L1201.19 115L1199.8 118.74L1199.8 190L1198.84 191.73L1197.84 191.76L1188.84 191.78L1188.19 193L1188.19 266L1186.84 267.53L1173.84 267.53L1173.21 268L1172.65 269L1172.65 434L1171.84 434.73L1170.84 434.73L1167.84 432.36L1164.84 429.17L1162.84 428.07L1162.05 427L1153.41 420L1152.73 419L1149.84 417.14L1148.84 417.14L1134.84 432.25L1133.84 432.93L1129.54 438L1125.84 441.69L1124.07 444L1119.11 449L1118.28 451L1118.28 464L1117.58 465L1116.84 465.42L1073.84 465.42L1072.64 466L1072.61 572L1071.69 573L1069.84 573.47L1044.84 573.47L1043.71 573L1042.85 572L1042.85 355L1040.84 354.64L859.84 354.64L858.84 355L858.78 357L858.75 582L857.84 583.04L856.84 583.07L851.84 583.1L760.84 583.11L759.84 583.59L759.38 585L759.38 610L758.84 611.1L756.84 611.65L716.84 611.65L715.53 611L715.06 610L715.05 559.8L713.84 559.36L707.84 559.32L601.84 559.3L600.83 558L600.83 461L599.84 459.95L564.84 459.95L563.84 459.52L563.03 459L563.02 446L561.84 445.14L338.84 445.15L338.03 446L338.01 447L338 490L337.34 491L334.84 491.61L311.84 491.61L311.23 492L311.22 660L309.84 661.27L283.84 661.27L282.84 660.82L282.19 660L282.19 573L281.16 571L279.84 570.43L276.84 567.84L271.84 564.3L270.57 563L255.47 552L254.52 551L253.76 549L253.76 387L253.31 386L252.84 383.55L250.53 379L249 377L244.84 372.8L238.84 369.89L229.84 368.85L229.34 368L229.34 367L230.03 364L230.03 359L229.09 353L226.63 347L220.84 337.95L214.07 331L209.84 327.93L204.84 325L199.84 323.06L195.84 322.39L195.23 322L194.56 320L194.57 310L195.84 309.17L207.84 309.16L208.59 308L208.59 303L207.84 301.61L195.84 301.6L194.84 300.47L194.36 299L194.35 289L192.84 288.62L187.84 288.62L186.65 289L186.65 300L185.9 301L184.84 301.53L173.84 301.52L172.52 302L172.5 304L172.67 308L172.67 309.03L184.84 309.03L186.4 310L186.46 311L186.49 321L184.84 322.17L179.64 323L173.84 324.98L169.58 327L166.84 328.94L165.84 328.94L161.84 332.51L157.84 336.69L156.09 339L151.86 347L150.84 351.03L149.92 359L150.93 367L150.93 368.26L149.84 369.04L141.84 369.71L135.84 372.64L133.84 374.12L129.37 379L129.37 380L127.84 382.24L126.3 387L126.3 635L125.89 636L124.84 636.9L93.84 636.9L92.7 638L92.69 651L91.84 651.7L53.84 651.7L52.61 650L52.59 613L50.84 612.4L0.84 612.4L0 613L0 662.24L3.84 662.2L1334.48 662.19L1334.48 261L1333.84 259.24L1332.84 259.21L1312.33 259.2L1311.38 258L1311.38 179L1310.84 178.52L1309.84 178.49L1298.84 178.48L1298.27 177L1298.27 122L1297.86 117L1292.84 109.7L1291.3 108L1290.92 107L1285.36 100L1285.36 99L1284.06 98L1280.92 93L1274.03 84L1267.84 74.82L1261.25 66L1260.84 64.97L1259.8 64L1256.45 59L1255.46 58L1252.84 53.78L1251.84 52.95L1250.75 51L1249.42 50L1249.42 49L1248.78 47L1248.78 37L1249.21 35L1249.84 34.52L1253.54 34L1257.66 32L1260.84 29.59L1263.54 26L1264.89 23L1265.84 20.29L1265.84 17.48L1262.84 22.38L1258.84 25.28L1255.84 26.58L1250.84 27.04L1248.84 27.04L1244.84 25.75L1242.84 24.51L1239.86 22L1238.34 20L1237.44 18L1236.11 13L1236.11 10L1237.54 5L1238.65 3L1240.99 0Z" />
              <path transform="translate(1334.48 0)" d="M1239.84 0L1236.41 2L1233.62 5L1231.84 7.46L1230.65 10L1229.76 13L1229.37 16L1229.73 20L1231.91 26L1235.84 30.51L1238.84 32.55L1239.64 34L1239.64 42L1239.06 46L1235.83 51L1235.13 53L1232.44 58L1231.43 59L1231.43 60L1227.06 68L1218.44 83L1218.44 84L1210.61 98L1209.79 99L1209.08 101L1205.5 107L1202.01 114L1201.19 115L1199.8 118.74L1199.8 190L1198.84 191.73L1197.84 191.76L1188.84 191.78L1188.19 193L1188.19 266L1186.84 267.53L1173.84 267.53L1173.21 268L1172.65 269L1172.65 434L1171.84 434.73L1170.84 434.73L1167.84 432.36L1164.84 429.17L1162.84 428.07L1162.05 427L1153.41 420L1152.73 419L1149.84 417.14L1148.84 417.14L1134.84 432.25L1133.84 432.93L1129.54 438L1125.84 441.69L1124.07 444L1119.11 449L1118.28 451L1118.28 464L1117.58 465L1116.84 465.42L1073.84 465.42L1072.64 466L1072.61 572L1071.69 573L1069.84 573.47L1044.84 573.47L1043.71 573L1042.85 572L1042.85 355L1040.84 354.64L859.84 354.64L858.84 355L858.78 357L858.75 582L857.84 583.04L856.84 583.07L851.84 583.1L760.84 583.11L759.84 583.59L759.38 585L759.38 610L758.84 611.1L756.84 611.65L716.84 611.65L715.53 611L715.06 610L715.05 559.8L713.84 559.36L707.84 559.32L601.84 559.3L600.83 558L600.83 461L599.84 459.95L564.84 459.95L563.84 459.52L563.03 459L563.02 446L561.84 445.14L338.84 445.15L338.03 446L338.01 447L338 490L337.34 491L334.84 491.61L311.84 491.61L311.23 492L311.22 660L309.84 661.27L283.84 661.27L282.84 660.82L282.19 660L282.19 573L281.16 571L279.84 570.43L276.84 567.84L271.84 564.3L270.57 563L255.47 552L254.52 551L253.76 549L253.76 387L253.31 386L252.84 383.55L250.53 379L249 377L244.84 372.8L238.84 369.89L229.84 368.85L229.34 368L229.34 367L230.03 364L230.03 359L229.09 353L226.63 347L220.84 337.95L214.07 331L209.84 327.93L204.84 325L199.84 323.06L195.84 322.39L195.23 322L194.56 320L194.57 310L195.84 309.17L207.84 309.16L208.59 308L208.59 303L207.84 301.61L195.84 301.6L194.84 300.47L194.36 299L194.35 289L192.84 288.62L187.84 288.62L186.65 289L186.65 300L185.9 301L184.84 301.53L173.84 301.52L172.52 302L172.5 304L172.67 308L172.67 309.03L184.84 309.03L186.4 310L186.46 311L186.49 321L184.84 322.17L179.64 323L173.84 324.98L169.58 327L166.84 328.94L165.84 328.94L161.84 332.51L157.84 336.69L156.09 339L151.86 347L150.84 351.03L149.92 359L150.93 367L150.93 368.26L149.84 369.04L141.84 369.71L135.84 372.64L133.84 374.12L129.37 379L129.37 380L127.84 382.24L126.3 387L126.3 635L125.89 636L124.84 636.9L93.84 636.9L92.7 638L92.69 651L91.84 651.7L53.84 651.7L52.61 650L52.59 613L50.84 612.4L0.84 612.4L0 613L0 662.24L3.84 662.2L1334.48 662.19L1334.48 261L1333.84 259.24L1332.84 259.21L1312.33 259.2L1311.38 258L1311.38 179L1310.84 178.52L1309.84 178.49L1298.84 178.48L1298.27 177L1298.27 122L1297.86 117L1292.84 109.7L1291.3 108L1290.92 107L1285.36 100L1285.36 99L1284.06 98L1280.92 93L1274.03 84L1267.84 74.82L1261.25 66L1260.84 64.97L1259.8 64L1256.45 59L1255.46 58L1252.84 53.78L1251.84 52.95L1250.75 51L1249.42 50L1249.42 49L1248.78 47L1248.78 37L1249.21 35L1249.84 34.52L1253.54 34L1257.66 32L1260.84 29.59L1263.54 26L1264.89 23L1265.84 20.29L1265.84 17.48L1262.84 22.38L1258.84 25.28L1255.84 26.58L1250.84 27.04L1248.84 27.04L1244.84 25.75L1242.84 24.51L1239.86 22L1238.34 20L1237.44 18L1236.11 13L1236.11 10L1237.54 5L1238.65 3L1240.99 0Z" />
            </g>

            <!-- Mosque Minaret Glowing Aura -->
            <g transform="translate(1240, 10)">
              <circle r="18" fill="#f4921e" fill-opacity="0.25" />
              <circle r="8" fill="#ffb703" filter="url(#goldenAura)" />
              <circle r="3" fill="#ffffff" />
            </g>
            <g transform="translate(2574, 10)">
              <circle r="18" fill="#f4921e" fill-opacity="0.25" />
              <circle r="8" fill="#ffb703" filter="url(#goldenAura)" />
              <circle r="3" fill="#ffffff" />
            </g>

            <!-- Church Dome Glowing Aura -->
            <g transform="translate(186.65, 298)">
              <circle r="16" fill="#f4921e" fill-opacity="0.25" />
              <circle r="7" fill="#ffb703" filter="url(#goldenAura)" />
              <circle r="2.5" fill="#ffffff" />
            </g>
            <g transform="translate(1521, 298)">
              <circle r="16" fill="#f4921e" fill-opacity="0.25" />
              <circle r="7" fill="#ffb703" filter="url(#goldenAura)" />
              <circle r="2.5" fill="#ffffff" />
            </g>
          </svg>
          <div class="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#fbfbf9] dark:from-[#030d1a] to-transparent pointer-events-none"></div>
        </div>
      </div>

      <!-- Main Content Container: Side-by-Side Atelier Split Grid -->
      <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          <!-- RIGHT COLUMN (in RTL): Editorial Headline, Narrative, CTAs & Live Trust Metrics -->
          <div dir="rtl" class="lg:col-span-5 xl:col-span-5 text-right space-y-5 sm:space-y-6 order-2 lg:order-1">

            <!-- 1. Atelier Chic Eyebrow Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00284d]/5 dark:bg-[#ffb703]/10 border border-[#00284d]/15 dark:border-[#ffb703]/25 shadow-xs">
              <span class="w-2 h-2 rounded-full bg-[#f4921e] animate-ping"></span>
              <span class="text-xs sm:text-[13px] font-extrabold text-[#00284d] dark:text-[#ffb703]">
                {{ activeSlide.badge }}
              </span>
            </div>

            <!-- 2. Master Editorial Headline with Luxury Two-Tone Contrast -->
            <div class="space-y-1 sm:space-y-2">
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-black text-[#00284d] dark:text-white leading-[1.2] tracking-tight">
                {{ activeSlide.title }}
                <span class="block text-[#f4921e] dark:text-[#ffb703] pt-1">
                  {{ activeSlide.titleHighlight }}
                </span>
              </h1>
              <!-- Atelier Minimalist Accent Rule -->
              <div class="w-14 sm:w-16 h-[3px] bg-gradient-to-l from-[#f4921e] to-[#ffb703] rounded-full pt-0.5"></div>
            </div>

            <!-- 3. Refined Narrative Description -->
            <p class="text-sm sm:text-base md:text-[17px] text-slate-700 dark:text-slate-300 leading-[1.8] font-medium max-w-xl">
              {{ activeSlide.description }}
            </p>

            <!-- 4. Conversion Action CTAs (Primary Glow Pill + Secondary Glass Action) -->
            <div class="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <!-- Primary CTA Button -->
              <a
                [href]="activeSlide.primaryCtaLink"
                class="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#00284d] hover:bg-[#001f3b] text-white dark:bg-[#f4921e] dark:hover:bg-[#ffb703] dark:text-[#001f3b] font-extrabold text-sm sm:text-base rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{{ activeSlide.primaryCtaText }}</span>
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
              </a>

              <!-- Secondary CTA (Triggers Donation Modal) -->
              <button
                type="button"
                (click)="onTriggerDonate($event)"
                class="inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3.5 sm:py-4 bg-white/90 dark:bg-[#07192f]/90 hover:bg-[#f4f1ea] dark:hover:bg-white/10 text-[#00284d] dark:text-white border border-slate-300/80 dark:border-white/15 font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer backdrop-blur-xs"
              >
                <span class="w-7 h-7 rounded-full bg-[#f4921e]/15 flex items-center justify-center text-[#f4921e]">
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </span>
                <span>{{ activeSlide.secondaryCtaText }}</span>
              </button>
            </div>

            <!-- 5. Field Metrics & Trust Proof Strip (Directly matching Atelier AI stats) -->
            <div class="pt-4 sm:pt-6 border-t border-slate-200/90 dark:border-white/10">
              <div class="grid grid-cols-3 gap-2 sm:gap-4 text-right">

                <!-- Metric 1 -->
                <div class="space-y-1">
                  <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <svg class="w-3.5 h-3.5 text-[#f4921e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    <span class="text-[11px] sm:text-xs font-semibold truncate">ركام تم إزالته</span>
                  </div>
                  <div class="font-black text-sm sm:text-base md:text-lg text-[#00284d] dark:text-white font-mono">
                    +85,000 طن
                  </div>
                </div>

                <!-- Metric 2 -->
                <div class="space-y-1">
                  <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <svg class="w-3.5 h-3.5 text-[#f4921e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                    <span class="text-[11px] sm:text-xs font-semibold truncate">آبار ومياه مؤهلة</span>
                  </div>
                  <div class="font-black text-sm sm:text-base md:text-lg text-[#00284d] dark:text-white font-mono">
                    +18 محطة
                  </div>
                </div>

                <!-- Metric 3 -->
                <div class="space-y-1">
                  <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <svg class="w-3.5 h-3.5 text-[#f4921e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    <span class="text-[11px] sm:text-xs font-semibold truncate">توثيق INDAS</span>
                  </div>
                  <div class="font-black text-sm sm:text-base md:text-lg text-[#00284d] dark:text-white font-mono">
                    +12,400 منشأة
                  </div>
                </div>

              </div>

              <!-- Micro Proof Text -->
              <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-2.5">
                إشراف وتنفيذ هندسي معتمد بالتعاون مع كبرى نقابات المهندسين والمؤسسات الدولية الشريكة.
              </p>
            </div>

          </div>

          <!-- LEFT COLUMN (in RTL): Grand Visual Showcase with Floating Sidebar Card ("Explore Styles") & Bottom Pill Dock ("Materials Palette") -->
          <div class="lg:col-span-7 xl:col-span-7 order-1 lg:order-2">
            <div class="relative w-full group">

              <!-- Ambient Glow Behind Showcase Frame -->
              <div class="absolute -inset-2 bg-gradient-to-tr from-[#f4921e]/20 via-[#00284d]/10 to-[#ffb703]/25 rounded-[32px] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <!-- Main Showcase Rounded Frame -->
              <div class="relative z-10 w-full h-[360px] sm:h-[430px] md:h-[480px] lg:h-[510px] xl:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/90 dark:border-white/15 bg-slate-900">

                <!-- Real AIOCP Slides (Crossfade + Subtle Ken Burns Zoom) -->
                <div
                  *ngFor="let slide of atelierSlides; let idx = index"
                  class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
                  [class.opacity-100]="currentSlide() === idx"
                  [class.opacity-0]="currentSlide() !== idx"
                  [class.z-10]="currentSlide() === idx"
                  [class.z-0]="currentSlide() !== idx"
                >
                  <img
                    [src]="slide.image"
                    [alt]="slide.title"
                    class="w-full h-full object-cover transition-transform duration-[7000ms] ease-out"
                    [ngClass]="{
                      'scale-105': currentSlide() === idx,
                      'scale-100': currentSlide() !== idx
                    }"
                  />
                  <!-- Cinematic Shadow Vignette -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none"></div>
                </div>

                <!-- Top Right Floating Pill (In RTL): Live Field Tag -->
                <div dir="rtl" class="absolute top-4 right-4 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 dark:bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg">
                  <span class="w-2 h-2 rounded-full bg-[#f4921e] animate-pulse"></span>
                  <span>{{ activeSlide.tag }}</span>
                </div>

                <!-- Floating Sidebar Card: "مسارات الإعمار" (Directly matching Atelier AI's "Explore Styles" card) -->
                <div
                  dir="rtl"
                  class="absolute top-4 left-4 z-30 w-[210px] sm:w-[240px] md:w-[260px] bg-[#fbf9f5]/95 dark:bg-[#08182b]/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-white/80 dark:border-white/15 hidden sm:block"
                >
                  <!-- Card Header -->
                  <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/80 dark:border-white/10">
                    <span class="text-xs sm:text-[13px] font-black text-[#00284d] dark:text-white flex items-center gap-1.5">
                      <svg class="w-3.5 h-3.5 text-[#f4921e]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      مسارات الإعمار
                    </span>
                    <span class="text-[10px] font-mono font-bold text-slate-400">
                      0{{ currentSlide() + 1 }}/0{{ atelierSlides.length }}
                    </span>
                  </div>

                  <!-- List of 4 Tracks (Like Explore Styles in Atelier AI) -->
                  <div class="space-y-1.5">
                    <button
                      *ngFor="let track of atelierSlides; let tIdx = index"
                      type="button"
                      (click)="goToSlide(tIdx)"
                      class="w-full flex items-center justify-between p-1.5 sm:p-2 rounded-xl text-right transition-all duration-300 cursor-pointer group/btn"
                      [ngClass]="{
                        'bg-white dark:bg-white/10 shadow-sm border border-[#f4921e]/50 dark:border-[#f4921e]/60': currentSlide() === tIdx,
                        'hover:bg-black/5 dark:hover:bg-white/5 border border-transparent': currentSlide() !== tIdx
                      }"
                    >
                      <div class="flex items-center gap-2 min-w-0">
                        <!-- Thumbnail Image -->
                        <img
                          [src]="track.image"
                          [alt]="track.shortTitle"
                          class="w-8 h-8 rounded-lg object-cover shrink-0 border border-slate-200 dark:border-white/10"
                        />
                        <!-- Title -->
                        <span
                          class="text-[11px] sm:text-xs font-bold truncate transition-colors"
                          [ngClass]="{
                            'text-[#00284d] dark:text-white': currentSlide() === tIdx,
                            'text-slate-600 dark:text-slate-300': currentSlide() !== tIdx
                          }"
                        >
                          {{ track.shortTitle }}
                        </span>
                      </div>

                      <!-- Active Checkmark Indicator (Matching Atelier AI's checkmark) -->
                      <div
                        *ngIf="currentSlide() === tIdx"
                        class="w-4 h-4 rounded-full bg-[#f4921e] text-white flex items-center justify-center shrink-0 shadow-xs"
                      >
                        <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <div
                        *ngIf="currentSlide() !== tIdx"
                        class="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/btn:bg-[#f4921e] shrink-0 transition-colors"
                      ></div>
                    </button>
                  </div>

                  <!-- Footer Action Link -->
                  <div class="pt-2 mt-1.5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                    <a
                      href="#projects"
                      class="text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-[#00284d] dark:hover:text-[#ffb703] transition-colors flex items-center gap-1"
                    >
                      <span>عرض كافة المسارات</span>
                      <svg class="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </a>

                    <!-- Pause/Resume Autoplay Toggle -->
                    <button
                      type="button"
                      (click)="toggleAutoPlay()"
                      class="text-slate-400 hover:text-[#f4921e] transition-colors p-1"
                      [title]="isAutoPlayRunning ? 'إيقاف التبديل التلقائي مؤقتاً' : 'تشغيل التبديل التلقائي'"
                    >
                      <svg *ngIf="isAutoPlayRunning" class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                      <svg *ngIf="!isAutoPlayRunning" class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Bottom Floating Pill Dock: Live Verification & Sector Palette (Matching Atelier AI's "Materials Palette" dock) -->
                <div
                  dir="rtl"
                  class="absolute bottom-4 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-30 bg-[#fbf9f5]/95 dark:bg-[#08182b]/95 backdrop-blur-md px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl shadow-xl border border-white/80 dark:border-white/15 flex items-center justify-between sm:justify-center gap-3 sm:gap-4"
                >
                  <!-- Color Brand Swatches / Live Indicator -->
                  <div class="flex items-center gap-1.5">
                    <span class="w-3 h-3 rounded-full bg-[#00284d] border border-white/40 shadow-xs" title="كحلي الهيئة الرسمي"></span>
                    <span class="w-3 h-3 rounded-full bg-[#f4921e] border border-white/40 shadow-xs" title="ذهبي الإعمار"></span>
                    <span class="w-3 h-3 rounded-full bg-[#2a9d8f] border border-white/40 shadow-xs" title="أخضر النماء"></span>
                    <span class="w-3 h-3 rounded-full bg-white border border-slate-300 shadow-xs" title="نقاء البناء"></span>
                  </div>

                  <!-- Divider -->
                  <div class="w-px h-4 bg-slate-300 dark:bg-white/20"></div>

                  <!-- Text Info & Active Stat -->
                  <div class="flex items-center gap-2 text-right">
                    <span class="text-[10px] sm:text-xs font-bold text-[#00284d] dark:text-white">
                      {{ activeSlide.statLabel }}:
                    </span>
                    <span class="text-[10px] sm:text-xs font-black text-[#f4921e] font-mono">
                      {{ activeSlide.statNumber }}
                    </span>
                  </div>

                  <!-- Micro Verified Badge -->
                  <div class="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>موثق ميدانياً</span>
                  </div>
                </div>

                <!-- Mobile Compact Track Tabs (Visible only on mobile screens where the floating card is hidden) -->
                <div class="absolute top-4 left-4 z-20 flex sm:hidden items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-xl border border-white/20">
                  <button
                    *ngFor="let t of atelierSlides; let i = index"
                    type="button"
                    (click)="goToSlide(i)"
                    class="w-6 h-6 rounded-lg text-[10px] font-bold font-mono transition-all flex items-center justify-center cursor-pointer"
                    [ngClass]="{
                      'bg-[#f4921e] text-white': currentSlide() === i,
                      'text-white/70 hover:text-white': currentSlide() !== i
                    }"
                  >
                    0{{ i + 1 }}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  @Output() donateTrigger = new EventEmitter<void>();

  private dataService = inject(WebsiteDataService);

  currentSlide = signal(0);
  isAutoPlayRunning = true;
  private timer: any;
  private touchStartX = 0;

  readonly atelierSlides: AtelierSlide[] = [
    {
      id: 'rubble',
      badge: 'الهيئة العربية الدولية للإعمار • غزة',
      shortTitle: 'إزالة الركام وفتح الطرق',
      tag: 'المحاور الحيوية • غزة',
      title: 'من قلب الركام...',
      titleHighlight: 'نفتح شرايين الحياة ونبني الأمل',
      description: 'تواصل الطواقم الهندسية والميدانية للهيئة إزالة مئات آلاف الأطنان من الركام وفتح المحاور والشوارع الحيوية لتسهيل وصول قوافل الإغاثة وعودة الحياة لقطاع غزة.',
      image: 'images/rubble-removal.jpg',
      primaryCtaText: 'استكشف مشاريع الركام والطرق',
      primaryCtaLink: '#activities',
      secondaryCtaText: 'ساهم في فتح الطرق',
      secondaryCtaLink: 'https://donate.aiocp.org/home',
      statNumber: '+85,000 طن',
      statLabel: 'ركام تم رفعه',
      categoryIcon: 'truck'
    },
    {
      id: 'water',
      badge: 'قطاع المياه والإصحاح البيئي',
      shortTitle: 'تأهيل آبار ومحطات المياه',
      tag: 'تأهيل وتشغيل عاجل',
      title: 'شريان الحياة مستمر...',
      titleHighlight: 'لتأهيل الآبار وتأمين مياه الشرب',
      description: 'حفر وصيانة آبار المياه المركزية، وتأهيل محطات التحلية ومد شبكات الإمداد لتوفير مياه الشرب النظيفة لأكثر من نصف مليون مواطن في مراكز النزوح والمناطق المتضررة.',
      image: 'images/water-projects.jpg',
      primaryCtaText: 'مشاريع البنية التحتية والمياه',
      primaryCtaLink: '#projects',
      secondaryCtaText: 'ادعم تشغيل آبار المياه',
      secondaryCtaLink: 'https://donate.aiocp.org/home',
      statNumber: '+18 محطة وبئراً',
      statLabel: 'آبار ومحطات مؤهلة',
      categoryIcon: 'droplet'
    },
    {
      id: 'indas',
      badge: 'المنظومة الوطنية لحصر الأضرار (INDAS)',
      shortTitle: 'حصر وتقييم الأضرار (INDAS)',
      tag: 'التوثيق الهندسي الرقمي',
      title: 'توثيق هندسي دقيق...',
      titleHighlight: 'لقيادة مرحلة التعافي وإعادة الإعمار',
      description: 'تقييم علمي وهندسي متكامل لكافة المنشآت والمباني المتضررة في قطاع غزة بالتعاون مع نقابات المهندسين والوزارات المعنية كأساس فني ورقمي معتمد للإعمار.',
      image: 'images/slide-mobile.webp',
      primaryCtaText: 'استكشف منصة INDAS',
      primaryCtaLink: 'https://idap.aiocp.org',
      secondaryCtaText: 'ادعم التوثيق الهندسي',
      secondaryCtaLink: 'https://idap.aiocp.org',
      statNumber: '+12,400 منشأة',
      statLabel: 'منشآت موثقة جغرافياً',
      categoryIcon: 'clipboard'
    },
    {
      id: 'alliances',
      badge: 'الائتلاف الدولي لإعادة إعمار فلسطين',
      shortTitle: 'الائتلاف والشراكات الدولية',
      tag: 'مؤتمرات وتحالفات دولية',
      title: 'تحالفات استراتيجية...',
      titleHighlight: 'لحشد طاقات الإعمار والبناء والتنمية',
      description: 'تنسيق الجهود العربية والإسلامية والدولية وتوقيع اتفاقيات استراتيجية لتمويل وتنفيذ مشاريع الإيواء والمستشفيات والمدارس وإحياء البنية التحتية لكافة القطاعات.',
      image: 'images/aiocp-field-1.jpg',
      primaryCtaText: 'تعرف على الشراكات الدولية',
      primaryCtaLink: '#about',
      secondaryCtaText: 'انضم لشركاء الإعمار',
      secondaryCtaLink: '#about',
      statNumber: '+$29,000,000',
      statLabel: 'مذكرات شراكة وتدخلات',
      categoryIcon: 'handshake'
    }
  ];

  get activeSlide(): AtelierSlide {
    return this.atelierSlides[this.currentSlide()];
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
    }, 6500);
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

  onTriggerDonate(event: Event) {
    event.preventDefault();
    this.donateTrigger.emit();
  }

  nextSlide() {
    this.currentSlide.update(i => (i + 1) % this.atelierSlides.length);
  }

  prevSlide() {
    this.currentSlide.update(i => (i - 1 + this.atelierSlides.length) % this.atelierSlides.length);
  }

  goToSlide(idx: number) {
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
