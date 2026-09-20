import { Injectable } from '@angular/core';
import { HeroSlide, NewsArticle, ProjectItem, MediaItem, StatItem, Partner } from '../models/website.models';

@Injectable({
  providedIn: 'root'
})
export class WebsiteDataService {
  readonly heroSlides: HeroSlide[] = [
    {
      id: 'slide-1',
      badge: 'تغطية ميدانية عاجلة',
      category: 'أنشطة الهيئة',
      title: 'بالتعاون مع وزارة الأشغال: إزالة الركام وفتح الشوارع الرئيسية في مدينة غزة',
      excerpt: 'شرعت الهيئة العربية الدولية للإعمار في فلسطين بالتعاون مع وزارة الأشغال العامة والإسكان في تنفيذ مرحلة متقدمة لفتح المحاور الحيوية وإزالة آلاف الأطنان من الركام تمهيداً لعودة الحياة وإغاثة الأهالي.',
      image: 'images/rubble-removal.jpg',
      date: '14 أكتوبر 2025',
      readTime: '3 دقائق',
      projectTarget: '$2.5M مستهدف',
      actionLink: '#activities'
    },
    {
      id: 'slide-2',
      badge: 'شراكات دولية استراتيجية',
      category: 'أخبار الهيئة',
      title: 'اتفاقيات شراكة استراتيجية بقيمة 29 مليون دولار لتنفيذ حزمة مشاريع حيوية في غزة',
      excerpt: 'أقرت الهيئة العربية الدولية للإعمار خطة طوارئ إنسانية وهندسية شاملة بالتعاون مع شركائها الإقليميين والدوليين لإعادة تأهيل البنية التحتية والمياه والإيواء والمراكز الصحية.',
      image: 'images/board-meeting.jpg',
      date: '28 أغسطس 2025',
      readTime: '4 دقائق',
      projectTarget: '$29M اتفاقيات',
      actionLink: '#projects'
    },
    {
      id: 'slide-3',
      badge: 'إيواء طارئ وإغاثة',
      category: 'المشاريع الجارية',
      title: 'توفير 100 خيمة لإقامة مخيم إيواء عاجل ومرافق خدمية في مدينة جباليا',
      excerpt: 'ضمن التدخلات السريعة لحماية الأسر المتضررة والنازحة، جهزت طواقم الهيئة مخيماً نموذجياً متكاملاً يتضمن وحدات صحية وخزانات مياه صالحة للشرب وأنظمة طاقة شمسية.',
      image: 'images/destruction-gaza.jpg',
      date: '15 يوليو 2025',
      readTime: '2 دقيقة',
      projectTarget: '5,000 مستفيد',
      actionLink: '#projects'
    },
    {
      id: 'slide-4',
      badge: 'مشاريع المياه والإصحاح',
      category: 'بنية تحتية',
      title: 'تأهيل آبار المياه وشبكات التوزيع وإدارة النفايات الصلبة شمال قطاع غزة',
      excerpt: 'تنفيذ أعمال تأهيل شاملة لـ 12 بئراً مركزياً بالتعاون مع مصلحة بلديات الساحل وتوفير آليات ترحيل النفايات للحد من المخاطر البيئية والصحية على السكان.',
      image: 'images/water-projects.jpg',
      date: '20 سبتمبر 2024',
      readTime: '3 دقائق',
      projectTarget: '250,000 نسمة',
      actionLink: '#projects'
    }
  ];

  readonly breakingNews: string[] = [
    'الهيئة تشرع في إزالة الركام وفتح الشوارع الرئيسية في أحياء الرمال وتل الهوى بمدينة غزة',
    'مجلس إدارة الهيئة يقر خطة التدخل الطارئ لعام 2025-2026 بقيمة إجمالية تجاوزت 29 مليون دولار',
    'إطلاق أعمال حصر الأضرار الفنية والهندسية للمباني السكنية المتضررة بالتعاون مع نقابة المهندسين',
    'الهيئة تعزز شراكاتها مع منظمات الأمم المتحدة والكتل الإنسانية (WASH, Shelter, Health, Food)'
  ];

