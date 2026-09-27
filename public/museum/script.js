/* The Digital Museum — plain JavaScript */

const I18N = {
  en: {
    title: "The Digital Museum",
    tagline: "The Museum of Visual Stories",
    motto: "Where every image holds a story.",
    intro: "Choose an image to read its story.",
    close: "Close",
    footer: "The Digital Museum — every image holds a story.",
    langBtn: "العربية",
    cats: {
      all: "All",
      paintings: "Paintings",
      history: "History",
      places: "Places",
      emotions: "Emotions",
      ideas: "Ideas",
    },
  },
  ar: {
    title: "المتحف الرقمي",
    tagline: "متحف القصص البصرية",
    motto: "حيث تحمل كل صورة قصة.",
    intro: "اختر صورة لقراءة قصتها.",
    close: "إغلاق",
    footer: "المتحف الرقمي — كل صورة تحمل قصة.",
    langBtn: "English",
    cats: {
      all: "الكل",
      paintings: "لوحات",
      history: "تاريخ",
      places: "أماكن",
      emotions: "مشاعر",
      ideas: "أفكار",
    },
  },
};

const EXHIBITS = [
  {
    id: "starry-night",
    img: "images/starry-night.jpg",
    cat: "paintings",
    en: {
      title: "A Sky in Motion",
      story:
        "A night sky that will not sit still. Swirling strokes of blue and gold turn a quiet village evening into pure feeling — wonder, restlessness and a strange kind of comfort, all painted from memory by an artist who could not sleep.",
    },
    ar: {
      title: "سماءٌ في حركة",
      story:
        "سماء ليلية لا تهدأ. ضربات دوّامة من الأزرق والذهبي تحوّل أمسية قرية هادئة إلى شعورٍ صافٍ — دهشة وتململ وارتياحٌ غريب، كلها رُسمت من الذاكرة على يد فنان لم ينم تلك الليلة.",
    },
  },
  {
    id: "moon-landing",
    img: "images/moon-landing.jpg",
    cat: "history",
    en: {
      title: "One Small Step",
      story:
        "In July 1969, a human footprint pressed into the dust of another world for the very first time. This image remembers that moment: quiet, gray, and utterly impossible — until it wasn't.",
    },
    ar: {
      title: "خطوة صغيرة واحدة",
      story:
        "في يوليو ١٩٦٩، طبعَ قدمُ إنسانٍ بصمته في غبار عالمٍ آخر لأول مرة على الإطلاق. تذكّر هذه الصورة تلك اللحظة: هادئة، رمادية، ومستحيلة تمامًا — حتى صارت ممكنة.",
    },
  },
  {
    id: "rose-city",
    img: "images/rose-city.jpg",
    cat: "places",
    en: {
      title: "The Rose-Red City",
      story:
        "More than two thousand years ago, hands carved a complete city straight into rose-colored cliffs. Traders, camels and caravans passed through its narrow canyon — and the stone still remembers them.",
    },
    ar: {
      title: "المدينة الوردية",
      story:
        "قبل أكثر من ألفي عام، نحتت الأيدي مدينةً كاملة في جبالٍ وردية اللون. مرّ التجّار والجمال والقوافل عبر واديها الضيّق — وما زال الحجر يتذكّرهم.",
    },
  },
  {
    id: "hope",
    img: "images/hope.jpg",
    cat: "emotions",
    en: {
      title: "Hope",
      story:
        "After a long drought, the earth cracks open — and something green chooses that exact moment to arrive. Hope is rarely loud; usually it is small, stubborn, and growing.",
    },
    ar: {
      title: "أمل",
      story:
        "بعد جفافٍ طويل تتشقق الأرض — فيختار شيءٌ أخضر تلك اللحظة بالذات ليأتي. نادرًا ما يكون الأمل صاخبًا؛ فهو عادةً صغيرٌ، عنيد، ونامٍ.",
    },
  },
  {
    id: "great-wave",
    img: "images/great-wave.jpg",
    cat: "paintings",
    en: {
      title: "The Great Wave",
      story:
        "A mountain of frozen water hangs over three tiny boats. The print made the sea feel alive — powerful, patient, and completely indifferent to us.",
    },
    ar: {
      title: "الموجة العظيمة",
      story:
        "جبلٌ من ماء متجمّد يتدلّى فوق ثلاثة قوارب صغيرة. جعلت هذه اللوحةُ البحرَ يبدو حيًّا — قويًّا وصبورًا وغير مبالٍ إلينا تمامًا.",
    },
  },
  {
    id: "words-in-stone",
    img: "images/words-in-stone.jpg",
    cat: "history",
    en: {
      title: "Words in Stone",
      story:
        "Long before printing presses and phones, people carved their laws, prayers and promises into stone — because stone was the only voice loud enough to outlive them.",
    },
    ar: {
      title: "كلماتٌ في حجر",
      story:
        "قبل فترات الطباعة والهواتف بزمنٍ طويل، نحبّ الناس شرائعهم وصلاواتهم ووعودهم في الحجر — لأن الحجر كان الصوت الوحيد القوي بما يكفي ليبقى بعدهم.",
    },
  },
  {
    id: "old-alley",
    img: "images/old-alley.jpg",
    cat: "places",
    en: {
      title: "The Old Alley",
      story:
        "As evening falls, the lanterns wake up before the stars do. This alley has heard a thousand years of footsteps, bargains, arguments and songs — and it keeps every one of them.",
    },
    ar: {
      title: "الزقاق القديم",
      story:
        "حين يحلّ المساء، تستيقظ الفوانيس قبل النجوم. سمع هذا الزقاق ألف عامٍ من الخطى والمساومات والخصومات والأغاني — ويحفظها جميعًا.",
    },
  },
  {
    id: "freedom",
    img: "images/freedom.jpg",
    cat: "ideas",
    en: {
      title: "Freedom",
      story:
        "An open cage — and the bird is already gone. Some ideas cannot be explained, only shown: once you have seen the sky from outside the bars, you cannot un-see it.",
    },
    ar: {
      title: "حرية",
      story:
        "قفصٌ مفتوح — والطائر قد ولّى. بعض الأفكار لا تُشرح بل تُعرض: فمن رأى السماء من خارج القضبان لم يعد بإمكانه أن ينساها.",
    },
  },
];

