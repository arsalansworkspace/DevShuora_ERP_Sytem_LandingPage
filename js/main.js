document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();


// Floating Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove("opacity-0", "invisible");
      backToTopButton.classList.add("opacity-100", "visible");
    } else {
      backToTopButton.classList.remove("opacity-100", "visible");
      backToTopButton.classList.add("opacity-0", "invisible");
    }
  });
}


/* DEVSHUORA PAGE INTRO ANIMATION */

function hidePageLoader() {
  const pageLoader = document.getElementById("page-loader");

  if (!pageLoader) return;

  setTimeout(function () {
    pageLoader.classList.add("loader-hidden");

    setTimeout(function () {
      pageLoader.remove();
    }, 700);

  }, 1600);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", hidePageLoader);
} else {
  hidePageLoader();
}


  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const opening = menu.classList.contains("hidden");
      menu.classList.toggle("hidden");
      toggle.setAttribute("aria-expanded", String(opening));
      toggle.setAttribute("aria-label", opening ? "Close navigation menu" : "Open navigation menu");
      toggle.innerHTML = opening
        ? '<i data-lucide="x" class="h-5 w-5"></i>'
        : '<i data-lucide="menu" class="h-5 w-5"></i>';
      if (window.lucide) window.lucide.createIcons();
    });
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      menu.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      toggle.innerHTML = '<i data-lucide="menu" class="h-5 w-5"></i>';
      if (window.lucide) window.lucide.createIcons();
    }));
  }

  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = !item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(row => {
        row.classList.remove("open");
        row.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
      });
      if (open) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add("is-visible"));

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link =>
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
      );
    }), { rootMargin: "-25% 0px -65% 0px" });
    sections.forEach(section => sectionObserver.observe(section));
  }
});





// ==========================================
// DEVSHUORA WEBSITE LANGUAGE SYSTEM
// English, Urdu and Sindhi
// ==========================================

