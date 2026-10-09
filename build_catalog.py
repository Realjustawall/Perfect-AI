from pathlib import Path
from collections import OrderedDict
import json
ROOT=Path(__file__).resolve().parent
SKILLS=ROOT/'skills'
REF=SKILLS/'perfect-ai-master'/'references'

catalog=OrderedDict([
('components', '''button input textarea select combobox otp-field number-field checkbox-group radio-group switch slider range-slider rating file-upload calendar date-picker command dialog alert-dialog dropdown-menu tooltip sheet tabs pagination breadcrumb stepper sidebar toast alert progress skeleton empty-state badge avatar table stat price timeline accordion kbd prompt-input card data-table chart popover context-menu hover-card carousel combobox-async password-input iban-input phone-input notification-inbox form national-id-input card-number-input plate-input address-picker postal-code-input date-range-picker time-picker amount-input search-input tags-input multi-select toggle segmented-control separator spinner collapsible scroll-area countdown video-player course-outline lesson-note function-plot hotspot-figure quiz'''.split()),
('blocks', '''hero features pricing faq stats testimonials auth-card cta banner navbar logo-cloud feature-split bento steps team contact newsletter product-grid blog-grid comparison dashboard-stats signup-card footer'''.split()),
('charts', '''chart-core line-chart area-chart sparkline bar-chart combo-chart radar-chart pie-chart radial-chart treemap-chart scatter-chart heatmap-chart funnel-chart waterfall-chart candlestick-chart'''.split()),
('animations', '''text-shimmer typewriter counter blur-text animated-tabs border-beam shine-button dock animated-list orbit tilt-card loading-dots marquee reveal word-rotate text-scramble odometer ripple-button magnetic-button progress-ring success-check meteors spotlight-card grid-reveal text-reveal highlight-text gradient-text flip-card animated-beam confetti swipe-to-confirm terminal card-stack morph-button compare-slider scratch-card sparkles scroll-progress pulse-button cursor-follow number-wheel pin-list radial-intro text-loop curved-loop number-pop notification-badge text-swap panel-reveal page-slide icon-swap avatar-hover error-shake clear-input skeleton-reveal fab-morph like-button arrow-link thinking-states reasoning-stream streaming-text matrix-loader banner-stack'''.split()),
('backgrounds', '''grid dots girih hatch aurora spotlight grain retro-grid mesh flicker rings gradient-mesh conic-spin light-leak stars sonar dot-wave aurora-ribbons gradient-grain moving-stripes shader silk fog nebula contour voronoi warp-grid godrays water-ripple dither halftone waves plasma truchet hex-grid marble metaballs kaleidoscope cursor-trail particles moire scanlines iso-cubes liquid-gradient'''.split()),
('templates', '''shop-dashboard auth startup-landing pricing ai-chat invoice blog settings checkout store onboarding admin-orders booking wallet error-pages email saas-landing finance-dashboard food-delivery kanban course receipt travel-search coming-soon real-estate support ride jobs pos crm'''.split()),
('sites', '''agency-site saas-site shop-site clinic-site restaurant-site lodge-site'''.split()),
('design-systems', '''graphite turquoise saffron pomegranate lapis paper'''.split()),
('skills', '''persian-conversational persian-formal persian-ui-copy persian-rtl-ui jalali-calendar iran-validation persian-seo agents-md-persian ui-craft-rules persian-typography parspack-s3-upload zarinpal-payment kavenegar-otp persian-writing'''.split()),
])
expected={'components':78,'blocks':23,'charts':15,'animations':63,'backgrounds':44,'templates':30,'sites':6,'design-systems':6,'skills':14}
for k,v in catalog.items():
 assert len(v)==expected[k],(k,len(v),expected[k]); assert len(set(v))==len(v),(k,'duplicates')