const CATS = ["all", "paintings", "history", "places", "emotions", "ideas"];

let lang = "en";
let activeFilter = "all";
let currentId = null;

const $ = (id) => document.getElementById(id);
const t = () => I18N[lang];

function applyStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t()[el.dataset.i18n];
    if (value) el.textContent = value;
  });
  $("langToggle").textContent = t().langBtn;
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

function renderFilters() {
  const box = $("filters");
  box.innerHTML = "";
  CATS.forEach((cat) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (cat === activeFilter ? " active" : "");
    chip.setAttribute("aria-pressed", cat === activeFilter ? "true" : "false");
    chip.textContent = t().cats[cat];
    chip.addEventListener("click", () => {
      activeFilter = cat;
      renderFilters();
      renderGallery();
    });
    box.appendChild(chip);
  });
}

function firstSentence(story) {
  const index = story.indexOf(". ");
  return index === -1 ? story : story.slice(0, index + 1);
}

function renderGallery() {
  const gallery = $("gallery");
  gallery.innerHTML = "";
  const shown =
    activeFilter === "all"
      ? EXHIBITS
      : EXHIBITS.filter((ex) => ex.cat === activeFilter);

  shown.forEach((ex) => {
    const data = ex[lang];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "exhibit-card";
    card.setAttribute("aria-haspopup", "dialog");

    const img = document.createElement("img");
    img.className = "card-media";
    img.src = ex.img;
    img.alt = data.title;
    img.loading = "lazy";

    const body = document.createElement("div");
    body.className = "card-body";

    const cat = document.createElement("p");
    cat.className = "card-cat";
    cat.textContent = t().cats[ex.cat];

    const title = document.createElement("h3");
    title.className = "exhibit-title";
    title.textContent = data.title;

    const lead = document.createElement("p");
    lead.className = "card-lead";
    lead.textContent = firstSentence(data.story);

    body.appendChild(cat);
    body.appendChild(title);
    body.appendChild(lead);
    card.appendChild(img);
    card.appendChild(body);
    card.addEventListener("click", () => openModal(ex.id));
    gallery.appendChild(card);
  });
}

function openModal(id) {
  const ex = EXHIBITS.find((item) => item.id === id);
  if (!ex) return;
  currentId = id;
  const data = ex[lang];
  $("modalImg").src = ex.img;
  $("modalImg").alt = data.title;
  $("modalCat").textContent = t().cats[ex.cat];
  $("modalTitle").textContent = data.title;
  $("modalStory").textContent = data.story;
  const modal = $("modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  $("modalClose").focus();
}

function closeModal() {
  currentId = null;
  const modal = $("modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function setLang(next) {
  lang = next;
  applyStaticText();
  renderFilters();
  renderGallery();
  if (currentId) openModal(currentId);
}

$("langToggle").addEventListener("click", () => {
  setLang(lang === "en" ? "ar" : "en");
});

$("modalClose").addEventListener("click", closeModal);
$("modalBackdrop").addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

applyStaticText();
renderFilters();
renderGallery();