  readonly newsArticles: NewsArticle[] = [
    {
      id: 'news-1',
      title: 'الهيئة العربية الدولية للإعمار تشرع في إزالة الركام وفتح الشوارع الرئيسية في مدينة غزة',
      excerpt: 'في إطار المرحلة العاجلة لتسهيل حركة سيارات الإسعاف وفرق الإغاثة، بدأت الآليات الهندسية الثقيلة التابعة للهيئة فتح الشوارع المغلقة ورفع آلاف الأمتار المكعبة من الركام.',
      category: 'activities',
      categoryLabel: 'أنشطة ميدانية',
      image: 'images/rubble-removal.jpg',
      date: '14 أكتوبر 2025',
      readTime: '3 دقائق',
      featured: true,
      author: 'إعلام الإعمار'
    },
    {
      id: 'news-2',
      title: 'الهيئة تعقد اجتماع مجلس إدارتها وتقر خطة طوارئ إنسانية وهندسية في قطاع غزة',
      excerpt: 'انطلاق أعمال مجلس إدارة الهيئة في إسطنبول بمشاركة كوكبة من المهندسين ورجال الأعمال، واعتماد مشاريع بقيمة 29 مليون دولار.',
      category: 'news',
      categoryLabel: 'أخبار الهيئة',
      image: 'images/board-meeting.jpg',
      date: '22 أغسطس 2025',
      readTime: '4 دقائق',
      author: 'الأمانة العامة'
    },
    {
      id: 'news-3',
      title: 'جمع وترحيل النفايات الصلبة في مدينة غزة والمناطق الشمالية لتفادي الكارثة الصحية',
      excerpt: 'مواصلة التدخل البيئي العاجل لتشغيل آليات الجمع والترحيل إلى المكبات المخصصة وسط ظروف ميدانية معقدة ونقص حاد في الوقود.',
      category: 'activities',
      categoryLabel: 'أنشطة ميدانية',
      image: 'images/gaza-partnership.jpg',
      date: '10 سبتمبر 2025',
      readTime: '2 دقيقة',
      author: 'فريق العمليات الميدانية'
    },
    {
      id: 'news-4',
      title: 'بيان صحافي: الهيئة تؤكد جاهزيتها الفنية لإطلاق المرحلة الشاملة لإعادة إعمار غزة',
      excerpt: 'أكد رئيس مجلس إدارة الهيئة جاهزية الكوادر الهندسية والخطط التنفيذية المتكاملة للبدء الفوري في الترميم وإعادة البناء فور استقرار الأوضاع.',
      category: 'statements',
      categoryLabel: 'بيانات صحفية',
      image: 'images/destruction-gaza.jpg',
      date: '02 أكتوبر 2025',
      readTime: '3 دقائق',
      author: 'المكتب الإعلامي'
    },
    {
      id: 'news-5',
      title: 'إطلاق حملة «همم الإعمار»: تحويل الألم إلى أمل والركام إلى عمران ينبض بالحياة',
      excerpt: 'حملة شعبية ومؤسسية واسعة النطاق لجمع التبرعات وحشد الطاقات العربية والدولية لإسناد صمود العائلات وتوفير مأوى كريم للمتضررين.',
      category: 'campaigns',
      categoryLabel: 'حملات الإعمار',
      image: 'images/water-projects.jpg',
      date: '18 يوليو 2025',
      readTime: '5 دقائق',
      author: 'لجنة الحملات'
    },
    {
      id: 'news-6',
      title: 'الهيئة تباشر حصر الأضرار وتوثيق الدمار الشامل في قطاع غزة وفق معايير دولية',
      excerpt: 'إطلاق منصة رقمية هندسية لتوثيق الأضرار الإنشائية للمباني والمنشآت وتجهيز المخططات الفنية التفصيلية لكل منطقة.',
      category: 'news',
      categoryLabel: 'أخبار الهيئة',
      image: 'images/rubble-removal.jpg',
      date: '05 يونيو 2025',
      readTime: '4 دقائق',
      author: 'الدائرة الهندسية'
    }
  ];