anim_detail={
 'text-shimmer':'درخشش کم‌دامنه روی ماسک روشنایی متن؛ حلقه فقط هنگام مشاهده فعال و در کاهش حرکت خاموش.',
 'typewriter':'نمایش تدریجی خوشه‌های گرافیمی؛ سرعت خواندن قابل تنظیم و متن کامل برای صفحه‌خوان.',
 'counter':'درون‌یابی عدد حقیقی و فرمت `Intl.NumberFormat` در لحظهٔ نمایش؛ عدد ثابت در DOM.',
 'blur-text':'ورود متن با محوشدگی کوتاه، انتقال عمودی و opacity؛ استفاده محدود از blur برای پرفورمنس.',
 'animated-tabs':'اندیکاتور لغزان تب با shared layout و keyboard arrows؛ اندازه‌ها بعد از ریسایز محاسبه شود.',
 'border-beam':'پرتو در امتداد حاشیهٔ کارت؛ فقط روی کارت فعال، جلوگیری از glare روی محتوا.',
 'shine-button':'جاروب روشنایی روی دکمه در hover/focus؛ نام و وضعیت کنترل ثابت می‌ماند.',
 'dock':'بزرگ‌نمایی نرم آیکون‌های نزدیک اشاره‌گر با کران اندازه؛ دسترسی با کلید Tab.',
 'animated-list':'ورود/خروج آیتم‌ها با stagger و کلیدهای پایدار React؛ بدون پرش ارتفاع.',
 'orbit':'چند مسیر مداری با فاز و زاویهٔ مستقل؛ حرکت سینوسی زمان‌بندی‌شده یا spline.',
 'tilt-card':'چرخش ۳بعدی محدود با perspective بر اساس pointer و بازگشت damped؛ touch fallback.',
 'loading-dots':'نمایش وضعیت در حال پردازش با تغییر مقیاس/opacity؛ متن aria-live در کنار آن.',
 'marquee':'تکرار ردیف محتوای تزئینی به‌صورت seamless؛ مکث در فوکوس و reduced-motion.',
 'reveal':'ورود محتوا با intersection observer و opacity/translate؛ نمایش بدون JS.',
 'word-rotate':'تعویض کلمات با translate/fade و فضای محفوظ برای بلندترین عبارت.',
 'text-scramble':'رمزگشایی بصری placeholder به متن نهایی؛ متن دسترس‌پذیر تغییر نکند.',
 'odometer':'ریل ارقام با ترجمهٔ موضعی و tabular nums؛ وضعیت نهایی واقعی.',
 'ripple-button':'دایرهٔ موج از نقطهٔ کلیک، در سطح دکمه clip شود و به focus هم واکنش دهد.',
 'magnetic-button':'جابجایی محدود نسبت به pointer با reset الاستیک؛ حرکت روی موبایل خاموش.',
 'progress-ring':'stroke dashoffset برای پیشرفت ۰ تا ۱۰۰؛ progressbar ARIA.',
 'success-check':'رسم تدریجی مسیر SVG تیک و اعلام موفقیت با متن.',
 'meteors':'خطوط نوری گذرا و کم‌تعداد با transform GPU؛ کاهش تراکم موبایل.',
 'spotlight-card':'نور موضعی بر اساس مختصات pointer؛ کنتراست متن ثابت.',
 'grid-reveal':'روشن‌شدن سلول‌های grid با stagger ردیفی/ستونی و نقطهٔ شروع معلوم.',
 'text-reveal':'آشکارشدن متن از طریق clip و ماسک؛ فارسی و حروف زیرخطی قطع نشوند.',
 'highlight-text':'حرکت underline/highlight پشت واژه، نه روی glyph؛ هدف تمرکز بصری.',
 'gradient-text':'رنگ/روشنایی متحرک داخل متن با پس‌زمینهٔ fallback خوانا.',
 'flip-card':'چرخش ۱۸۰ درجه با `backface-visibility` و محتوای سمت دیگر، دسترس‌پذیری دکمه.',
 'animated-beam':'انتقال نقاط/پرتو روی SVG path میان گره‌ها؛ فاصله و خروج کنترل شود.',
 'confetti':'ذرات کوتاه‌عمر رویداد موفقیت، بدون تولید DOM بی‌پایان.',
 'swipe-to-confirm':'درگ اسلایدر در مسیر محدود، threshold تایید و مسیر جایگزین برای کیبورد.',
 'terminal':'تایپ خروجی ترمینال با سرعت محدود، امکان کپی و screenreader-friendly.',
 'card-stack':'چیدن کارت‌ها با translate/rotate/scale و انتخاب صریح با دکمه.',
 'morph-button':'تغییر حالت دکمه از label به loading/success با اندازهٔ کنترل‌شده.',
 'compare-slider':'لغزندهٔ قبل/بعد با range و clipping، قابل تغییر با کیبورد.',
 'scratch-card':'ماسک پاک‌شدنی روی Canvas با گزینهٔ «نمایش نتیجه» غیرلمسی.',
 'sparkles':'درخشیدن نقاط کوتاه‌عمر با محدودسازی تراکم و تکرار.',
 'scroll-progress':'نشان‌دهندهٔ درصد خواندن بر اساس scrollHeight-clientHeight و لبهٔ RTL.',
 'pulse-button':'نبض آرام scale/opac برای برجسته‌سازی عمل مهم، توقف در کاهش حرکت.',
 'cursor-follow':'نشانگر کمکی تزئینی که mouse را دنبال می‌کند؛ روی لمس و focus غیرفعال.',
 'number-wheel':'گردش چرخ ارقام با snap و تنظیم RTL/LTR درست.',
 'pin-list':'فهرست محتوایی با پنل‌های sticky و پیشرفت اسکرول؛ نمای ستونی ساده موبایل.',
 'radial-intro':'ورود حلقه‌ای آیتم‌ها اطراف مرکز با وقفهٔ stagger و نقطهٔ کانونی.',
 'text-loop':'تکرار حلقوی واژه‌ها با فاصلهٔ متناسب و توقف برای خواندن.',
 'curved-loop':'چیدمان متن بر مسیر منحنی با SVG textPath؛ متن جایگزین تخت.',
 'number-pop':'ظهور ترتیبی ارقام در کارت/شاخص با scale و fade کم‌دامنه.',
 'notification-badge':'افزایش/کاهش مقدار نشانگر به کمک morph عددی و اعلام وضعیت.',
 'text-swap':'تعویض عبارت با mask/translate و کنترل ارتفاع برای جلوگیری از CLS.',
 'panel-reveal':'بازشدن پنل با transform/clip و تمرکز درست محتوا.',
 'page-slide':'انتقال محتوای صفحه با جهت منطقی RTL، بدون خراب‌کردن history.',
 'icon-swap':'تعویض آیکون متناسب با وضعیت واقعی کنترل (مثل play/pause).',
 'avatar-hover':'واکنش avatar به hover/focus با پس‌زمینهٔ ثابت و انیمیشن ملایم.',
 'error-shake':'لرزش کوتاه افقی فیلد و پیام خطای خوانا؛ بدون تکرار بی‌پایان.',
 'clear-input':'محوکردن متن هنگام clear فقط پس از پاک‌سازی state و نگهداشت focus.',
 'skeleton-reveal':'تعویض skeleton با محتوای واقعی بدون CLS، سایز ثابت.',
 'fab-morph':'گسترش دکمهٔ شناور به منوی عملکردها با ترتیب فوکوس و Escape.',
 'like-button':'به‌روزرسانی optimistic پسندیدن و rollback در شکست API.',
 'arrow-link':'حرکت کم‌دامنه فلش به‌سمت مقصد منطقی، hover/focus قابل دسترسی.',
 'thinking-states':'نمایش مراحل در حال پردازش/تمام‌شده با پیام‌های صادقانه و قابل درک.',
 'reasoning-stream':'نمایش جریان توضیحات کار با برچسب وضعیت، بدون ادعای دسترسی به استدلال خصوصی مدل.',
 'streaming-text':'الحاق chunkهای متن بدون caret jump و محدود کردن اعلان‌های screenreader.',
 'matrix-loader':'ریزش نمادهای بصری در یک ناحیهٔ کوچک و کنترل‌شده؛ کاهش حرکت جایگزین.',
 'banner-stack':'صف‌بندی و ورود/خروج نوارهای اعلان همراه مدیریت overflow و focus.'}

