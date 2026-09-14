export interface Destination {
  slug: string;
  code: string;
  name: string;
  flag: string;
  heroHeadline: string;
  heroSubtext: string;
  trustBar: { label: string; value: string }[];
  why: { number: string; title: string; text: string }[];
  fields: string[];
  note: string;
  faqs: { question: string; answer: string }[];
}

export const destinations: Destination[] = [
  {
    slug: "australia",
    code: "AUS",
    name: "Australia",
    flag: "🇦🇺",
    heroHeadline: "Study in Australia",
    heroSubtext:
      "Nearly 700,000 international students call Australia home, making it one of the world's most sought-after study destinations.",
    trustBar: [
      { label: "February & July", value: "Typical intakes" },
      { label: "IELTS / PTE", value: "Usual English requirement" },
      { label: "End-to-End", value: "Counselling, admission, visa" },
      { label: "FBR·SECP", value: "Registered & accredited" },
    ],
    why: [
      {
        number: "01",
        title: "Consistently top-ranked",
        text: "Australian universities routinely place in the top 50 globally across a wide range of subject areas.",
      },
      {
        number: "02",
        title: "A genuinely global campus",
        text: "With almost 700,000 international students, you will not be the only one finding your feet — support structures are built for you.",
      },
      {
        number: "03",
        title: "Post-study pathways",
        text: "Australia offers post-study work routes for eligible graduates, which is why so many students plan long-term around it.",
      },
    ],
    fields: [
      "Business & Economics",
      "Engineering",
      "IT & Computer Science",
      "Nursing & Health",
      "Accounting",
      "Hospitality",
      "Education",
      "Data Science",
    ],
    note: "Australia's student visa rules and fees have changed more than once in recent years. We work from the current requirements at the time you apply — never from an old checklist.",
    faqs: [
      {
        question: "Do I need IELTS or PTE to apply to Australia?",
        answer:
          "Most universities in Australia ask for proof of English, and IELTS or PTE are the usual routes. We confirm exactly what your shortlisted universities want before you book a test.",
      },
      {
        question: "How much does it cost to study in Australia?",
        answer:
          "Tuition and living costs vary enormously between universities, cities and programmes. Bring us your budget and we will show you what is realistically within it.",
      },
      {
        question: "How long does the visa take?",
        answer:
          "Processing times depend on the embassy, the season and how complete your file is. A clean, complete, well-evidenced application is the biggest thing you control.",
      },
      {
        question: "What if my visa is refused?",
        answer:
          "We go through the refusal reasons and talk honestly about whether reapplying makes sense and what would need to change.",
      },
      {
        question: "When should I start?",
        answer:
          "Between shortlisting, English tests, documents and visa processing, a comfortable application takes months, not weeks. If you are targeting February or July, the conversation should be happening now.",
      },
    ],
  },
  {
    slug: "uk",
    code: "UK",
    name: "United Kingdom",
    flag: "🇬🇧",
    heroHeadline: "Study in the UK",
    heroSubtext:
      "Every year, more than 400,000 overseas students pursue higher education in the UK — a country that is home to three of the top ten universities in the world.",
    trustBar: [
      { label: "September & January", value: "Typical intakes" },
      { label: "IELTS / PTE", value: "Usual English requirement" },
      { label: "End-to-End", value: "Counselling, admission, visa" },
      { label: "FBR·SECP", value: "Registered & accredited" },
    ],
    why: [
      {
        number: "01",
        title: "Three of the world's top ten",
        text: "The UK's academic reputation needs no introduction — and its degrees are recognised everywhere.",
      },
      {
        number: "02",
        title: "Shorter degrees",
        text: "Many UK master's programmes run for a single year, which can mean less tuition and a faster route back into work.",
      },
      {
        number: "03",
        title: "400,000+ international students",
        text: "A well-worn path for Pakistani students, with established communities in nearly every university city.",
      },
    ],
    fields: [
      "Business & Management",
      "Law",
      "Engineering",
      "Computer Science",
      "Medicine & Health",
      "Finance & Accounting",
      "Media",
      "Data Science",
    ],
    note: "UK universities set their own English-language and academic thresholds, and they differ widely. We confirm exactly what your shortlisted universities want before you book any test.",
    faqs: [
      {
        question: "Do I need IELTS or PTE to apply to the United Kingdom?",
        answer:
          "Most universities in the United Kingdom ask for proof of English, and IELTS or PTE are the usual routes. We confirm exactly what your shortlisted universities want before you book a test.",
      },
      {
        question: "How much does it cost to study in the United Kingdom?",
        answer:
          "Tuition and living costs vary enormously between universities, cities and programmes. Bring us your budget and we will show you what is realistically within it.",
      },
      {
        question: "How long does the visa take?",
        answer:
          "Processing times depend on the embassy, the season and how complete your file is. A clean, complete, well-evidenced application is the single biggest thing standing between you and a straightforward decision.",
      },
      {
        question: "What if my visa is refused?",
        answer:
          "We go through the refusal reasons with you and talk honestly about whether reapplying makes sense and what would need to change.",
      },
      {
        question: "When should I start?",
        answer:
          "Between shortlisting, English tests, documents and visa processing, a comfortable application takes months, not weeks. If you are targeting September or January, the conversation should be happening now.",
      },
    ],
  },
  {
    slug: "usa",
    code: "USA",
    name: "United States",
    flag: "🇺🇸",
    heroHeadline: "Study in the United States",
    heroSubtext:
      "Home to the Ivy League and some of the most prestigious, highly regarded universities on earth — the USA remains the world's top destination for higher education.",
    trustBar: [
      { label: "Fall & Spring", value: "Typical intakes" },
      { label: "IELTS / TOEFL / PTE", value: "Usual English requirement" },
      { label: "End-to-End", value: "Counselling, admission, visa" },
      { label: "FBR·SECP", value: "Registered & accredited" },
    ],
    why: [
      {
        number: "01",
        title: "The world's top-ranked universities",
        text: "From Harvard to Stanford, the USA is home to the largest concentration of leading universities globally.",
      },
      {
        number: "02",
        title: "Flexible academic system",
        text: "US degrees are famously flexible — you can explore subjects before declaring a major and combine disciplines freely.",
      },
      {
        number: "03",
        title: "Scholarships & funding",
        text: "US universities offer some of the most generous scholarship and assistantship programmes for international students.",
      },
    ],
    fields: [
      "Business & Management",
      "Computer Science",
      "Engineering",
      "Medicine & Health",
      "Law",
      "Finance",
      "Data Science",
      "Arts & Design",
    ],
    note: "US visa interviews and financial documentation require careful preparation. We help you build a clean, well-evidenced file from the start — not patch it after a refusal.",
    faqs: [
      {
        question: "Do I need IELTS or TOEFL to apply to the USA?",
        answer:
          "Most US universities accept IELTS, TOEFL, PTE or Duolingo. The required score differs by university and programme. We confirm exactly what your shortlisted universities want before you book a test.",
      },
      {
        question: "How much does it cost to study in the USA?",
        answer:
          "Tuition varies dramatically — from community colleges to Ivy League. Living costs vary by city. Bring us your budget and we will show you what is realistically within it.",
      },
      {
        question: "How long does the F-1 visa take?",
        answer:
          "Visa processing depends on the embassy, the season and how complete your file is. A clean, well-evidenced application is the biggest thing you control.",
      },
      {
        question: "Are scholarships available for Pakistani students?",
        answer:
          "Yes — many US universities offer merit and need-based scholarships for international students. We guide you through the applications.",
      },
      {
        question: "When should I start?",
        answer:
          "For Fall intake, start 12-18 months ahead. For Spring intake, 8-10 months. Applications, tests and visa processing take months, not weeks.",
      },
    ],
  },
  {
    slug: "canada",
    code: "CAN",
    name: "Canada",
    flag: "🇨🇦",
    heroHeadline: "Study in Canada",
    heroSubtext:
      "Consistently ranked among the best study destinations for post-graduation employment and long-term return — Canada is a top choice for Pakistani students.",
    trustBar: [
      { label: "September & January", value: "Typical intakes" },
      { label: "IELTS / PTE", value: "Usual English requirement" },
      { label: "End-to-End", value: "Counselling, admission, visa" },
      { label: "FBR·SECP", value: "Registered & accredited" },
    ],
    why: [
      {
        number: "01",
        title: "Post-graduation work permit",
        text: "Canada offers generous post-graduation work permits and a clear pathway to permanent residency for eligible graduates.",
      },
      {
        number: "02",
        title: "Affordable & high quality",
        text: "Canadian tuition is often lower than the USA or UK, with universities consistently ranked in the global top 100.",
      },
      {
        number: "03",
        title: "Safe, welcoming, multicultural",
        text: "Canada is one of the safest, most welcoming countries for international students — with diverse communities across every city.",
      },
    ],
    fields: [
      "Business",
      "Computer Science",
      "Engineering",
      "Health Sciences",
      "Hospitality & Tourism",
      "Finance",
      "Data Science",
      "Environmental Studies",
    ],
    note: "Canada's study permit rules have tightened in recent years. We work from the current requirements at the time you apply — never from an old checklist.",
    faqs: [
      {
        question: "Do I need IELTS to apply to Canada?",
        answer:
          "Most Canadian universities accept IELTS or PTE. The required score differs by university and programme. We confirm exactly what your shortlisted universities want.",
      },
      {
        question: "How much does it cost to study in Canada?",
        answer:
          "Tuition and living costs vary by province and programme. Bring us your budget and we will show you what is realistically within it.",
      },
      {
        question: "How long does the study permit take?",
        answer:
          "Processing times depend on the visa office, the season and how complete your file is. A clean, well-evidenced application is the biggest thing you control.",
      },
      {
        question: "Can I work while studying?",
        answer:
          "Yes — most international students can work part-time on-campus or off-campus during their studies, subject to current rules.",
      },
      {
        question: "When should I start?",
        answer:
          "For September intake, start 12 months ahead. For January intake, 8-10 months. Visa processing alone can take several months.",
      },
    ],
  },
  {
    slug: "germany",
    code: "GER",
    name: "Germany",
    flag: "🇩🇪",
    heroHeadline: "Study in Germany",
    heroSubtext:
      "Strong post-study employment prospects and a reputation for rigorous, career-focused education — Germany is a top destination for engineering and technical students.",
    trustBar: [
      { label: "Winter & Summer", value: "Typical intakes" },
      { label: "IELTS / TOEFL", value: "Usual English requirement" },
      { label: "End-to-End", value: "Counselling, admission, visa" },
      { label: "FBR·SECP", value: "Registered & accredited" },
    ],
    why: [
      {
        number: "01",
        title: "Low or no tuition",
        text: "Many German public universities charge minimal or no tuition fees, even for international students.",
      },
      {
        number: "02",
        title: "Engineering powerhouse",
        text: "Germany is home to world-leading technical universities and Europe's strongest engineering job market.",
      },
      {
        number: "03",
        title: "Post-study work options",
        text: "Germany offers an 18-month job-seeking visa for graduates, plus a clear pathway to long-term residence.",
      },
    ],
    fields: [
      "Engineering",
      "Computer Science",
      "Business",
      "Natural Sciences",
      "Architecture",
      "Data Science",
      "Automotive Engineering",
      "Renewable Energy",
    ],
    note: "Germany requires proof of funds (blocked account) and, for some programmes, German language proficiency. We work from the current requirements at the time you apply.",
    faqs: [
      {
        question: "Do I need German to study in Germany?",
        answer:
          "Many programmes are taught in English at master's level. For bachelor's programmes, German is often required. We confirm the language requirements of each shortlisted university.",
      },
      {
        question: "How much does it cost to study in Germany?",
        answer:
          "Public universities usually charge minimal tuition. Living costs vary by city. A blocked account is required for the visa.",
      },
      {
        question: "How long does the visa take?",
        answer:
          "Processing times vary by embassy and season. A complete, well-prepared file is the biggest thing you control.",
      },
      {
        question: "Can I work while studying?",
        answer:
          "Yes — international students can work part-time during their studies, subject to current rules.",
      },
      {
        question: "When should I start?",
        answer:
          "For winter intake, start 12 months ahead. For summer intake, 8-10 months. APS certificate and visa processing take time.",
      },
    ],
  },
  {
    slug: "malaysia",
    code: "MY",
    name: "Malaysia",
    flag: "🇲🇾",
    heroHeadline: "Study in Malaysia",
    heroSubtext:
      "Malaysia is a well-liked choice for overseas students because of its reasonably priced tuition, excellent educational system, and varied cultural environment.",
    trustBar: [
      { label: "Multiple Intakes", value: "Typical intakes" },
      { label: "IELTS / PTE", value: "Usual English requirement" },
      { label: "End-to-End", value: "Counselling, admission, visa" },
      { label: "FBR·SECP", value: "Registered & accredited" },
    ],
    why: [
      {
        number: "01",
        title: "Affordable, without cutting corners",
        text: "Compared with the UK, USA or Australia, Malaysia delivers a quality education at a substantially lower cost.",
      },
      {
        number: "02",
        title: "Familiar, comfortable, close",
        text: "Culturally comfortable for Pakistani students, with a shorter flight and a smaller adjustment.",
      },
      {
        number: "03",
        title: "International branch campuses",
        text: "Several well-known international universities run full campuses in Malaysia — a foreign degree at a Malaysian cost.",
      },
    ],
    fields: [
      "Business",
      "IT & Computing",
      "Engineering",
      "Hospitality & Tourism",
      "Accounting",
      "Mass Communication",
      "Medicine",
      "Design",
    ],
    note: "Malaysia is often the smartest option for students whose budget rules out the UK or Australia — but it is not a fallback. We will tell you honestly if it fits your goals.",
    faqs: [
      {
        question: "Do I need IELTS or PTE to apply to Malaysia?",
        answer:
          "Most universities in Malaysia ask for proof of English, and IELTS or PTE are the usual routes — but the required score differs by university and by programme. We confirm exactly what your shortlisted universities want before you book a test.",
      },
      {
        question: "How much does it cost to study in Malaysia?",
        answer:
          "Tuition and living costs vary enormously between universities, cities and programmes. Bring us your budget and we will show you what is realistically within it.",
      },
      {
        question: "How long does the visa take?",
        answer:
          "Processing times depend on the embassy, the season and how complete your file is. A clean, complete, well-evidenced application is the single biggest thing standing between you and a straightforward decision.",
      },
      {
        question: "What if my visa is refused?",
        answer:
          "We go through the refusal reasons with you and talk honestly about whether reapplying makes sense and what would need to change.",
      },
      {
        question: "When should I start?",
        answer:
          "Between shortlisting, English tests, documents and visa processing, a comfortable application takes months, not weeks. If you are targeting the multiple intakes through the year, the conversation should be happening now.",
      },
    ],
  },
  {
    slug: "dubai",
    code: "UAE",
    name: "Dubai / UAE",
    flag: "🇦🇪",
    heroHeadline: "Study in Dubai",
    heroSubtext:
      "World-class universities set against a backdrop of vibrant, cosmopolitan city life in the Middle East — Dubai is fast becoming a top destination for Pakistani students.",
    trustBar: [
      { label: "September & January", value: "Typical intakes" },
      { label: "IELTS / PTE", value: "Usual English requirement" },
      { label: "End-to-End", value: "Counselling, admission, visa" },
      { label: "FBR·SECP", value: "Registered & accredited" },
    ],
    why: [
      {
        number: "01",
        title: "International branch campuses",
        text: "Many UK, Australian and Indian universities run full campuses in Dubai — a foreign degree closer to home.",
      },
      {
        number: "02",
        title: "Tax-free career opportunities",
        text: "Dubai's economy offers tax-free salaries and strong job markets for graduates in business, tech and finance.",
      },
      {
        number: "03",
        title: "Close to home, globally connected",
        text: "A short flight from Pakistan, with a truly international environment and easy access to the world.",
      },
    ],
    fields: [
      "Business & Management",
      "Engineering",
      "IT & Computing",
      "Hospitality & Tourism",
      "Finance",
      "Media & Communication",
      "Design",
      "Law",
    ],
    note: "Dubai's visa and admission rules are straightforward for Pakistani students, but university requirements vary. We work from current requirements at the time you apply.",
    faqs: [
      {
        question: "Do I need IELTS to apply to Dubai?",
        answer:
          "Most Dubai universities accept IELTS or PTE. The required score differs by university and programme. We confirm exactly what your shortlisted universities want.",
      },
      {
        question: "How much does it cost to study in Dubai?",
        answer:
          "Tuition and living costs vary by university and programme. Dubai is generally more affordable than the UK or USA, but higher than Malaysia.",
      },
      {
        question: "How long does the visa take?",
        answer:
          "Student visas are usually processed within a few weeks once you have an offer letter. A complete file is the biggest thing you control.",
      },
      {
        question: "Can I work while studying?",
        answer:
          "Yes — international students can work part-time with the correct permit, subject to current rules.",
      },
      {
        question: "When should I start?",
        answer:
          "For September intake, start 6-8 months ahead. For January intake, 4-5 months. Visa processing is generally faster than Western countries.",
      },
    ],
  },
  {
    slug: "france",
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    heroHeadline: "Study in France",
    heroSubtext:
      "Centuries of cultural heritage meet cutting-edge education, alongside the language, art and cuisine — France is a top destination for students seeking a truly European experience.",
    trustBar: [
      { label: "September & January", value: "Typical intakes" },
      { label: "IELTS / TOEFL", value: "Usual English requirement" },
      { label: "End-to-End", value: "Counselling, admission, visa" },
      { label: "FBR·SECP", value: "Registered & accredited" },
    ],
    why: [
      {
        number: "01",
        title: "Low tuition, world-class education",
        text: "French public universities charge very low tuition, even for international students, while maintaining global standards.",
      },
      {
        number: "02",
        title: "Business & management hub",
        text: "France is home to top business schools like HEC Paris, INSEAD and ESSEC — world leaders in management education.",
      },
      {
        number: "03",
        title: "Post-study work & culture",
        text: "France offers post-study work visas and one of the richest cultural experiences in Europe.",
      },
    ],
    fields: [
      "Business & Management",
      "Engineering",
      "Art & Design",
      "Fashion",
      "Culinary Arts",
      "Computer Science",
      "Political Science",
      "Hospitality",
    ],
    note: "France requires proof of French or English proficiency depending on the programme, plus a Campus France procedure. We work from the current requirements at the time you apply.",
    faqs: [
      {
        question: "Do I need French to study in France?",
        answer:
          "Many master's programmes are taught in English. For bachelor's, French is often required. We confirm the language requirements of each shortlisted university.",
      },
      {
        question: "How much does it cost to study in France?",
        answer:
          "Public universities charge very low tuition. Private schools and business schools charge more. Living costs vary by city.",
      },
      {
        question: "How long does the visa take?",
        answer:
          "Campus France and visa processing take time. A complete, well-prepared file is the biggest thing you control.",
      },
      {
        question: "Can I work while studying?",
        answer:
          "Yes — international students can work part-time during their studies, subject to current rules.",
      },
      {
        question: "When should I start?",
        answer:
          "For September intake, start 10-12 months ahead. Campus France procedure alone takes several months.",
      },
    ],
  },
  {
    slug: "cyprus",
    code: "CY",
    name: "Cyprus",
    flag: "🇨🇾",
    heroHeadline: "Study in Cyprus",
    heroSubtext:
      "Mediterranean charm, affordable tuition and a genuinely welcoming environment for international students — Cyprus is a growing favourite for Pakistani students.",
    trustBar: [
      { label: "September & February", value: "Typical intakes" },
      { label: "IELTS / PTE", value: "Usual English requirement" },
      { label: "End-to-End", value: "Counselling, admission, visa" },
      { label: "FBR·SECP", value: "Registered & accredited" },
    ],
    why: [
      {
        number: "01",
        title: "Affordable European education",
        text: "Cyprus offers European-standard education at a fraction of the cost of the UK or other EU countries.",
      },
      {
        number: "02",
        title: "English-taught programmes",
        text: "Most universities in Cyprus teach in English, with a large international student community.",
      },
      {
        number: "03",
        title: "Safe, warm, welcoming",
        text: "One of Europe's safest countries, with a warm Mediterranean climate and welcoming culture.",
      },
    ],
    fields: [
      "Business",
      "Computer Science",
      "Hospitality & Tourism",
      "Engineering",
      "Accounting",
      "Maritime Studies",
      "Psychology",
      "Design",
    ],
    note: "Cyprus offers a European degree at a fraction of the cost — but universities vary widely in reputation. We help you pick the ones that fit your goals.",
    faqs: [
      {
        question: "Do I need IELTS to apply to Cyprus?",
        answer:
          "Most universities in Cyprus accept IELTS or PTE. The required score differs by university and programme. We confirm exactly what your shortlisted universities want.",
      },
      {
        question: "How much does it cost to study in Cyprus?",
        answer:
          "Cyprus is significantly cheaper than the UK or other EU countries. Tuition and living costs vary by university and city.",
      },
      {
        question: "How long does the visa take?",
        answer:
          "Processing times depend on the embassy, the season and how complete your file is. A clean, complete, well-evidenced application is the biggest thing you control.",
      },
      {
        question: "Can I work while studying?",
        answer:
          "Yes — international students can work part-time during their studies, subject to current rules.",
      },
      {
        question: "When should I start?",
        answer:
          "For September intake, start 6-8 months ahead. For February intake, 4-5 months.",
      },
    ],
  },
  {
    slug: "finland",
    code: "FIN",
    name: "Finland",
    flag: "🇫🇮",
    heroHeadline: "Study in Finland",
    heroSubtext:
      "A Nordic education system known for quality, innovation and calm, well-resourced campuses — Finland is a top choice for students seeking a modern, forward-thinking education.",
    trustBar: [
      { label: "August & January", value: "Typical intakes" },
      { label: "IELTS / TOEFL", value: "Usual English requirement" },
      { label: "End-to-End", value: "Counselling, admission, visa" },
      { label: "FBR·SECP", value: "Registered & accredited" },
    ],
    why: [
      {
        number: "01",
        title: "World-class education system",
        text: "Finland's education system is consistently ranked among the best in the world, with a focus on innovation.",
      },
      {
        number: "02",
        title: "Scholarships for international students",
        text: "Many Finnish universities offer generous scholarships that can cover 50-100% of tuition.",
      },
      {
        number: "03",
        title: "Safe, modern, innovative",
        text: "One of the world's safest countries, with a tech-forward economy and excellent quality of life.",
      },
    ],
    fields: [
      "Information Technology",
      "Business",
      "Engineering",
      "Design",
      "Environmental Studies",
      "Education",
      "Health Sciences",
      "Data Science",
    ],
    note: "Finland charges tuition for non-EU students, but many universities offer scholarships that reduce or eliminate it. We help you find those opportunities.",
    faqs: [
      {
        question: "Do I need IELTS to apply to Finland?",
        answer:
          "Most Finnish universities accept IELTS or TOEFL. The required score differs by university and programme. We confirm exactly what your shortlisted universities want.",
      },
      {
        question: "How much does it cost to study in Finland?",
        answer:
          "Tuition for non-EU students typically ranges from €8,000 to €15,000 per year — but many universities offer substantial scholarships.",
      },
      {
        question: "How long does the visa take?",
        answer:
          "Processing times depend on the embassy, the season and how complete your file is. A clean, complete, well-evidenced application is the biggest thing you control.",
      },
      {
        question: "Can I work while studying?",
        answer:
          "Yes — international students can work part-time during their studies, subject to current rules.",
      },
      {
        question: "When should I start?",
        answer:
          "For August intake, start 10-12 months ahead. For January intake, 8-10 months. Scholarship applications have early deadlines.",
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}