  readonly projects: ProjectItem[] = [
    {
      id: 'proj-1',
      title: 'مشروع إزالة الركام وفتح الشوارع والمحاور الحيوية في غزة',
      description: 'إزالة أكثر من 150,000 طن من الركام المتراكم في الشوارع الرئيسية والفرعية لتسهيل وصول طواقم الإسعاف والدفاع المدني والإغاثة.',
      status: 'ongoing',
      statusLabel: 'في طور الإنجاز',
      sector: 'debris',
      sectorLabel: 'إدارة الركام والنفايات الصلبة',
      progressPercentage: 68,
      targetedBudget: '$1,800,000',
      raisedBudget: '$1,224,000',
      beneficiaries: '350,000 مواطن',
      location: 'مدينة غزة والشمال',
      image: 'images/rubble-removal.jpg'
    },
    {
      id: 'proj-2',
      title: 'مشروع مخيمات الإيواء العاجل والوحدات السكنية المؤقتة في جباليا',
      description: 'توفير وتجهيز وحدات إيواء عازلة للحرارة والأمطار مزودة بكافة الخدمات الأساسية من مياه وكهرباء شمسية ومرافق صحية.',
      status: 'ongoing',
      statusLabel: 'في طور الإنجاز',
      sector: 'shelter',
      sectorLabel: 'الإيواء',
      progressPercentage: 82,
      targetedBudget: '$950,000',
      raisedBudget: '$779,000',
      beneficiaries: '12,500 فرد',
      location: 'محافظة شمال غزة',
      image: 'images/destruction-gaza.jpg'
    },
    {
      id: 'proj-3',
      title: 'تأهيل آبار ومحطات تحلية المياه وشبكات التغذية العاجلة',
      description: 'إصلاح وتشغيل الآبار المتضررة وتزويدها بالطاقة الشمسية ومولدات الديزل مع توزيع مياه الشرب النقية يومياً عبر الصهاريج.',
      status: 'completed',
      statusLabel: 'المنجزة',
      sector: 'water',
      sectorLabel: 'المياه والصرف الصحي',
      progressPercentage: 100,
      targetedBudget: '$650,000',
      raisedBudget: '$650,000',
      beneficiaries: '180,000 نسمة',
      location: 'مدينة غزة وخانيونس',
      image: 'images/water-projects.jpg'
    },
    {
      id: 'proj-4',
      title: 'ترميم وتجهيز النقاط الطبية والمستشفيات الميدانية',
      description: 'إعادة تأهيل الأقسام الإسعافية وتزويدها بالمستلزمات الطبية وأنظمة الطاقة البديلة لضمان استمرار تقديم الرعاية الصحية للجرحى والمرضى.',
      status: 'completed',
      statusLabel: 'المنجزة',
      sector: 'health',
      sectorLabel: 'الصحة',
      progressPercentage: 100,
      targetedBudget: '$1,200,000',
      raisedBudget: '$1,200,000',
      beneficiaries: '75,000 مريض',
      location: 'دير البلح والوسطى',
      image: 'images/board-meeting.jpg'
    },
    {
      id: 'proj-5',
      title: 'مشروع إعادة تأهيل وترميم المدارس والمراكز التعليمية المتضررة',
      description: 'إعادة إعمار الفصول الدراسية وتوفير التجهيزات التعليمية والطاقة البديلة لعودة الطلاب إلى مقاعد الدراسة بكرامة وأمان.',
      status: 'ongoing',
      statusLabel: 'في طور الإنجاز',
      sector: 'education',
      sectorLabel: 'التعليم',
      progressPercentage: 75,
      targetedBudget: '$2,400,000',
      raisedBudget: '$1,800,000',
      beneficiaries: '35,000 طالب وطالبة',
      location: 'محافظة الوسطى وغزة',
      image: 'images/gaza-partnership.jpg'
    },
    {
      id: 'proj-6',
      title: 'مشروع المطابخ المركزية وسلال الإسناد الغذائي الطارئة',
      description: 'تأمين وجبات غذائية ساخنة يومياً وتوزيع الطرود الغذائية المتكاملة لدعم صمود الأسر النازحة والأطفال في مراكز الإيواء.',
      status: 'ongoing',
      statusLabel: 'في طور الإنجاز',
      sector: 'food',
      sectorLabel: 'الأمن الغذائي',
      progressPercentage: 80,
      targetedBudget: '$1,500,000',
      raisedBudget: '$1,200,000',
      beneficiaries: '120,000 نسمة',
      location: 'شمال وجنوب القطاع',
      image: 'images/destruction-gaza.jpg'
    },
    {
      id: 'proj-7',
      title: 'مشروع المسح الميداني والتوثيق الهندسي وحصر الأضرار في غزة',
      description: 'منظومة هندسية رقمية متقدمة لحصر وتقييم الأضرار الإنشائية للمباني والمنشآت وتجهيز المخططات التنفيذية الدقيقة لإعادة الإعمار.',
      status: 'needs',
      statusLabel: 'الحاجة إلى الإعمار',
      sector: 'damage-assessment',
      sectorLabel: 'حصر الأضرار',
      progressPercentage: 40,
      targetedBudget: '$850,000',
      raisedBudget: '$340,000',
      beneficiaries: 'كافة محافظات القطاع',
      location: 'كامل قطاع غزة',
      image: 'images/rubble-removal.jpg'
    },
    {
      id: 'proj-8',
      title: 'المشروع الوطني لإعادة بناء الأحياء السكنية المستدامة',
      description: 'مخطط هندسي متكامل لإعادة تشييد الوحدات السكنية المدمرة كلياً بنظام البناء البيئي الحديث والمقاوم للزلازل والحرائق.',
      status: 'future',
      statusLabel: 'المستقبلية',
      sector: 'shelter',
      sectorLabel: 'الإيواء',
      progressPercentage: 25,
      targetedBudget: '$15,000,000',
      raisedBudget: '$3,750,000',
      beneficiaries: '45,000 أسرة',
      location: 'محافظات قطاع غزة',
      image: 'images/board-meeting.jpg'
    }
  ];