bg_detail={
 'grid':'خطوط هم‌فاصله با background-size کنترل‌شده و alpha کم، کیفیت خوب در DPIهای مختلف.',
 'dots':'نقاط تکراری با radial-gradient؛ چگالی وابسته به عرض، کم‌کنتراست زیر متن.',
 'girih':'الگوی هندسی گره‌چینی، تکرار بدون seam و کنترل زاویه و تراکم.',
 'hatch':'هاشورهای موازی/متقاطع با فاصله و کنتراست ساختاری.',
 'aurora':'پردهٔ نرم روشنایی افقی با چند لایه blur و حرکت کند.',
 'spotlight':'گرادیان شعاعی وابسته به نقطهٔ توجه بدون تداخل با UI.',
 'grain':'دانه‌بندی یکنواخت کم‌شدت، بدون noise 2D تازه در هر frame.',
 'retro-grid':'شبکهٔ پرسپکتیو با transform/3D و horizon روشنایی محدود.',
 'mesh':'شبه‌سطح شبکه‌ای با نقاط کنترل و لایه‌های گرادیانی.',
 'flicker':'تغییر آرام luminance، نه سوسوزدن سریع یا خطرناک.',
 'rings':'حلقه‌های هم‌مرکز با radial gradient یا SVG، سایز تطبیقی.',
 'gradient-mesh':'گرادیان مش نقطه‌ای با interpolation نرم و محدودسازی رنگ.',
 'conic-spin':'چرخش آرام گرادیان زاویه‌ای، کاهش حرکت حالت ثابت.',
 'light-leak':'نور لبه‌ای نامنظم، آلفای خیلی کم برای خوانایی متن.',
 'stars':'نقاط پراکندهٔ عمق‌دار با twinkle محدود و تراکم سطحی.',
 'sonar':'دایره‌های انبساط‌یاب با کاهش opacity، بدون مزاحمت محتوا.',
 'dot-wave':'شبکهٔ نقطه‌ای با سینوس فاز فضایی و دامنه کنترل‌شده.',
 'aurora-ribbons':'روبان‌های چندلایهٔ نرم با جابه‌جایی آهسته.',
 'gradient-grain':'گرادیان ملایم همراه نویز ثابت برای جلوگیری از banding.',
 'moving-stripes':'نوارهای مورب با جابه‌جایی آهسته transform و بدون پرش.',
 'shader':'پس‌زمینهٔ GLSL با uniform زمان/رزولوشن و fallback CSS.',
 'silk':'موج‌های پارچه‌ای نرم با نویز انحنایی/lighting.',
 'fog':'لایه‌های مه نیمه‌شفاف با عمق، کاهش افکت روی موبایل.',
 'nebula':'نویز چنداکتاوی ابرگونه در عمق، حفظ ناحیهٔ خالی برای متن.',
 'contour':'منحنی‌های ایزولاین سطحی و فاصلهٔ متغیر.',
 'voronoi':'سلول‌های همسایگی نزدیک‌ترین نقطه و مرزهای کم‌کنتراست.',
 'warp-grid':'تغییر شکل شبکه با جابه‌جایی تابع موج و کنترل anti-alias.',
 'godrays':'پرتوهای شعاعی از منبع نور، بر اساس ماسک/مرحلهٔ postprocess.',
 'water-ripple':'امواج دایره‌ای افت‌دامنه از نقطهٔ تعامل، با decay.',
 'dither':'تبدیل شدت روشنایی به الگوی نقطه‌ای الگوریتمی، بدون flicker.',
 'halftone':'نقاط چاپی با قطر وابسته به روشنایی زمینه.',
 'waves':'موج‌های منظم و چندفرکانسی با خطوط کم‌کنتراست.',
 'plasma':'ترکیب sin/noise فضایی رنگ/روشنایی؛ در مونوکروم به luminance محدود.',
 'truchet':'کاشی‌های هندسی با آرایش زاویه‌ای از seed ثابت.',
 'hex-grid':'کندویی شش‌ضلعی منظم با ضخامت stroke مقیاس‌پذیر.',
 'marble':'رگه‌های سنگی از تابع نویز warped با بُعد روشنایی.',
 'metaballs':'بلاب‌های چسبنده از SDF یا میدان پتانسیل و threshold.',
 'kaleidoscope':'تقارن شعاعی تکرارشونده و کنترل فرکانس الگو.',
 'cursor-trail':'دنبالهٔ اشاره‌گر با pooling و fade خارج از مسیر متن.',
 'particles':'ذرات چندعمقی با seeded RNG، حرکت آرام و محدودسازی GPU.',
 'moire':'الگوهای تداخل خطوط با خطر aliasing؛ فقط در چگالی ایمن.',
 'scanlines':'خطوط افقی کم‌رنگ با فاصله ثابت؛ متن را کدر نکند.',
 'iso-cubes':'مکعب‌های ایزومتریک رسم‌شده با شبکهٔ برداری و سایهٔ کنترل‌شده.',
 'liquid-gradient':'گرادیان روان با میدان جریان آهسته و انتقال بدون banding.'}