const translations = {

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.features": "Features",
    "nav.benefits": "Benefits",
    "nav.how": "How It Works",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.demo": "Get a Demo",
    "nav.loginERP": "Login to ERP",
    "nav.requestDemo": "Request a Demo",


    "hero.eyebrow": "A smarter way to manage education",
"hero.title1": "Simplify School Management.",
"hero.title2": "Empower Better Education.",
"hero.description": "Bring your school's everyday operations together in one organized platform.",
"hero.demo": "Request a Free Demo",
"hero.features": "Explore Features",
"hero.benefit1": "Connected school workflows",
"hero.benefit2": "Clearer administration",


"about.eyebrow": "Introducing DevShuora",
"about.title1": "Everything Your School Needs.",
"about.title2": "All in One Place.",
"about.description": "Managing a school shouldn't mean managing disconnected systems. DevShuora School ERP brings essential school operations together in one organized platform — helping administrators, teachers and staff manage information, coordinate daily activities and keep important records within reach.",
"about.discover": "Discover the platform",

"about.card1.title": "One Connected Platform",
"about.card1.description": "Bring essential school information and everyday operations together in one place.",

"about.card2.title": "Organized Workflows",
"about.card2.description": "Make routine administrative tasks easier to organize and coordinate.",

"about.card3.title": "Better Record Management",
"about.card3.description": "Keep important school records organized and easier for authorized staff to access.",


"dashboard.eyebrow": "ONE CLEAR OVERVIEW",
"dashboard.title1": "See Your School Operations",
"dashboard.title2": "More Clearly.",
"dashboard.description": "Bring key school information into a central workspace. Help your team find the records and tools they need without jumping between disconnected processes.",

"dashboard.benefit1": "A central view of important school information",
"dashboard.benefit2": "Organized access to everyday management modules",
"dashboard.benefit3": "Reporting support for informed administration",

"dashboard.cta": "See It in Action",



"features.eyebrow": "ONE PLATFORM. CONNECTED OPERATIONS.",
"features.title1": "Everything Your School Needs.",
"features.title2": "Working Together.",
"features.description": "From the first student record to everyday attendance and financial administration, DevShuora brings your school's essential operations into one organized platform.",

"features.student.screen": "STUDENT MANAGEMENT",
"features.student.badge": "STUDENT ADMINISTRATION",
"features.student.title": "Keep Every Student Record Within Reach.",
"features.student.point1": "Student Information",
"features.student.point2": "Student Attendance",
"features.student.point3": "Left and Passed-Out Students",
"features.student.point4": "Student Promotion",
"features.student.point5": "Student Certificates",
"features.student.point6": "Student Gate Pass",
"features.student.link": "Explore DevShuora",

"features.teacher.screen": "TEACHER MANAGEMENT",
"features.teacher.badge": "TEACHER TOOLS & ACADEMIC MANAGEMENT",
"features.teacher.title": "Give Teachers the Tools to Manage Their Classrooms.",
"features.teacher.point1": "Student Attendance",
"features.teacher.point2": "My Timetable",
"features.teacher.point3": "Lesson Plans",
"features.teacher.point4": "Question Papers",
"features.teacher.point5": "Marks & Results",
"features.teacher.link": "Explore Teacher Management",

"features.attendance.screen": "ATTENDANCE MANAGEMENT",
"features.attendance.badge": "DAILY ATTENDANCE",
"features.attendance.title": "A Clearer View of Daily Attendance.",
"features.attendance.point1": "Attendance Overview",
"features.attendance.point2": "Attendance Sessions",
"features.attendance.point3": "Classes",
"features.attendance.point4": "Sections",
"features.attendance.point5": "Class Subjects",
"features.attendance.point6": "Subject Teachers",
"features.attendance.point7": "Timetable & Lesson Plans",
"features.attendance.link": "See how it works",

"features.academic.screen": "ACADEMIC MANAGEMENT",
"features.academic.badge": "ACADEMIC ORGANIZATION",
"features.academic.title": "Bring Structure to Your Academic Operations.",
"features.academic.description": "Keep your school's academic information organized with tools designed to support the management of classes, academic sessions and educational administration.",
"features.academic.point1": "Academic session organization",
"features.academic.point2": "Class and academic administration",
"features.academic.point3": "Centralized academic information",
"features.academic.link": "Explore academic management",

"features.exams.screen": "EXAMINATIONS",
"features.exams.badge": "EXAMINATION MANAGEMENT",
"features.exams.title": "Keep Examination Records Organized.",
"features.exams.point1": "Exams & Date Sheets",
"features.exams.point2": "Marks Entry",
"features.exams.point3": "Results & Report Cards",
"features.exams.point4": "Question Papers & Grading Systems",
"features.exams.link": "Explore examination management",

"features.staff.screen": "STAFF MANAGEMENT",
"features.staff.badge": "STAFF ADMINISTRATION",
"features.staff.title": "Manage Your School Team with Greater Clarity.",
"features.staff.point1": "Teachers & Staff",
"features.staff.point2": "Staff Management",
"features.staff.point3": "Leave Requests",
"features.staff.point4": "Teacher Messages",
"features.staff.link": "Explore staff management",

"features.finance.screen": "FINANCE & FEES",
"features.finance.badge": "FINANCE & FEE MANAGEMENT",
"features.finance.title": "Bring More Organization to School Finances.",
"features.finance.point1": "Fee Collection",
"features.finance.point2": "Fee Dues, History & Ledger",
"features.finance.point3": "Fee Structure & Concessions",
"features.finance.point4": "Accounts & Expenses",
"features.finance.point5": "Payroll Management",
"features.finance.link": "Explore finance management",

"features.reports.screen": "REPORTS & ANALYTICS",
"features.reports.badge": "REPORTING & INSIGHTS",
"features.reports.title": "Turn School Information into Clearer Insights.",
"features.reports.point1": "Student Information & Academic Reports",
"features.reports.point2": "Student & Staff Attendance Reports",
"features.reports.point3": "Fees, Collections & Financial Reports",
"features.reports.point4": "Staff, Payroll & Examination Reports",
"features.reports.point5": "Academic & Administrative Activity Reports",
"features.reports.link": "Explore reports & analytics",

"features.notifications.screen": "NOTIFICATIONS",
"features.notifications.badge": "SCHOOL NOTIFICATIONS",
"features.notifications.title": "Keep Everyone Informed and Connected.",
"features.notifications.point1": "School Announcements & Notices",
"features.notifications.point2": "Student & Parent Notifications",
"features.notifications.point3": "Teacher & Staff Updates",
"features.notifications.point4": "Important Reminders & Alerts",
"features.notifications.point5": "Centralized School Communication",
"features.notifications.link": "Explore notifications",

"features.bottomTitle": "Ready to see DevShuora in action?",
"features.bottomDescription": "Explore how one connected platform can help organize your school's everyday operations.",
"features.bottomButton": "Request a Free Demo",



"roles.eyebrow": "MADE FOR YOUR SCHOOL COMMUNITY",
"roles.title1": "One Platform.",
"roles.title2": "Different Roles. Shared Goals.",
"roles.description": "Bring the people who keep your school moving into a more connected way of working. Give every role access to the tools and information relevant to them.",

"roles.owner.title": "Owners & Principals",
"roles.owner.description": "Oversee school operations and access important management information.",

"roles.admin.title": "Administrators",
"roles.admin.description": "Coordinate daily administrative tasks and manage school records.",

"roles.teacher.title": "Teachers",
"roles.teacher.description": "Access relevant academic, attendance and classroom management tools.",

"roles.student.title": "Students",
"roles.student.description": "Stay connected with relevant academic and school information.",

"roles.parent.title": "Parents",
"roles.parent.description": "Stay informed about their child's school journey and progress.",

  
"benefits.eyebrow": "The DevShuora Difference",
"benefits.title1": "Less Administrative Complexity.",
"benefits.title2": "More Focus on Education.",
"benefits.description": "Give your team a more organized way to handle essential school processes, so they can spend less time managing scattered information and more time supporting students.",
"benefits.cta": "Talk to Our Team",

"benefits.card1.title": "Connected Workflows",
"benefits.card1.description": "Bring essential school activities together in one platform.",

"benefits.card2.title": "Organized Records",
"benefits.card2.description": "Keep important student and school information structured.",

"benefits.card3.title": "Simpler Daily Tasks",
"benefits.card3.description": "Support teams with accessible tools for recurring processes.",

"benefits.card4.title": "Clearer Insights",
"benefits.card4.description": "Use reports to understand school activity and records.",

"how.eyebrow": "HOW IT WORKS",
"how.title1": "From Getting Started to",
"how.title2": "Smarter Management.",
"how.description": "A straightforward process to introduce DevShuora ERP into your school and bring essential management activities together.",

"how.step1.label": "First Step",
"how.step1.title": "Get in Touch",
"how.step1.description": "Share your school's requirements, current processes and management challenges with our team.",
"how.step1.footer": "Understand Your Needs",

"how.step2.label": "Second Step",
"how.step2.title": "Explore the ERP",
"how.step2.description": "Discover the platform, explore its modules and understand how it can support your school.",
"how.step2.footer": "Discover the Platform",

"how.step3.label": "Third Step",
"how.step3.title": "Set Up Your School",
"how.step3.description": "Organize your school structure, configure relevant settings and prepare the required records.",
"how.step3.footer": "Prepare Your System",

"how.step4.label": "Final Step",
"how.step4.title": "Manage with Clarity",
"how.step4.description": "Start using connected tools to organize everyday school management activities.",
"how.step4.footer": "Everyday Management",

"how.bottomText": "Ready to bring your school's operations together?",
"how.bottomCta": "Get Started Today",



"faq.eyebrow": "Need to know more?",
"faq.title1": "Frequently Asked",
"faq.title2": "Questions",
"faq.description": "Have a question about DevShuora School ERP? Here are a few helpful starting points.",
"faq.link": "Ask us a question",

"faq.q1": "What is DevShuora School ERP?",
"faq.a1": "DevShuora School ERP is a school management platform designed to bring essential administrative and academic workflows together, including student records, attendance, examinations, staff and finance.",

"faq.q2": "Who can use the platform?",
"faq.a2": "The platform is intended to support different members of a school community, including owners, principals, administrators, teachers, students and parents, depending on the modules and access configured for the school.",

"faq.q3": "Can we see the ERP before getting started?",
"faq.a3": "Yes. Use the demo request link to contact the DevShuora team and ask for a walkthrough of the platform.",

"faq.q4": "How can our school get in touch?",
"faq.a4": "Send your details through the contact link and the DevShuora team can follow up about your school's requirements.",


"contact.eyebrow": "Let's move education forward",
"contact.title": "Ready to Make School Management Simpler?",
"contact.description": "Tell us about your school and discover how DevShuora School ERP can support your everyday operations.",
"contact.demo": "Request a Demo",
"contact.login": "Go to ERP Login",




"footer.description": "A connected platform for more organized school management. Simplify everyday operations and bring your school community closer together.",
"footer.login": "Access ERP Login",

"footer.explore": "Explore",
"footer.home": "Home",
"footer.about": "About Us",
"footer.features": "Features",
"footer.benefits": "Benefits",
"footer.how": "How It Works",

"footer.school": "For Your School",
"footer.owners": "School Owners",
"footer.administrators": "Administrators",
"footer.teachers": "Teachers",
"footer.parents": "Parents & Students",
"footer.demo": "Request a Demo",

"footer.contact": "Get in Touch",
"footer.contactDescription": "Have questions about DevShuora School ERP? Get in touch with our team to learn more about the platform.",
"footer.emailLabel": "Email Us",

"footer.copyright": "DevShuora Solutions. All rights reserved.",
"footer.privacy": "Privacy Policy",
"footer.terms": "Terms of Service",
"footer.top": "Back to Top",





},

  ur: {
    "nav.home": "ہوم",
    "nav.about": "ہمارے بارے میں",
    "nav.features": "خصوصیات",
    "nav.benefits": "فوائد",
    "nav.how": "طریقہ کار",
    "nav.contact": "رابطہ",
    "nav.login": "لاگ اِن",
    "nav.demo": "ڈیمو حاصل کریں",
    "nav.loginERP": "ای آر پی میں لاگ اِن کریں",
    "nav.requestDemo": "ڈیمو کی درخواست کریں",


    "hero.eyebrow": "تعلیم کے انتظام کا ایک بہتر طریقہ",
"hero.title1": "اسکول کے انتظام کو آسان بنائیں۔",
"hero.title2": "بہتر تعلیم کو فروغ دیں۔",
"hero.description": "اپنے اسکول کے روزمرہ امور کو ایک منظم پلیٹ فارم پر یکجا کریں۔",
"hero.demo": "مفت ڈیمو حاصل کریں",
"hero.features": "خصوصیات دیکھیں",
"hero.benefit1": "اسکول کے مربوط امور",
"hero.benefit2": "آسان انتظامی امور",

"about.eyebrow": "ڈیو شوورا کا تعارف",
"about.title1": "آپ کے اسکول کی ہر ضرورت۔",
"about.title2": "سب کچھ ایک ہی جگہ پر۔",
"about.description": "اسکول کا انتظام کرنے کا مطلب مختلف نظاموں کو الگ الگ سنبھالنا نہیں ہونا چاہیے۔ DevShuora School ERP اسکول کے اہم امور کو ایک منظم پلیٹ فارم پر یکجا کرتا ہے، جس سے منتظمین، اساتذہ اور عملہ معلومات کا انتظام، روزمرہ سرگرمیوں میں ہم آہنگی اور اہم ریکارڈ تک آسان رسائی حاصل کر سکتے ہیں۔",
"about.discover": "پلیٹ فارم کے بارے میں جانیں",

"about.card1.title": "ایک مربوط پلیٹ فارم",
"about.card1.description": "اسکول کی اہم معلومات اور روزمرہ کے امور کو ایک ہی جگہ پر یکجا کریں۔",

"about.card2.title": "منظم طریقہ کار",
"about.card2.description": "روزمرہ کے انتظامی کاموں کو منظم اور مربوط بنانا آسان بنائیں۔",

"about.card3.title": "ریکارڈ کا بہتر انتظام",
"about.card3.description": "اسکول کے اہم ریکارڈ کو منظم رکھیں تاکہ مجاز عملہ آسانی سے ان تک رسائی حاصل کر سکے۔",
  

"dashboard.eyebrow": "ایک واضح مجموعی جائزہ",
"dashboard.title1": "اپنے اسکول کے تمام امور",
"dashboard.title2": "زیادہ بہتر انداز میں دیکھیں۔",
"dashboard.description": "اسکول کی اہم معلومات کو ایک مرکزی پلیٹ فارم پر یکجا کریں۔ اپنی ٹیم کو مختلف نظاموں کے درمیان منتقل ہوئے بغیر مطلوبہ ریکارڈ اور ٹولز تک رسائی فراہم کریں۔",

"dashboard.benefit1": "اسکول کی اہم معلومات کا ایک مرکزی جائزہ",
"dashboard.benefit2": "روزمرہ انتظامی ماڈیولز تک منظم رسائی",
"dashboard.benefit3": "بہتر انتظامی فیصلوں کے لیے رپورٹس کی سہولت",

"dashboard.cta": "عملی طور پر دیکھیں",



"features.eyebrow": "ایک پلیٹ فارم۔ تمام امور مربوط۔",
"features.title1": "آپ کے اسکول کی ہر ضرورت۔",
"features.title2": "سب ایک ساتھ۔",
"features.description": "طلبہ کے ابتدائی ریکارڈ سے لے کر روزانہ حاضری اور مالی انتظام تک، DevShuora آپ کے اسکول کے تمام ضروری امور کو ایک منظم پلیٹ فارم پر یکجا کرتا ہے۔",

"features.student.screen": "طلبہ کا انتظام",
"features.student.badge": "طلبہ کی انتظامی معلومات",
"features.student.title": "ہر طالب علم کا ریکارڈ آسانی سے حاصل کریں۔",
"features.student.point1": "طلبہ کی معلومات",
"features.student.point2": "طلبہ کی حاضری",
"features.student.point3": "اسکول چھوڑنے اور فارغ التحصیل طلبہ کا ریکارڈ",
"features.student.point4": "طلبہ کی اگلی جماعت میں ترقی",
"features.student.point5": "طلبہ کے سرٹیفکیٹس",
"features.student.point6": "طلبہ کے گیٹ پاس",
"features.student.link": "DevShuora کے بارے میں جانیں",

"features.teacher.screen": "اساتذہ کا انتظام",
"features.teacher.badge": "اساتذہ کے ٹولز اور تعلیمی انتظام",
"features.teacher.title": "اساتذہ کو اپنی کلاسز کے انتظام کے لیے ضروری ٹولز دیں۔",
"features.teacher.point1": "طلبہ کی حاضری",
"features.teacher.point2": "میرا ٹائم ٹیبل",
"features.teacher.point3": "سبق کے منصوبے",
"features.teacher.point4": "سوالیہ پرچے",
"features.teacher.point5": "نمبر اور نتائج",
"features.teacher.link": "اساتذہ کے انتظام کے بارے میں جانیں",

"features.attendance.screen": "حاضری کا انتظام",
"features.attendance.badge": "روزانہ حاضری",
"features.attendance.title": "روزانہ حاضری کا واضح جائزہ۔",
"features.attendance.point1": "حاضری کا جائزہ",
"features.attendance.point2": "حاضری کے سیشنز",
"features.attendance.point3": "کلاسز",
"features.attendance.point4": "سیکشنز",
"features.attendance.point5": "کلاس کے مضامین",
"features.attendance.point6": "مضامین کے اساتذہ",
"features.attendance.point7": "ٹائم ٹیبل اور سبق کے منصوبے",
"features.attendance.link": "جانیں یہ کیسے کام کرتا ہے",

"features.academic.screen": "تعلیمی انتظام",
"features.academic.badge": "تعلیمی تنظیم",
"features.academic.title": "اپنے تعلیمی امور کو منظم بنائیں۔",
"features.academic.description": "اپنے اسکول کی تعلیمی معلومات کو ایسے ٹولز کے ذریعے منظم رکھیں جو کلاسز، تعلیمی سیشنز اور تعلیمی انتظام میں معاونت فراہم کرتے ہیں۔",
"features.academic.point1": "تعلیمی سیشنز کا انتظام",
"features.academic.point2": "کلاسز اور تعلیمی امور کا انتظام",
"features.academic.point3": "تعلیمی معلومات ایک جگہ پر",
"features.academic.link": "تعلیمی انتظام کے بارے میں جانیں",

"features.exams.screen": "امتحانات",
"features.exams.badge": "امتحانات کا انتظام",
"features.exams.title": "امتحانات کے ریکارڈ کو منظم رکھیں۔",
"features.exams.point1": "امتحانات اور ڈیٹ شیٹس",
"features.exams.point2": "نمبروں کا اندراج",
"features.exams.point3": "نتائج اور رپورٹ کارڈز",
"features.exams.point4": "سوالیہ پرچے اور گریڈنگ سسٹم",
"features.exams.link": "امتحانی انتظام کے بارے میں جانیں",

"features.staff.screen": "عملے کا انتظام",
"features.staff.badge": "عملے کی انتظامی معلومات",
"features.staff.title": "اپنی اسکول ٹیم کا بہتر انداز میں انتظام کریں۔",
"features.staff.point1": "اساتذہ اور عملہ",
"features.staff.point2": "عملے کا انتظام",
"features.staff.point3": "چھٹی کی درخواستیں",
"features.staff.point4": "اساتذہ کے پیغامات",
"features.staff.link": "عملے کے انتظام کے بارے میں جانیں",

"features.finance.screen": "مالیات اور فیس",
"features.finance.badge": "مالی اور فیس کا انتظام",
"features.finance.title": "اسکول کے مالی معاملات کو منظم بنائیں۔",
"features.finance.point1": "فیس کی وصولی",
"features.finance.point2": "واجب الادا فیس، تاریخ اور لیجر",
"features.finance.point3": "فیس کا ڈھانچہ اور رعایتیں",
"features.finance.point4": "اکاؤنٹس اور اخراجات",
"features.finance.point5": "تنخواہوں کا انتظام",
"features.finance.link": "مالی انتظام کے بارے میں جانیں",

"features.reports.screen": "رپورٹس اور تجزیات",
"features.reports.badge": "رپورٹس اور اہم معلومات",
"features.reports.title": "اسکول کی معلومات سے واضح نتائج حاصل کریں۔",
"features.reports.point1": "طلبہ کی معلومات اور تعلیمی رپورٹس",
"features.reports.point2": "طلبہ اور عملے کی حاضری کی رپورٹس",
"features.reports.point3": "فیس، وصولی اور مالی رپورٹس",
"features.reports.point4": "عملے، تنخواہوں اور امتحانات کی رپورٹس",
"features.reports.point5": "تعلیمی اور انتظامی سرگرمیوں کی رپورٹس",
"features.reports.link": "رپورٹس اور تجزیات کے بارے میں جانیں",

"features.notifications.screen": "اطلاعات",
"features.notifications.badge": "اسکول کی اطلاعات",
"features.notifications.title": "سب کو باخبر اور ایک دوسرے سے منسلک رکھیں۔",
"features.notifications.point1": "اسکول کے اعلانات اور نوٹسز",
"features.notifications.point2": "طلبہ اور والدین کے لیے اطلاعات",
"features.notifications.point3": "اساتذہ اور عملے کی تازہ معلومات",
"features.notifications.point4": "اہم یاد دہانیاں اور الرٹس",
"features.notifications.point5": "اسکول کا مرکزی رابطہ نظام",
"features.notifications.link": "اطلاعات کے بارے میں جانیں",

"features.bottomTitle": "کیا آپ DevShuora کو عملی طور پر دیکھنے کے لیے تیار ہیں؟",
"features.bottomDescription": "جانیں کہ ایک مربوط پلیٹ فارم آپ کے اسکول کے روزمرہ امور کو منظم کرنے میں کس طرح مدد کر سکتا ہے۔",
"features.bottomButton": "مفت ڈیمو کی درخواست کریں",



"roles.eyebrow": "آپ کی اسکول کمیونٹی کے لیے بنایا گیا",
"roles.title1": "ایک پلیٹ فارم۔",
"roles.title2": "مختلف ذمہ داریاں۔ مشترکہ مقاصد۔",
"roles.description": "اسکول کے تمام اہم افراد کو ایک مربوط طریقۂ کار کے تحت یکجا کریں۔ ہر فرد کو اس کے کردار کے مطابق متعلقہ ٹولز اور معلومات تک رسائی فراہم کریں۔",

"roles.owner.title": "مالکان اور پرنسپلز",
"roles.owner.description": "اسکول کے امور کی نگرانی کریں اور انتظام سے متعلق اہم معلومات تک رسائی حاصل کریں۔",

"roles.admin.title": "منتظمین",
"roles.admin.description": "روزمرہ کے انتظامی کاموں میں ہم آہنگی پیدا کریں اور اسکول کے ریکارڈ کا انتظام کریں۔",

"roles.teacher.title": "اساتذہ",
"roles.teacher.description": "تعلیمی سرگرمیوں، حاضری اور کلاس روم کے انتظام سے متعلق ٹولز تک رسائی حاصل کریں۔",

"roles.student.title": "طلبہ",
"roles.student.description": "تعلیمی اور اسکول سے متعلق اہم معلومات سے باخبر رہیں۔",

"roles.parent.title": "والدین",
"roles.parent.description": "اپنے بچوں کی تعلیمی سرگرمیوں اور پیش رفت سے باخبر رہیں۔",


"benefits.eyebrow": "ڈیو شوورا کی نمایاں خصوصیات",
"benefits.title1": "انتظامی پیچیدگیاں کم کریں۔",
"benefits.title2": "تعلیم پر زیادہ توجہ دیں۔",
"benefits.description": "اپنی ٹیم کو اسکول کے ضروری امور منظم طریقے سے سنبھالنے میں مدد دیں، تاکہ وہ بکھری ہوئی معلومات کو سنبھالنے میں کم وقت لگائیں اور طلبہ کی بہتر معاونت پر زیادہ توجہ دے سکیں۔",
"benefits.cta": "ہماری ٹیم سے رابطہ کریں",

"benefits.card1.title": "مربوط طریقہ کار",
"benefits.card1.description": "اسکول کی ضروری سرگرمیوں کو ایک ہی پلیٹ فارم پر یکجا کریں۔",

"benefits.card2.title": "منظم ریکارڈ",
"benefits.card2.description": "طلبہ اور اسکول کی اہم معلومات کو منظم رکھیں۔",

"benefits.card3.title": "روزمرہ کے آسان کام",
"benefits.card3.description": "روزمرہ کے بار بار ہونے والے کاموں کے لیے ٹیم کو آسان ٹولز فراہم کریں۔",

"benefits.card4.title": "واضح معلومات",
"benefits.card4.description": "اسکول کی سرگرمیوں اور ریکارڈ کو سمجھنے کے لیے رپورٹس استعمال کریں۔",

"how.eyebrow": "یہ کیسے کام کرتا ہے",
"how.title1": "آغاز سے لے کر",
"how.title2": "بہتر انتظام تک۔",
"how.description": "DevShuora ERP کو اپنے اسکول میں متعارف کروانے اور ضروری انتظامی امور کو ایک جگہ یکجا کرنے کا ایک آسان طریقہ۔",

"how.step1.label": "پہلا مرحلہ",
"how.step1.title": "ہم سے رابطہ کریں",
"how.step1.description": "اپنے اسکول کی ضروریات، موجودہ طریقہ کار اور انتظامی مسائل کے بارے میں ہماری ٹیم کو بتائیں۔",
"how.step1.footer": "آپ کی ضروریات کو سمجھنا",

"how.step2.label": "دوسرا مرحلہ",
"how.step2.title": "ERP کا جائزہ لیں",
"how.step2.description": "پلیٹ فارم کو دیکھیں، اس کے ماڈیولز دریافت کریں اور سمجھیں کہ یہ آپ کے اسکول کی کس طرح مدد کر سکتا ہے۔",
"how.step2.footer": "پلیٹ فارم کو دریافت کریں",

"how.step3.label": "تیسرا مرحلہ",
"how.step3.title": "اپنا اسکول ترتیب دیں",
"how.step3.description": "اپنے اسکول کا ڈھانچہ منظم کریں، ضروری سیٹنگز ترتیب دیں اور مطلوبہ ریکارڈ تیار کریں۔",
"how.step3.footer": "اپنا سسٹم تیار کریں",

"how.step4.label": "آخری مرحلہ",
"how.step4.title": "بہتر انداز میں انتظام کریں",
"how.step4.description": "روزمرہ اسکول کے انتظامی امور کو منظم کرنے کے لیے مربوط ٹولز کا استعمال شروع کریں۔",
"how.step4.footer": "روزمرہ انتظام",

"how.bottomText": "کیا آپ اپنے اسکول کے تمام امور کو ایک جگہ یکجا کرنے کے لیے تیار ہیں؟",
"how.bottomCta": "آج ہی آغاز کریں",



"faq.eyebrow": "مزید جاننا چاہتے ہیں؟",
"faq.title1": "اکثر پوچھے جانے والے",
"faq.title2": "سوالات",
"faq.description": "کیا آپ کے پاس DevShuora School ERP کے بارے میں کوئی سوال ہے؟ یہاں چند اہم سوالات کے جوابات موجود ہیں۔",
"faq.link": "ہم سے سوال پوچھیں",

"faq.q1": "DevShuora School ERP کیا ہے؟",
"faq.a1": "DevShuora School ERP اسکول کے انتظام کا ایک پلیٹ فارم ہے جو طلبہ کے ریکارڈ، حاضری، امتحانات، عملے اور مالی امور سمیت اہم انتظامی اور تعلیمی کاموں کو ایک جگہ یکجا کرتا ہے۔",

"faq.q2": "اس پلیٹ فارم کو کون استعمال کر سکتا ہے؟",
"faq.a2": "یہ پلیٹ فارم اسکول کے مختلف افراد کی معاونت کے لیے بنایا گیا ہے، جن میں مالکان، پرنسپلز، منتظمین، اساتذہ، طلبہ اور والدین شامل ہیں۔ دستیاب سہولیات اور رسائی کا انحصار اسکول کی ترتیب اور منتخب ماڈیولز پر ہوتا ہے۔",

"faq.q3": "کیا ہم شروع کرنے سے پہلے ERP دیکھ سکتے ہیں؟",
"faq.a3": "جی ہاں۔ ڈیمو کی درخواست کے لنک کے ذریعے DevShuora ٹیم سے رابطہ کریں اور پلیٹ فارم کا عملی تعارف حاصل کریں۔",

"faq.q4": "ہمارا اسکول آپ سے کیسے رابطہ کر سکتا ہے؟",
"faq.a4": "رابطہ فارم کے ذریعے اپنی تفصیلات بھیجیں۔ DevShuora ٹیم آپ کے اسکول کی ضروریات کے بارے میں آپ سے رابطہ کر سکتی ہے۔",



"contact.eyebrow": "آئیے تعلیم کو آگے بڑھائیں",
"contact.title": "کیا آپ اسکول کا انتظام آسان بنانے کے لیے تیار ہیں؟",
"contact.description": "اپنے اسکول کے بارے میں ہمیں بتائیں اور جانیں کہ DevShuora School ERP آپ کے روزمرہ انتظامی امور میں کس طرح مدد کر سکتا ہے۔",
"contact.demo": "ڈیمو کی درخواست کریں",
"contact.login": "ERP میں لاگ اِن کریں",



"footer.description": "اسکول کے بہتر انتظام کے لیے ایک مربوط پلیٹ فارم۔ روزمرہ کے امور کو آسان بنائیں اور اسکول کی کمیونٹی کو ایک دوسرے کے قریب لائیں۔",
"footer.login": "ERP میں لاگ اِن کریں",

"footer.explore": "مزید جانیں",
"footer.home": "ہوم",
"footer.about": "ہمارے بارے میں",
"footer.features": "خصوصیات",
"footer.benefits": "فوائد",
"footer.how": "طریقہ کار",

"footer.school": "آپ کے اسکول کے لیے",
"footer.owners": "اسکول کے مالکان",
"footer.administrators": "منتظمین",
"footer.teachers": "اساتذہ",
"footer.parents": "والدین اور طلبہ",
"footer.demo": "ڈیمو کی درخواست کریں",

"footer.contact": "رابطہ کریں",
"footer.contactDescription": "کیا آپ کے پاس DevShuora School ERP کے بارے میں سوالات ہیں؟ پلیٹ فارم کے بارے میں مزید جاننے کے لیے ہماری ٹیم سے رابطہ کریں۔",
"footer.emailLabel": "ہمیں ای میل کریں",

"footer.copyright": "DevShuora Solutions۔ جملہ حقوق محفوظ ہیں۔",
"footer.privacy": "رازداری کی پالیسی",
"footer.terms": "سروس کی شرائط",
"footer.top": "اوپر جائیں",

},

  sd: {
    "nav.home": "گهر",
    "nav.about": "اسان بابت",
    "nav.features": "خاصيتون",
    "nav.benefits": "فائدا",
    "nav.how": "ڪم ڪرڻ جو طريقو",
    "nav.contact": "رابطو",
    "nav.login": "لاگ اِن",
    "nav.demo": "ڊيمو حاصل ڪريو",
    "nav.loginERP": "اي آر پي ۾ لاگ اِن ڪريو",
    "nav.requestDemo": "ڊيمو جي درخواست ڪريو",


    "hero.eyebrow": "تعليم جي انتظام جو هڪ بهتر طريقو",
"hero.title1": "اسڪول جو انتظام آسان بڻايو.",
"hero.title2": "بهتر تعليم کي هٿي ڏيو.",
"hero.description": "پنهنجي اسڪول جا روزمره ڪم هڪ منظم پليٽ فارم تي گڏ ڪريو،",
"hero.demo": "مفت ڊيمو حاصل ڪريو",
"hero.features": "خاصيتون ڏسو",
"hero.benefit1": "اسڪول جا گڏيل ڪم",
"hero.benefit2": "آسان انتظامي ڪم",



"about.eyebrow": "ڊيو شوورا جو تعارف",
"about.title1": "توهان جي اسڪول جون سڀ ضرورتون.",
"about.title2": "سڀ ڪجهه هڪ ئي هنڌ تي.",
"about.description": "اسڪول جو انتظام ڪرڻ جو مطلب مختلف نظامن کي الڳ الڳ سنڀالڻ نه هجڻ گهرجي. DevShuora School ERP اسڪول جا اهم ڪم هڪ منظم پليٽ فارم تي گڏ ڪري ٿو، جنهن سان منتظم، استاد ۽ اسٽاف معلومات سنڀالي سگهن ٿا، روزمره جي سرگرمين ۾ هم آهنگي آڻي سگهن ٿا ۽ اهم رڪارڊ تائين آساني سان پهچي سگهن ٿا.",
"about.discover": "پليٽ فارم بابت ڄاڻ حاصل ڪريو",

"about.card1.title": "هڪ گڏيل پليٽ فارم",
"about.card1.description": "اسڪول جي اهم معلومات ۽ روزمره جي ڪمن کي هڪ ئي هنڌ گڏ ڪريو.",

"about.card2.title": "منظم ڪم جا طريقا",
"about.card2.description": "روزمره جي انتظامي ڪمن کي منظم ڪرڻ ۽ انهن ۾ هم آهنگي آڻڻ آسان بڻايو.",

"about.card3.title": "رڪارڊ جو بهتر انتظام",
"about.card3.description": "اسڪول جا اهم رڪارڊ منظم رکو ته جيئن اجازت رکندڙ اسٽاف انهن تائين آساني سان پهچي سگهي.",
 

"dashboard.eyebrow": "هڪ واضح مجموعي جائزو",
"dashboard.title1": "پنهنجي اسڪول جا ڪم",
"dashboard.title2": "وڌيڪ بهتر نموني ڏسو.",
"dashboard.description": "اسڪول جي اهم معلومات کي هڪ مرڪزي پليٽ فارم تي گڏ ڪريو. پنهنجي ٽيم کي مختلف نظامن جي وچ ۾ وڃڻ کان سواءِ گهربل رڪارڊ ۽ اوزارن تائين رسائي ڏيو.",

"dashboard.benefit1": "اسڪول جي اهم معلومات جو هڪ مرڪزي جائزو",
"dashboard.benefit2": "روزمره انتظامي ماڊيولز تائين منظم رسائي",
"dashboard.benefit3": "بهتر انتظام لاءِ رپورٽن جي سهولت",

"dashboard.cta": "عملي طور ڏسو",



"features.eyebrow": "هڪ پليٽ فارم. سڀ ڪم گڏيل.",
"features.title1": "توهان جي اسڪول جون سڀ ضرورتون.",
"features.title2": "سڀ گڏجي ڪم ڪن ٿا.",
"features.description": "شاگردن جي پهرين رڪارڊ کان وٺي روزاني حاضري ۽ مالي انتظام تائين، DevShuora توهان جي اسڪول جا ضروري ڪم هڪ منظم پليٽ فارم تي گڏ ڪري ٿو.",

"features.student.screen": "شاگردن جو انتظام",
"features.student.badge": "شاگردن جي انتظاميه",
"features.student.title": "هر شاگرد جو رڪارڊ آساني سان حاصل ڪريو.",
"features.student.point1": "شاگردن جي معلومات",
"features.student.point2": "شاگردن جي حاضري",
"features.student.point3": "اسڪول ڇڏيندڙ ۽ پاس آئوٽ شاگردن جو رڪارڊ",
"features.student.point4": "شاگردن کي ايندڙ ڪلاس ۾ ترقي ڏيڻ",
"features.student.point5": "شاگردن جا سرٽيفڪيٽ",
"features.student.point6": "شاگردن جا گيٽ پاس",
"features.student.link": "DevShuora بابت ڄاڻو",

"features.teacher.screen": "استادن جو انتظام",
"features.teacher.badge": "استادن جا اوزار ۽ تعليمي انتظام",
"features.teacher.title": "استادن کي پنهنجن ڪلاسن جي انتظام لاءِ ضروري اوزار ڏيو.",
"features.teacher.point1": "شاگردن جي حاضري",
"features.teacher.point2": "منهنجو ٽائيم ٽيبل",
"features.teacher.point3": "سبق جا منصوبا",
"features.teacher.point4": "سواليا پيپر",
"features.teacher.point5": "مارڪون ۽ نتيجا",
"features.teacher.link": "استادن جي انتظام بابت ڄاڻو",

"features.attendance.screen": "حاضري جو انتظام",
"features.attendance.badge": "روزاني حاضري",
"features.attendance.title": "روزاني حاضري جو وڌيڪ واضح جائزو.",
"features.attendance.point1": "حاضري جو جائزو",
"features.attendance.point2": "حاضري جا سيشن",
"features.attendance.point3": "ڪلاسون",
"features.attendance.point4": "سيڪشن",
"features.attendance.point5": "ڪلاس جا مضمون",
"features.attendance.point6": "مضمون جا استاد",
"features.attendance.point7": "ٽائيم ٽيبل ۽ سبق جا منصوبا",
"features.attendance.link": "ڄاڻو ته هي ڪيئن ڪم ڪري ٿو",

"features.academic.screen": "تعليمي انتظام",
"features.academic.badge": "تعليمي تنظيم",
"features.academic.title": "پنهنجن تعليمي ڪمن کي منظم بڻايو.",
"features.academic.description": "پنهنجي اسڪول جي تعليمي معلومات کي اهڙن اوزارن سان منظم رکو، جيڪي ڪلاسن، تعليمي سيشنن ۽ تعليمي انتظام ۾ مدد ڪن ٿا.",
"features.academic.point1": "تعليمي سيشنن جو انتظام",
"features.academic.point2": "ڪلاسن ۽ تعليمي ڪمن جو انتظام",
"features.academic.point3": "تعليمي معلومات هڪ هنڌ",
"features.academic.link": "تعليمي انتظام بابت ڄاڻو",

"features.exams.screen": "امتحان",
"features.exams.badge": "امتحانن جو انتظام",
"features.exams.title": "امتحانن جا رڪارڊ منظم رکو.",
"features.exams.point1": "امتحان ۽ ڊيٽ شيٽون",
"features.exams.point2": "مارڪن جو اندراج",
"features.exams.point3": "نتيجا ۽ رپورٽ ڪارڊ",
"features.exams.point4": "سواليا پيپر ۽ گريڊنگ سسٽم",
"features.exams.link": "امتحاني انتظام بابت ڄاڻو",

"features.staff.screen": "اسٽاف جو انتظام",
"features.staff.badge": "اسٽاف جي انتظاميه",
"features.staff.title": "پنهنجي اسڪول جي ٽيم کي بهتر نموني منظم ڪريو.",
"features.staff.point1": "استاد ۽ اسٽاف",
"features.staff.point2": "اسٽاف جو انتظام",
"features.staff.point3": "موڪل جون درخواستون",
"features.staff.point4": "استادن جا پيغام",
"features.staff.link": "اسٽاف جي انتظام بابت ڄاڻو",

"features.finance.screen": "مالي معاملا ۽ فيسون",
"features.finance.badge": "مالي ۽ فيس جو انتظام",
"features.finance.title": "اسڪول جي مالي معاملن کي منظم بڻايو.",
"features.finance.point1": "فيس جي وصولي",
"features.finance.point2": "بقايا فيس، تاريخ ۽ ليجر",
"features.finance.point3": "فيس جو ڍانچو ۽ رعايتون",
"features.finance.point4": "اڪائونٽس ۽ خرچ",
"features.finance.point5": "پگهارن جو انتظام",
"features.finance.link": "مالي انتظام بابت ڄاڻو",

"features.reports.screen": "رپورٽون ۽ تجزيا",
"features.reports.badge": "رپورٽون ۽ اهم ڄاڻ",
"features.reports.title": "اسڪول جي معلومات مان وڌيڪ واضح نتيجا حاصل ڪريو.",
"features.reports.point1": "شاگردن جي معلومات ۽ تعليمي رپورٽون",
"features.reports.point2": "شاگردن ۽ اسٽاف جي حاضري جون رپورٽون",
"features.reports.point3": "فيس، وصولي ۽ مالي رپورٽون",
"features.reports.point4": "اسٽاف، پگهارن ۽ امتحانن جون رپورٽون",
"features.reports.point5": "تعليمي ۽ انتظامي سرگرمين جون رپورٽون",
"features.reports.link": "رپورٽن ۽ تجزين بابت ڄاڻو",

"features.notifications.screen": "نوٽيفڪيشنز",
"features.notifications.badge": "اسڪول جون اطلاعون",
"features.notifications.title": "سڀني کي باخبر ۽ هڪ ٻئي سان ڳنڍيل رکو.",
"features.notifications.point1": "اسڪول جا اعلان ۽ نوٽيس",
"features.notifications.point2": "شاگردن ۽ والدين لاءِ اطلاعون",
"features.notifications.point3": "استادن ۽ اسٽاف جون تازيون ڄاڻون",
"features.notifications.point4": "اهم ياد ڏيارڻيون ۽ الرٽ",
"features.notifications.point5": "اسڪول جو مرڪزي رابطي جو نظام",
"features.notifications.link": "نوٽيفڪيشنز بابت ڄاڻو",

"features.bottomTitle": "ڇا توهان DevShuora کي عملي طور ڏسڻ لاءِ تيار آهيو؟",
"features.bottomDescription": "ڄاڻو ته هڪ گڏيل پليٽ فارم توهان جي اسڪول جي روزمره ڪمن کي منظم ڪرڻ ۾ ڪيئن مدد ڪري سگهي ٿو.",
"features.bottomButton": "مفت ڊيمو جي درخواست ڪريو",



"roles.eyebrow": "توهان جي اسڪول جي ڪميونٽي لاءِ تيار ڪيل",
"roles.title1": "هڪ پليٽ فارم.",
"roles.title2": "مختلف ذميواريون. گڏيل مقصد.",
"roles.description": "اسڪول کي هلائيندڙ سڀني ماڻهن کي هڪ گڏيل طريقي سان ڪم ڪرڻ لاءِ گڏ ڪريو. هر فرد کي پنهنجي ذميواري مطابق لاڳاپيل اوزارن ۽ معلومات تائين رسائي ڏيو.",

"roles.owner.title": "مالڪ ۽ پرنسپال",
"roles.owner.description": "اسڪول جي ڪمن جي نگراني ڪريو ۽ انتظام بابت اهم معلومات تائين رسائي حاصل ڪريو.",

"roles.admin.title": "منتظم",
"roles.admin.description": "روزمره جي انتظامي ڪمن ۾ هم آهنگي آڻيو ۽ اسڪول جي رڪارڊ جو انتظام ڪريو.",

"roles.teacher.title": "استاد",
"roles.teacher.description": "تعليمي سرگرمين، حاضري ۽ ڪلاس روم جي انتظام جا لاڳاپيل اوزار استعمال ڪريو.",

"roles.student.title": "شاگرد",
"roles.student.description": "تعليمي ۽ اسڪول بابت اهم معلومات سان باخبر رهو.",

"roles.parent.title": "والدين",
"roles.parent.description": "پنهنجي ٻار جي تعليمي سفر ۽ ترقي بابت باخبر رهو.",



"benefits.eyebrow": "ڊيو شوورا جي خاص خوبي",
"benefits.title1": "انتظامي پيچيدگيون گهٽايو.",
"benefits.title2": "تعليم تي وڌيڪ ڌيان ڏيو.",
"benefits.description": "پنهنجي ٽيم کي اسڪول جا ضروري ڪم وڌيڪ منظم نموني سنڀالڻ ۾ مدد ڏيو، ته جيئن اهي پکڙيل معلومات کي سنڀالڻ ۾ گهٽ وقت لڳائين ۽ شاگردن جي مدد ڪرڻ تي وڌيڪ ڌيان ڏئي سگهن.",
"benefits.cta": "اسان جي ٽيم سان رابطو ڪريو",

"benefits.card1.title": "گڏيل ڪم جا طريقا",
"benefits.card1.description": "اسڪول جي ضروري سرگرمين کي هڪ ئي پليٽ فارم تي گڏ ڪريو.",

"benefits.card2.title": "منظم رڪارڊ",
"benefits.card2.description": "شاگردن ۽ اسڪول جي اهم معلومات کي منظم رکو.",

"benefits.card3.title": "روزمره جا آسان ڪم",
"benefits.card3.description": "روزمره جي بار بار ٿيندڙ ڪمن لاءِ ٽيم کي آسان اوزار فراهم ڪريو.",

"benefits.card4.title": "وڌيڪ واضح ڄاڻ",
"benefits.card4.description": "اسڪول جي سرگرمين ۽ رڪارڊ کي سمجهڻ لاءِ رپورٽون استعمال ڪريو.",

"how.eyebrow": "هي ڪيئن ڪم ڪري ٿو",
"how.title1": "شروعات کان وٺي",
"how.title2": "بهتر انتظام تائين.",
"how.description": "DevShuora ERP کي پنهنجي اسڪول ۾ متعارف ڪرائڻ ۽ ضروري انتظامي ڪمن کي هڪ هنڌ گڏ ڪرڻ جو هڪ آسان طريقو.",

"how.step1.label": "پهريون مرحلو",
"how.step1.title": "اسان سان رابطو ڪريو",
"how.step1.description": "پنهنجي اسڪول جون ضرورتون، موجوده طريقا ۽ انتظامي مسئلا اسان جي ٽيم سان شيئر ڪريو.",
"how.step1.footer": "توهان جون ضرورتون سمجهڻ",

"how.step2.label": "ٻيو مرحلو",
"how.step2.title": "ERP جو جائزو وٺو",
"how.step2.description": "پليٽ فارم کي ڏسو، ان جا ماڊيولز ڳوليو ۽ سمجهو ته اهو توهان جي اسڪول جي ڪيئن مدد ڪري سگهي ٿو.",
"how.step2.footer": "پليٽ فارم کي ڄاڻو",

"how.step3.label": "ٽيون مرحلو",
"how.step3.title": "پنهنجو اسڪول ترتيب ڏيو",
"how.step3.description": "پنهنجي اسڪول جي جوڙجڪ منظم ڪريو، ضروري سيٽنگون ترتيب ڏيو ۽ گهربل رڪارڊ تيار ڪريو.",
"how.step3.footer": "پنهنجو سسٽم تيار ڪريو",

"how.step4.label": "آخري مرحلو",
"how.step4.title": "بهتر نموني انتظام ڪريو",
"how.step4.description": "اسڪول جي روزمره انتظامي ڪمن کي منظم ڪرڻ لاءِ گڏيل اوزار استعمال ڪرڻ شروع ڪريو.",
"how.step4.footer": "روزمره جو انتظام",

"how.bottomText": "ڇا توهان پنهنجي اسڪول جا سڀ ڪم هڪ هنڌ گڏ ڪرڻ لاءِ تيار آهيو؟",
"how.bottomCta": "اڄ ئي شروعات ڪريو",


"faq.eyebrow": "وڌيڪ ڄاڻڻ چاهيو ٿا؟",
"faq.title1": "اڪثر پڇيا ويندڙ",
"faq.title2": "سوال",
"faq.description": "ڇا توهان وٽ DevShuora School ERP بابت ڪو سوال آهي؟ هتي ڪجهه اهم سوالن جا جواب ڏنل آهن.",
"faq.link": "اسان کان سوال پڇو",

"faq.q1": "DevShuora School ERP ڇا آهي؟",
"faq.a1": "DevShuora School ERP اسڪول جي انتظام جو هڪ پليٽ فارم آهي، جيڪو شاگردن جا رڪارڊ، حاضري، امتحان، اسٽاف ۽ مالي معاملن سميت اهم انتظامي ۽ تعليمي ڪمن کي هڪ هنڌ گڏ ڪري ٿو.",

"faq.q2": "هي پليٽ فارم ڪير استعمال ڪري سگهي ٿو؟",
"faq.a2": "هي پليٽ فارم اسڪول سان لاڳاپيل مختلف ماڻهن جي مدد لاءِ ٺاهيو ويو آهي، جن ۾ مالڪ، پرنسپال، منتظم، استاد، شاگرد ۽ والدين شامل آهن. دستياب سهولتون ۽ رسائي اسڪول جي ترتيب ۽ چونڊيل ماڊيولز تي دارومدار رکن ٿيون.",

"faq.q3": "ڇا اسان شروع ڪرڻ کان اڳ ERP ڏسي سگهون ٿا؟",
"faq.a3": "ها. ڊيمو جي درخواست واري لنڪ ذريعي DevShuora ٽيم سان رابطو ڪريو ۽ پليٽ فارم جو عملي تعارف حاصل ڪريو.",

"faq.q4": "اسان جو اسڪول توهان سان ڪيئن رابطو ڪري سگهي ٿو؟",
"faq.a4": "رابطي واري فارم ذريعي پنهنجا تفصيل موڪليو. DevShuora ٽيم توهان جي اسڪول جي ضرورتن بابت توهان سان رابطو ڪري سگهي ٿي.",



"contact.eyebrow": "اچو ته تعليم کي اڳتي وڌايون",
"contact.title": "ڇا توهان اسڪول جو انتظام آسان بڻائڻ لاءِ تيار آهيو؟",
"contact.description": "اسان کي پنهنجي اسڪول بابت ٻڌايو ۽ ڄاڻو ته DevShuora School ERP توهان جي روزمره انتظامي ڪمن ۾ ڪيئن مدد ڪري سگهي ٿو.",
"contact.demo": "ڊيمو جي درخواست ڪريو",
"contact.login": "ERP ۾ لاگ اِن ڪريو",


"footer.description": "اسڪول جي بهتر انتظام لاءِ هڪ گڏيل پليٽ فارم. روزمره جا ڪم آسان بڻايو ۽ پنهنجي اسڪول جي ڪميونٽي کي هڪ ٻئي جي ويجهو آڻيو.",
"footer.login": "ERP ۾ لاگ اِن ڪريو",

"footer.explore": "وڌيڪ ڄاڻو",
"footer.home": "هوم",
"footer.about": "اسان بابت",
"footer.features": "خاصيتون",
"footer.benefits": "فائدا",
"footer.how": "ڪم ڪرڻ جو طريقو",

"footer.school": "توهان جي اسڪول لاءِ",
"footer.owners": "اسڪول جا مالڪ",
"footer.administrators": "منتظم",
"footer.teachers": "استاد",
"footer.parents": "والدين ۽ شاگرد",
"footer.demo": "ڊيمو جي درخواست ڪريو",

"footer.contact": "رابطو ڪريو",
"footer.contactDescription": "ڇا توهان وٽ DevShuora School ERP بابت سوال آهن؟ پليٽ فارم بابت وڌيڪ ڄاڻڻ لاءِ اسان جي ٽيم سان رابطو ڪريو.",
"footer.emailLabel": "اسان کي اي ميل ڪريو",

"footer.copyright": "DevShuora Solutions. سڀ حق محفوظ آهن.",
"footer.privacy": "رازداري جي پاليسي",
"footer.terms": "سروس جون شرطون",
"footer.top": "مٿي وڃو",


}



};