  readonly mediaItems: MediaItem[] = [
    {
      id: 'med-1',
      type: 'video',
      title: 'تقرير مرئي: فتح الشوارع وإزالة الركام في مدينة غزة',
      description: 'مشاهد حية ومباشرة ترصد الآليات الهندسية وفرق العمل الميداني التابعة للهيئة أثناء فتح الشوارع وتسهيل مرور قوافل الإغاثة الإنسانية.',
      tags: ['إزالة الركام', 'آليات هندسية', 'طوارئ'],
      date: '12 أكتوبر 2025',
      image: 'images/rubble-removal.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '04:15 دقيقة',
      speaker: 'م. حاتم حسونة - مدير العمليات'
    },
    {
      id: 'med-2',
      type: 'video',
      title: 'كلمة رئيس الهيئة في المؤتمر الدولي لإعمار غزة - إسطنبول',
      description: 'استعراض شامل لأولويات إعادة الإعمار وإطلاق حزمة من المبادرات الهندسية الميدانية بالشراكة مع الاتحادات والنقابات الدولية.',
      tags: ['مؤتمرات دولية', 'إعمار غزة', 'شراكات'],
      date: '25 أغسطس 2025',
      image: 'images/board-meeting.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '18:40 دقيقة',
      speaker: 'م. زهير العمري - رئيس مجلس الإدارة'
    },
    {
      id: 'med-v3',
      type: 'video',
      title: 'تشغيل محطة تحلية المياه بالطاقة الشمسية في خان يونس',
      description: 'تشغيل المحطة بقدرة إنتاجية تلبي احتياجات آلاف الأسر النازحة وتضمن استدامة تدفق مياه الشرب النقية عبر الطاقة المتجددة.',
      tags: ['مياه وصرف صحي', 'طاقة شمسية', 'خان يونس'],
      date: '05 سبتمبر 2025',
      image: 'images/water-projects.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '06:20 دقيقة',
      speaker: 'م. أحمد المصري - مهندس المشاريع'
    },
    {
      id: 'med-v4',
      type: 'video',
      title: 'توثيق ميداني: أعمال تسوية وتجهيز مخيمات الإيواء في جباليا',
      description: 'لقطات ميدانية لمراحل تسوية الأراضي وتثبيت الوحدات العازلة وتمديد شبكات الصرف الصحي والكهرباء لإيواء العائلات المنكوبة.',
      tags: ['إيواء عاجل', 'توثيق ميداني', 'شمال غزة'],
      date: '14 نوفمبر 2025',
      image: 'images/destruction-gaza.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '03:50 دقيقة',
      speaker: 'فريق الإعلام التوثيقي'
    },
    {
      id: 'med-v5',
      type: 'video',
      title: 'مراسم توقيع مذكرات التفاهم والشراكة مع الهيئات الهندسية',
      description: 'توقيع اتفاقيات التعاون الفني وتأهيل الكوادر الهندسية المحلية لإدارة مشاريع التعافي المبكر والمسح الإنشائي في غزة.',
      tags: ['اتفاقيات دولية', 'دعم هندسي', 'شراكات'],
      date: '02 ديسمبر 2025',
      image: 'images/gaza-partnership.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '11:15 دقيقة',
      speaker: 'م. كمال العبدلات - الأمين العام'
    },
    {
      id: 'med-v6',
      type: 'video',
      title: 'جولة تفقدية لمواقع الفحص الإنشائي وتقييم سلامة المباني',
      description: 'طواقم الخبراء الهندسيين تجري اختبارات السلامة الإنشائية للأبراج والمنشآت لتحديد إمكانية التدعيم أو الإزالة الآمنة.',
      tags: ['سلامة إنشائية', 'حصر أضرار', 'هندسة مدنية'],
      date: '19 ديسمبر 2025',
      image: 'images/aiocp-field-3.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '07:45 دقيقة',
      speaker: 'د. يوسف المنسي - نائب الرئيس'
    },
    {
      id: 'med-3',
      type: 'photo',
      title: 'معرض صور: أعمال تركيب الخيام المجهزة للعائلات في جباليا',
      description: 'توثيق ميداني لأعمال تسوية الأراضي وتركيب الوحدات السكنية المقاومة للعوامل الجوية وتزويدها بالمرافق الحيوية في محافظة الشمال.',
      tags: ['إيواء عاجل', 'مخيمات جباليا', 'إغاثة'],
      date: '18 يوليو 2025',
      image: 'images/destruction-gaza.jpg'
    },
    {
      id: 'med-4',
      type: 'photo',
      title: 'معرض صور: تشغيل بئر مياه بالطاقة الشمسية في خان يونس',
      description: 'صور حصرية لتركيب مصفوفات الطاقة الشمسية وتوصيل المضخات الغاطسة لتأمين مياه الشرب النظيفة للنازحين.',
      tags: ['طاقة متجددة', 'مياه شرب', 'خان يونس'],
      date: '22 سبتمبر 2024',
      image: 'images/water-projects.jpg'
    },
    {
      id: 'med-p3',
      type: 'photo',
      title: 'معرض صور: الآليات الثقيلة تفتح المحاور الحيوية في غزة',
      description: 'لقطات ميدانية ترصد جهود الطواقم والآليات الهندسية التابعة للهيئة في رفع الركام وتأمين مسارات آمنة للإسعاف والإغاثة.',
      tags: ['آليات ثقيلة', 'فتح شوارع', 'مدينة غزة'],
      date: '04 أكتوبر 2025',
      image: 'images/rubble-removal.jpg'
    },
    {
      id: 'med-p4',
      type: 'photo',
      title: 'معرض صور: طواقم المسح الهندسي الميداني وحصر الأضرار',
      description: 'فرق المهندسين الميدانيين أثناء إجراء القياسات الإنشائية وتوثيق الأضرار بالأجهزة الرقمية المتطورة لإعداد المخططات الفنية.',
      tags: ['حصر أضرار', 'مسح هندسي', 'توثيق ميداني'],
      date: '28 أكتوبر 2025',
      image: 'images/aiocp-field-1.jpg'
    },
    {
      id: 'med-p5',
      type: 'photo',
      title: 'معرض صور: توزيع مياه الشرب النقية على مراكز الإيواء',
      description: 'توثيق صهاريج توزيع مياه الشرب الصالحة للاستخدام يومياً لدعم صمود العائلات النازحة في المحافظة الوسطى.',
      tags: ['سقيا ماء', 'أمن مائي', 'الوسطى'],
      date: '11 نوفمبر 2025',
      image: 'images/aiocp-field-2.jpg'
    },
    {
      id: 'med-p6',
      type: 'photo',
      title: 'معرض صور: الجولات التفقدية المشتركة مع الهيئات الدولية',
      description: 'مرافقة وفود المهندسين والخبراء الدوليين لمعاينة المواقع المتضررة ومتابعة تنفيذ مشاريع إعادة الإعمار على الأرض.',
      tags: ['وفود دولية', 'تنسيق هندسي', 'ميدان العمل'],
      date: '15 ديسمبر 2025',
      image: 'images/aiocp-field-5.jpg'
    },
    {
      id: 'med-p7',
      type: 'photo',
      title: 'معرض صور: جلسات مجلس الإدارة واعتماد المخططات التنفيذية',
      description: 'جلسات العمل المتواصلة لإقرار المخططات الهندسية العامة والبرامج التنفيذية لمشاريع التعافي الشامل لقطاع غزة.',
      tags: ['مجلس الإدارة', 'تخطيط استراتيجي', 'اجتماعات'],
      date: '20 ديسمبر 2025',
      image: 'images/board-meeting.jpg'
    },
    {
      id: 'med-5',
      type: 'report',
      title: 'التقرير الهندسي الشامل لحصر أضرار البنية التحتية والقطاع السكني',
      date: 'سبتمبر 2025',
      image: 'images/gaza-partnership.jpg',
      fileSize: '14.8 MB (PDF)',
      downloadUrl: '#'
    },
    {
      id: 'med-6',
      type: 'report',
      title: 'دليل المعايير الفنية للمخيمات النموذجية والوحدات المؤقتة',
      date: 'أغسطس 2025',
      image: 'images/rubble-removal.jpg',
      fileSize: '8.4 MB (PDF)',
      downloadUrl: '#'
    },
    {
      id: 'med-7',
      type: 'interview',
      title: 'حوار خاص: غزة لا تنتظر.. خطط الإعمار يجب أن تبدأ فوراً',
      date: '10 أكتوبر 2025',
      image: 'images/board-meeting.jpg',
      speaker: 'د. يوسف المنسي - نائب رئيس الهيئة'
    }
  ];