skill_guidance={
'persian-conversational': ('متن محاوره‌ای','برای چت پشتیبانی، اعلان‌های محصول و شبکه‌های اجتماعی بنویس. سطح صمیمیت را به مخاطب تنظیم کن. فعل‌ها طبیعی و نیم‌فاصله درست؛ هکسره و کلیشه حذف شود.', 'یک کپشن و پاسخ پشتیبانی با لحن صمیمی اما محترمانه تولید کن و حداقل سه بازنویسی کوتاه ارائه بده.'),
'persian-formal': ('متن اداری','نامه رسمی با موضوع، مخاطب، شرح دقیق، درخواست مشخص و پایان‌بندی حرفه‌ای؛ ادعاهای حقوقی بی‌منبع نکن. جملات کوتاه و تاریخ درست.', 'یک نامه اداری دربارهٔ درخواست بررسی پرونده با شمارهٔ مرجعِ جای‌خالی آماده کن.'),
'persian-ui-copy': ('میکروکپی','برای Button/Label/Placeholder/Help/Error/Toast/Empty/Loading متن کوتاه و عمل‌محور ارائه کن، پیام خطا راه اصلاح نشان دهد.', 'برای فرم ورود/ثبت‌نام پنج پیام خطای دقیق و متن سه وضعیت بنویس.'),
'persian-rtl-ui': ('راست‌چین','CSS منطقی، flex/grid بدون معکوس‌سازی مضاعف، فونت فارسی، اعداد و واحد تومان، bdi برای code/phone/email، arrow صحیح، دسترس‌پذیری.', 'یک کارت محصول RTL با قیمت تومان و دکمهٔ خرید و focus ring بساز.'),
'jalali-calendar': ('تاریخ شمسی','ذخیرهٔ ISO UTC و نمایش شمسی، محدودهٔ زمانی و timezone، شنبه به‌عنوان شروع هفته، تست کبیسه و مرز نوروز.', 'تقویم انتخاب بازهٔ شمسی برای نوبت‌دهی با تست مرز سال و خطای تاریخ نامعتبر بساز.'),
'iran-validation': ('اعتبارسنجی ایران','پذیرش اعداد فارسی/عربی، نرمال‌سازی ورودی، Luhn و mod97 و checksum کد ملی؛ نتیجه را سرور نیز اعتبارسنجی کند.', 'فیلد کدملی/شبا/کارت با نرمال‌سازی و تست نمونه‌های نادرست پیاده کن.'),
'persian-seo': ('سئوی فارسی','meta title/description، lang/fa، hreflang، canonical، breadcrumbs، JSON-LD با inLanguage، اسلاگ پایدار و open graph.', 'صفحهٔ مقالهٔ فارسی را برای Search و Share با URL و متا درست آماده کن.'),
'agents-md-persian': ('قواعد پروژه','قواعد فارسی/RTL/تاریخ/کپی/فونت/تست را به AGENTS.md بدون پاک‌کردن دستورهای قبلی اضافه کن؛ تعارض‌ها را اعلام کن.', 'AGENTS.md موجود را بخوان و فصل زبان/ظاهر فارسی را با حفظ قوانین قبلی اضافه کن.'),
'ui-craft-rules': ('کیفیت UI','پالت نقش‌محور، مقیاس فواصل، حداکثر سه مدل شکل، توکن تایپوگرافی، کنترل ۴۴px، CLS صفر تا حد امکان، جلوگیری از کامپوننت‌های کلیشه‌ای.', 'داشبورد را از نظر سلسله‌مراتب و فواصل و کنتراست بررسی و اصلاح کن.'),
'persian-typography': ('تایپوگرافی فارسی','انتخاب فونت با لایسنس، رندر نیم‌فاصله، بدون letter-spacing منفی، line-height فارسی، LTR inline، tabular figures و Font loading.', 'صفحهٔ فارسی با هدینگ سنگین و متن بلند و کد لاتین را بدون بریدگی حروف بساز.'),
'parspack-s3-upload': ('آپلود امن S3','اعتبارسنجی MIME و signature و size، credentials فقط سرور، upload path یکتا، Content-Type، URL عمومی معتبر، محدودیت دسترسی.', 'API Route آپلود تصویر به سرویس S3 سازگار بساز، بدون hardcode کردن کلیدها.'),
'zarinpal-payment': ('پرداخت امن','وضعیت سفارش pending→verified، تفکیک تومان/ریال، Verify سرور، callback idempotent و log بدون اطلاعات حساس.', 'فلو request→redirect→callback→verify را با وضعیت DB و تست درخواست تکراری بنویس.'),
'kavenegar-otp': ('پیامک OTP','تولید کد کوتاه‌عمر تصادفی امن، ارسال server-side، rate limiting/lockouts، عدم افشای وجود کاربر، پاکسازی کد و ثبت نتیجه.', 'ورود با OTP ایرانی همراه محدودسازی تلاش و انقضا و تست خطا بساز.'),
'persian-writing': ('نگارش فارسی','زبان طبیعی و دقیق، نیم‌فاصله، تیتر کوتاه، پرهیز از تکرار، ارجاع درست و تنظیم لحن برای متن وب.', 'یک توضیح محصول را به فارسی واضح و کوتاه در سه طول بازنویسی کن.'),
}
assert len(anim_detail)==63
assert len(bg_detail)==44
assert len(skill_guidance)==14

