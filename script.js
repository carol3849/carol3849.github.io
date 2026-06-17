const translations = {
  zh: {
    brand: "Nova Lin",
    navAbout: "關於",
    navWorks: "事蹟",
    navContact: "聯絡",
    heroEyebrow: "互動設計師 / AI 創作者 / 夜型實驗家",
    heroName: "林諾亞",
    heroAlias: "把資料變成會呼吸的介面。",
    heroIntro: "我是一位虛構的產品設計師，擅長把 AI、視覺敘事與前端原型整合成快速、有溫度、可被使用的數位體驗。",
    heroCta: "開始合作",
    heroSecondary: "查看事蹟",
    chipFlow: "靈感流速",
    chipLabs: "實驗室",
    statYears: "年跨域創作",
    statProjects: "個原型專案",
    statTalks: "場分享講座",
    aboutEyebrow: "About Me",
    aboutTitle: "關於我",
    aboutBody1: "Nova Lin 是一位不存在但很忙的創作者。她白天替新創設計產品原型，晚上把城市聲音、天氣資料與手寫筆記轉成互動裝置。",
    aboutBody2: "她相信好的介面像一台安靜但強大的筆電：看起來克制，裡面卻有清楚的節奏、速度與情緒。",
    skillsEyebrow: "Signal Stack",
    skillsTitle: "擅長把複雜事物變漂亮，也變清楚。",
    skill1Title: "AI 產品原型",
    skill1Body: "設計聊天代理、資料摘要工具與創意工作流，讓模型輸出變成可靠的使用者體驗。",
    skill2Title: "互動視覺",
    skill2Body: "用動畫、聲音與資料視覺化創造有節奏的敘事，從網站到展場都能流暢運作。",
    skill3Title: "前端實驗",
    skill3Body: "以原生 Web 技術快速搭建高擬真 demo，重視性能、可近用性與小螢幕體驗。",
    worksEyebrow: "Milestones",
    worksTitle: "虛構但很像真的事蹟",
    work1Title: "獲選「Future Interface 30」",
    work1Body: "以即時資料敘事作品《Pulse Atlas》入選年度互動設計名單。",
    work2Title: "打造 AI 編輯室儀表板",
    work2Body: "協助虛構媒體團隊把研究、寫作、審稿壓縮成一條透明工作流。",
    work3Title: "城市聲音展「Noisy Garden」",
    work3Body: "把捷運、雨聲與市場叫賣轉成可觸控的發光地圖。",
    work4Title: "開源微互動套件",
    work4Body: "發布 80 個可重用的互動樣式，讓設計師更快做出有生命感的頁面。",
    dashboardTitle: "Creative Runtime",
    dashboardLive: "即時",
    personalityEyebrow: "Personality OS",
    personalityTitle: "冷靜規劃，華麗執行。",
    personalityBody: "她的工作節奏像一段精準的動畫時間軸：先把問題拆清楚，再讓每個畫面、資料與按鈕各就各位。",
    contactEyebrow: "Contact",
    contactTitle: "讓下一個原型開始發光。",
    contactBody: "歡迎丟來產品想法、展覽邀約、AI 實驗，或只是一杯很好喝的拿鐵情報。",
    footer: "© 2026 Nova Lin. 虛構人物，真實前端能量。"
  },
  en: {
    brand: "Nova Lin",
    navAbout: "About",
    navWorks: "Milestones",
    navContact: "Contact",
    heroEyebrow: "Interaction Designer / AI Maker / Night Lab Regular",
    heroName: "Nova Lin",
    heroAlias: "Turning data into interfaces that breathe.",
    heroIntro: "I am a fictional product designer blending AI, visual storytelling, and frontend prototypes into fast, tactile, genuinely usable digital experiences.",
    heroCta: "Start a project",
    heroSecondary: "See milestones",
    chipFlow: "Flow",
    chipLabs: "Labs",
    statYears: "years creating",
    statProjects: "prototype builds",
    statTalks: "talks given",
    aboutEyebrow: "About Me",
    aboutTitle: "About Me",
    aboutBody1: "Nova Lin is fictional, but extremely booked. By day she designs product prototypes for startups; by night she turns city noise, weather data, and handwritten notes into interactive installations.",
    aboutBody2: "She believes a good interface should feel like a quiet, powerful machine: visually restrained, yet full of rhythm, speed, and emotion underneath.",
    skillsEyebrow: "Signal Stack",
    skillsTitle: "Making complex things beautiful, and beautifully clear.",
    skill1Title: "AI Product Prototyping",
    skill1Body: "Designing chat agents, summarizers, and creative workflows that turn model output into dependable user experiences.",
    skill2Title: "Interactive Visuals",
    skill2Body: "Creating rhythmic stories through animation, sound, and data visualization across websites and exhibition spaces.",
    skill3Title: "Frontend Experiments",
    skill3Body: "Building high-fidelity demos with native web tech, with attention to performance, accessibility, and small screens.",
    worksEyebrow: "Milestones",
    worksTitle: "Fictional achievements that feel suspiciously real",
    work1Title: "Named to Future Interface 30",
    work1Body: "Selected for the annual interaction design list with the live data storytelling piece Pulse Atlas.",
    work2Title: "Built an AI newsroom dashboard",
    work2Body: "Helped a fictional media team compress research, writing, and review into one transparent workflow.",
    work3Title: "Noisy Garden city sound show",
    work3Body: "Turned metro ambience, rain, and market calls into a glowing touchable map.",
    work4Title: "Released a micro-interaction kit",
    work4Body: "Published 80 reusable interaction patterns for designers who want pages that feel alive.",
    dashboardTitle: "Creative Runtime",
    dashboardLive: "LIVE",
    personalityEyebrow: "Personality OS",
    personalityTitle: "Calm planning. Spectacular execution.",
    personalityBody: "Her workflow behaves like a precise animation timeline: clarify the problem first, then let every frame, datum, and button land exactly where it belongs.",
    contactEyebrow: "Contact",
    contactTitle: "Let the next prototype light up.",
    contactBody: "Send product ideas, exhibition invites, AI experiments, or simply a very good latte recommendation.",
    footer: "© 2026 Nova Lin. Fictional profile, real frontend energy."
  }
};