  readonly statistics: StatItem[] = [
    {
      value: '+29M$',
      label: 'حجم مذكرات الشراكة',
      sublabel: 'تمويل مباشر لمشاريع الطوارئ وإعادة التأهيل',
      icon: 'dollar'
    },
    {
      value: '+1,500,000',
      label: 'مستفيد ومستفيدة',
      sublabel: 'من خدمات الإيواء والمياه والرعاية الصحية',
      icon: 'users'
    },
    {
      value: '+450',
      label: 'مشروع منجز ونوعي',
      sublabel: 'في البنية التحتية والإسكان والتعليم والمياه',
      icon: 'building'
    },
    {
      value: '+15',
      label: 'عاماً من الريادة',
      sublabel: 'خبرة متخصصة ومصداقية هندسية رفيعة',
      icon: 'shield'
    }
  ];

  readonly strategicPillars = [
    {
      title: 'رؤيتنا',
      subtitle: 'العمران كحق إنساني',
      description: 'أن نكون المنظمة العربية والدولية الرائدة والأكثر موثوقية في هندسة وإعمار فلسطين، وتحويل الألم والدمار إلى عمران حديث ينبض بالأمل والاستدامة للأجيال القادمة.',
      icon: 'eye',
      accent: 'from-blue-600 to-sky-700'
    },
    {
      title: 'رسالتنا',
      subtitle: 'المهنية والشفافية في التنفيذ',
      description: 'حشد الطاقات الهندسية والمالية والإنسانية على مستوى العالم، لتنفيذ مشاريع إعمار وتنمية متكاملة في فلسطين وفق أرفع المعايير الهندسية الدولية وبأعلى درجات الشفافية والمسؤولية.',
      icon: 'flag',
      accent: 'from-amber-500 to-orange-600'
    },
    {
      title: 'أهدافنا الاستراتيجية',
      subtitle: 'أولويات عمل واضحة',
      description: 'إعادة تأهيل وإعمار ما دمره الاحتلال في قطاعات الإسكان والبنية التحتية والمياه، تمكين الكفاءات والشركات الهندسية المحلية، وبناء شراكات فاعلة مع وكالات الأمم المتحدة.',
      icon: 'target',
      accent: 'from-emerald-600 to-teal-700'
    }
  ];