api_rules={
'components':('UI component','حالت‌های idle/focus/hover/disabled/validation، قرارداد props/controlled/uncontrolled و کیبورد را تعریف کن.','role/label/focus/keyboard، RTL و موبایل تست شود.'),
'blocks':('Page block','سلسله‌مراتب متن، grid/breakpoint، CTA واقعی، حالات بارگذاری و responsive را مشخص کن.','مدارک سئو/semantics، 320px و بدون JS بررسی شود.'),
'charts':('Data visualization','محور، واحد، ناحیهٔ داده، tooltip و legend را تعریف کن، مقادیر خام را نگه دار.','جدول معادل برای screenreader و اعداد فارسی، contrast check.'),
'animations':('Motion pattern','هدف حرکت، مدت/تابع ease، trigger، حالت ابتدایی/پایانی و cleanup را تعریف کن.','prefers-reduced-motion و وقفهٔ focus/visibility، پرهیز از layout thrash.'),
'backgrounds':('Decorative background','foreground-safe: شدت نور، opacity، فرکانس و fallback CSS را تعریف کن.','کنتراست متن، GPU mobile، کاهش حرکت و عدم pointer-block.'),
'templates':('Full-page template','مسیر صفحه و دادهٔ واقعی، خطا/empty/loading، ناوبری و ترکیب کامپوننت‌ها را تعریف کن.','responsive، SEO یا auth privacy، فرم‌ها و صفحات جایگزین تست شود.'),
'sites':('Multi-page website','نقشهٔ صفحات، routing، content model، shared shell و حریم خصوصی را مشخص کن.','لینک‌های داخلی/404، دسترسی/SEO، device and lighthouse.'),
'design-systems':('Theme tokens','توکن‌های semantic و typography/shape/motion را تولید کن؛ رنگ‌های درون کامپوننت ممنوع.','contrast در light/dark و states، consistency و RTL.'),
'skills':('Agent skill','frontmatter نام/description، when-to-use و دستورات قابل اجرا در Codex را مشخص کن.','آزمون discovery/install و عدم overwrite فایل‌های فعلی.'),
}