// Apply selected language
function setLanguage(language) {

  if (!translations[language]) {
    language = "en";
  }

  // Update page language and text direction
  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "en" ? "ltr" : "rtl";

  // Translate all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");
    const translatedText = translations[language][key];

    if (translatedText) {
      element.textContent = translatedText;
    }

  });

  // Keep desktop and mobile selectors synchronized
  const desktopSelect = document.getElementById("language-select");
  const mobileSelect = document.getElementById("mobile-language-select");

  if (desktopSelect) desktopSelect.value = language;
  if (mobileSelect) mobileSelect.value = language;

  // Save selected language
  try {
    localStorage.setItem("devshuora-language", language);
  } catch (error) {
    console.warn("Language preference could not be saved.");
  }

  // Update selected language on the page
  document.documentElement.setAttribute("data-language", language);
}


// Language selector events
const desktopLanguage = document.getElementById("language-select");
const mobileLanguage = document.getElementById("mobile-language-select");

if (desktopLanguage) {
  desktopLanguage.addEventListener("change", function () {
    setLanguage(this.value);
  });
}

if (mobileLanguage) {
  mobileLanguage.addEventListener("change", function () {
    setLanguage(this.value);
  });
}


// Load saved language when website opens
let savedLanguage = "en";

try {
  savedLanguage = localStorage.getItem("devshuora-language") || "en";
} catch (error) {
  savedLanguage = "en";
}

setLanguage(savedLanguage);