  readonly partners: Partner[] = [
    { 
      id: 'shelter',
      name: 'مجموعة المأوى العالمية',
      code: 'Global Shelter Cluster',
      logo: 'images/memberships/shelter-cluster.webp',
      category: 'الأمم المتحدة',
      categoryKey: 'un',
      description: 'تنسيق وتوفير المأوى الطارئ، الخيام المقاومة للعوامل الجوية، وتأهيل المساكن المتضررة جزئياً لحماية الأسر النازحة.',
      role: 'عضوية وتنسيق عملياتي',
      iconType: 'home'
    },
    { 
      id: 'wash',
      name: 'مجموعة المياه والإصحاح البيئي',
      code: 'Global WASH Cluster',
      logo: 'images/memberships/wash-cluster.webp',
      category: 'الأمم المتحدة',
      categoryKey: 'un',
      description: 'تشغيل وتأهيل آبار المياه، محطات التحلية، شبكات الصرف الصحي، وإيصال مياه الشرب النقية للسكان.',
      role: 'عضوية وتنسيق عملياتي',
      iconType: 'water'
    },
    { 
      id: 'health',
      name: 'مجموعة الصحة العالمية',
      code: 'Global Health Cluster',
      logo: 'images/memberships/health-cluster.webp',
      category: 'الأمم المتحدة',
      categoryKey: 'un',
      description: 'دعم المرافق الصحية والمستشفيات، توفير الطاقة البديلة، وتجهيز النقاط الطبية الميدانية العاجلة.',
      role: 'عضوية وتنسيق عملياتي',
      iconType: 'health'
    },
    { 
      id: 'food',
      name: 'مجموعة الأمن الغذائي والزراعة',
      code: 'Global Food Security Cluster',
      logo: 'images/memberships/food-cluster.webp',
      category: 'الأمم المتحدة',
      categoryKey: 'un',
      description: 'تأمين السلال الغذائية الطارئة، تشغيل المطابخ المركزية والمخابز، ودعم سلاسل الإمداد الإغاثي.',
      role: 'عضوية وتنسيق عملياتي',
      iconType: 'food'
    },
    { 
      id: 'ministry',
      name: 'وزارة الأشغال العامة والإسكان',
      code: 'Ministry of Public Works & Housing',
      logo: 'images/logo-aiocp.webp',
      category: 'مؤسسات حكومية',
      categoryKey: 'gov',
      description: 'الشريك الحكومي الميداني لحصر وتوثيق الأضرار الإنشائية، فتح الطرق الرئيسية، وإزالة آلاف الأطنان من الركام.',
      role: 'شراكة وتنسيق ميداني رسمي',
      iconType: 'gov'
    },
    { 
      id: 'engineers',
      name: 'اتحاد المهندسين العرب',
      code: 'Federation of Arab Engineers',
      logo: 'images/logo-palimar.png',
      category: 'نقابات مهنية',
      categoryKey: 'eng',
      description: 'المظلة النقابية والهندسية للإشراف الفني، تدقيق مخططات الإعمار، واعتماد المعايير وتأهيل الكوادر الفنية.',
      role: 'إشراف نقابي وهندسي عربي',
      iconType: 'engineering'
    }
  ];
}