def prompt_for(group, slug):
 cat, build, qa=api_rules[group]
 spec = anim_detail.get(slug) if group=='animations' else bg_detail.get(slug) if group=='backgrounds' else (skill_guidance.get(slug) or ('','',''))[1] if group=='skills' else ''
 if not spec:
  if group=='charts': spec=f'«{slug}» را با دادهٔ واقعی و تعامل هدفمند بساز؛ axis/tooltip و کنترل پالت در نمودارها مستند شوند.'
  elif group=='components': spec=f'«{slug}» را به‌صورت React component با API مشخص، states کامل، font Persian و semantics مناسب بساز.'
  elif group=='blocks': spec=f'بلاک «{slug}» را با content contract، CTA، media aspect-ratio و breakpoint مستقل بساز.'
  elif group=='design-systems': spec=f'تم «{slug}» به‌عنوان یک سیستم مستقل از رنگ، border, elevation, radii, typography و motion تعریف شود؛ Perfect_AI پیش‌فرض graphite grayscale است.'
  elif group=='sites': spec=f'سایت «{slug}» را چندصفحه‌ای، route-aware، content-driven با فوتر/header مشترک و دادهٔ واقع‌گرا پیاده‌سازی کن.'
  else: spec=f'قالب «{slug}» صفحهٔ کامل با stateهای empty/loading/error/success و اجزای واقعی باشد.'
 return cat, spec, build, qa