const root = document.documentElement;
const langToggle = document.querySelector("#langToggle");
const themeToggle = document.querySelector("#themeToggle");
const cursorLight = document.querySelector(".cursor-light");
let currentLang = localStorage.getItem("nova-lang") || "zh";
let currentTheme = localStorage.getItem("nova-theme") || "dark";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[lang][key] || node.textContent;
  });
  langToggle.textContent = lang === "zh" ? "EN" : "中";
  localStorage.setItem("nova-lang", lang);

  if (window.gsap) {
    gsap.fromTo("[data-i18n]", { y: 8, opacity: 0.55 }, {
      y: 0,
      opacity: 1,
      duration: 0.34,
      stagger: 0.008,
      ease: "power2.out"
    });
  }
}

function applyTheme(theme) {
  currentTheme = theme;
  root.dataset.theme = theme;
  localStorage.setItem("nova-theme", theme);
}

function animateCounters() {
  document.querySelectorAll("[data-count]").forEach((item) => {
    const target = Number(item.dataset.count);
    const state = { value: 0 };

    if (!window.gsap) {
      item.textContent = target;
      return;
    }

    gsap.to(state, {
      value: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        once: true
      },
      onUpdate: () => {
        item.textContent = Math.round(state.value);
      }
    });
  });
}

function setupAnimations() {
  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".site-header", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".reveal", {
    y: 42,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out"
  });

  gsap.from(".portrait-card", {
    rotateX: 18,
    rotateY: -18,
    scale: 0.82,
    opacity: 0,
    duration: 1.15,
    ease: "expo.out"
  });

  gsap.to(".portrait-card", {
    y: -18,
    rotateY: 5,
    duration: 2.6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.utils.toArray(".section-panel, .quick-strip").forEach((section) => {
    gsap.from(section, {
      y: 76,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 82%"
      }
    });
  });

  gsap.utils.toArray(".kinetic-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotateY: x * 14,
        rotateX: y * -14,
        y: -8,
        duration: 0.35,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        y: 0,
        duration: 0.45,
        ease: "elastic.out(1, 0.55)"
      });
    });
  });

  gsap.from(".timeline-item", {
    x: -54,
    opacity: 0,
    stagger: 0.12,
    duration: 0.75,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 78%"
    }
  });

  animateCounters();
}

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "zh" ? "en" : "zh");
});

themeToggle.addEventListener("click", () => {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

window.addEventListener("pointermove", (event) => {
  if (!cursorLight) return;
  cursorLight.style.left = `${event.clientX}px`;
  cursorLight.style.top = `${event.clientY}px`;
});

applyTheme(currentTheme);
applyLanguage(currentLang);
window.addEventListener("load", setupAnimations);