lines=['# VibeFarsi complete public catalog — slug-by-slug implementation reference',
'', '> As listed at https://vibefarsi.ir/skills and https://vibefarsi.ir/docs on 2026-10-09. Official files are NOT copied verbatim. This is an original practical map for Codex: each entry includes a purpose, target behavior, engineering contract and verification criteria. The author\'s current code can be installed with `npx vibefarsi add <slug>` in a compatible project. Some entries are design assets/blocks, not separate Agent Skills.',
'', '**Integration:** VibeFarsi sources are typically CSS/React without Anime.js dependency for its animations. To build an Anime.js variant, reproduce the *intended effect* with Anime.js v4 without claiming its source equals the VibeFarsi implementation. For VibeFarsi original code, use the official CLI and verify terms/license.',
'','## Counts and navigation', '']
for g,slugs in catalog.items():
 lines.append(f'- [{g}](#{g}): **{len(slugs)}** items')
lines+=['','All site catalog items indexed by category: **'+str(sum(len(v) for v in catalog.values()))+'**.', '']
for group,slugs in catalog.items():
 lines+=[f'## {group}', '']
 for i,slug in enumerate(slugs,1):
  cat,spec,build,qa=prompt_for(group,slug)
  groupurl= {'components':'components','blocks':'blocks','charts':'charts','animations':'animations','backgrounds':'backgrounds','templates':'templates','sites':'sites','design-systems':'design-systems','skills':'skills'}[group]
  official = ('git clone https://github.com/ali2000hos/persian-writing ~/.claude/skills/persian-writing' if (group=='skills' and slug=='persian-writing') else f'npx vibefarsi add {slug}')
  lines += [f'### {i}. `{slug}` — {cat}', '',f'- **Goal / behavior:** {spec}', f'- **Engineering:** {build}',f'- **Verification:** {qa}', f'- **Official catalog:** https://vibefarsi.ir/{groupurl}/{slug}',f'- **Official command / upstream (check license and target):** `{official}`','']
lines += ['## Packaging / usage','', '1. Select only relevant items from this catalog and explain why they belong in the UI.','2. If using VibeFarsi real files: run `npx vibefarsi list`, then `npx vibefarsi add slug...` in project root with compatible React + Tailwind v4 and inspect output.','3. If using Perfect_AI custom effects: follow original guidance in `01-animejs-motion.md` and `02-threejs-3d.md`.','4. Keep all external source code licenses; a catalog entry is not a redistributed source implementation.']
(REF/'07-vibefarsi-full-catalog.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')

# Separate local authored Codex-ready skill modules; each has a distinct trigger and testing rubric.
for slug,(label,guide,example) in skill_guidance.items():
 directory=SKILLS/('zt-'+slug)
 directory.mkdir(parents=True,exist_ok=True)
 tech = {
  'persian-conversational':'Test side-by-side neutral vs friendly copy, verify colloquial conjugation consistent with product voice, avoid stigmatizing slang.',
  'persian-formal':'Do not invent titles/names; add subject, explicit purpose, facts with dates, precise request, closure/signature placeholders.',
  'persian-ui-copy':'Define glossary for actions; avoid metaphorical errors; each user message should describe problem and next step.',
  'persian-rtl-ui':'Check margin-inline, padding-inline, border-inline, dir for LTR code; verify mobile and zoom widths.',
  'jalali-calendar':'Round trip `ISO -> Jalali -> ISO` tests at year boundaries; DST zones and leap years.',
  'iran-validation':'Never trust frontend-only checks; rate-limit verification endpoints and normalize numeral forms.',
  'persian-seo':'Metadata correctness with canonical path/hreflang locale pairs and schema validation.',
  'agents-md-persian':'Patch a clearly separated policy block, never replace existing instructions; resolve conflicting agent priority.',
  'ui-craft-rules':'Create inventory of tokens/styles and present a measurable before/after comparison at 320/1440.',
  'persian-typography':'Wait for font load, check glyph joining and ZWNJ, mixed English names and input size on iOS.',
  'parspack-s3-upload':'No public credentials, validate magic bytes, path traversal, access scopes, generated URL and safe server errors.',
  'zarinpal-payment':'Use canonical amount units, verified callback on server, DB unique transaction and at-least-once delivery tolerance.',
  'kavenegar-otp':'Secure random OTP, short TTL, hashed storage, throttle user/IP, no phone enumeration, delete after success.',
  'persian-writing':'Optimize for clarity/readability; fact check claims and maintain meaningful headings and correct punctuation.'}[slug]
 src=f'https://vibefarsi.ir/skills/{slug}'
 content=f'''---
name: zt-{slug}
description: {label} assistant for Codex; apply when building Persian/RTL web products, localizing content or integrating the related Iranian workflow. Local independent adaptation inspired by publicly documented VibeFarsi topics.
---

# Perfect_AI — {label} ({slug})

This **original local Codex skill** is not a verbatim copy of VibeFarsi's official skill. To use the upstream maintained original consult {src}. The external `persian-writing` is installed from its own GitHub repository; all other listed items use `npx vibefarsi add <slug>`.

## Mandatory workflow

1. Read user request, project code, locale/RTL style, existing conventions, and relevant security assumptions.
2. Apply target constraints: {guide}
3. Use accessible semantic UI, role-specific design tokens and a responsive layout. Do not change unrelated files.
4. For this topic: {tech}
5. Write or change working implementation with minimal dependencies and functional feedback. Prefer tested utilities over fresh unverified regex or guessed API signatures.
6. Verify in 320px portrait, 768px tablet, 1440px desktop, zoom 200%, and Persian/LTR mixed text where relevant.
7. Report exactly which automated/browser/security checks were run, what passed and what remains unverified.

## Example Codex task

{example}

## Tests / failure cases

- Empty, incomplete, malformed, mixed-script, unexpected long input, network/offline/API errors; when not applicable explain why.
- Keyboard focus/semantics and reduced-motion parity for animated interfaces.
- Logical CSS positioning and typography on Persian screens.
- If this workflow touches payments, SMS, identity or file uploads, ensure server-side validation, no embedded secrets and appropriate error handling.

## Integration

Read `../perfect-ai-master/references/09-persian-localization.md` and `../perfect-ai-master/references/08-quality-tests.md` if installed. For upstream author's full detail and source code use {src}.
'''
 (directory/'SKILL.md').write_text(content,encoding='utf-8')

# index machine readable
(ROOT/'registry-index.json').write_text(json.dumps({'source':'https://vibefarsi.ir/skills','date':'2026-10-09','total':sum(len(v) for v in catalog.values()),'categories':catalog},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Category counts:',{g:len(v) for g,v in catalog.items()})
print('Total:',sum(map(len,catalog.values())))
print('Catalog lines:',len(lines))
print('Local Codex skills:',len(list(SKILLS.glob('*/SKILL.md'))))
