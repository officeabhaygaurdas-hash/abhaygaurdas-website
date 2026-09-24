// Comprehensive content data extracted directly from the verified biographical report and source archives

export interface TimelineEvent {
  year: string;
  age?: string;
  title: string;
  role: string;
  description: string;
  category: 'Foundation' | 'Gurukula' | 'Education' | 'Youth' | 'Leadership' | 'Projects';
  highlight?: boolean;
}

export interface TeachingItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Gita Wisdom' | 'Spiritual Leadership' | 'Youth Guidance' | 'Bhakti & Seva' | 'Financial Stewardship';
  sanskritVerse?: string;
  verseTranslation?: string;
  excerpt: string;
  readingTime: string;
  publishedDate: string;
  featured?: boolean;
  content: string[];
}

export interface SocialLinks {
  handle: string;
  instagram: string;
  facebook: string;
  x: string;
  youtube: string;
  email: string;
}

export const SOCIAL_LINKS: SocialLinks = {
  handle: "@abhaygaurdas",
  instagram: "https://www.instagram.com/abhaygaurdas/",
  facebook: "https://www.facebook.com/abhaygaurdas",
  x: "https://x.com/abhaygaurdas",
  youtube: "https://www.youtube.com/live/oxF4MKXXY_w?si=VihOJhe_wOjxKAwt",
  email: "office.abhaygaurdas@gmail.com"
};

export interface LectureItem {
  id: string;
  slug?: string;
  title: string;
  series: string;
  topic: 'Bhagavad Gita' | 'Youth & Focus' | 'Mind Control' | 'Devotional Service' | 'Karma & Destiny' | 'Leadership & Temple Management';
  youtubeId: string;
  duration: string;
  date: string;
  location: string;
  description: string;
  keyTakeaways: string[];
  thumbnail?: string;
  videoUrl?: string;
}

export interface YouthInitiative {
  title: string;
  tagline: string;
  metrics: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: 'Spiritual Life' | 'Guru & Parampara' | 'Youth Festivals' | 'Temple Service' | 'Dignitaries' | 'Pilgrimage';
  year: string;
}

export const BIOGRAPHY_DATA = {
  name: "HG Abhay Gaur Das",
  devotionalName: "Abhay Gaur Das",
  title: "Monk, Preacher, Youth Mentor & Financial Administrator",
  institution: "ISKCON Sri Sri Radha Parthasarathi Mandir, New Delhi",
  guru: "His Holiness Gopal Krishna Goswami Maharaj (1944–2024)",
  birthYear: "1994",
  birthPlace: "Khatauli, Muzaffarnagar district, Uttar Pradesh",
  shortBio: "HG Abhay Gaur Das is a dedicated monk and leader at ISKCON Delhi who combines strict Gaudiya Vaishnava monastic discipline with modern administrative excellence. Serving as Youth Mentor, CFO of ISKCON Delhi, and Head of the Bhishma Donor Care Department, he exemplifies leadership through humble devotion.",
  
  corePillars: [
    {
      number: "01",
      title: "Devotion with Discipline",
      tag: "Vrindavan Gurukula Anchor",
      description: "Rooted in nine continuous years at the Bhaktivedanta Gurukula in Vrindavan, upholding strict 4:00 AM sadhana, japa, and scriptural study.",
      highlight: "Daily 4 AM Sadhana & Gita Memorization",
      icon: "Scroll"
    },
    {
      number: "02",
      title: "Youth Transformation",
      tag: "Udgaar & BASE Movement",
      description: "Mentoring thousands of university students and young professionals across Delhi-NCR through BASE hostels, value education, and anti-addiction youth festivals.",
      highlight: "15,000+ Youth in Udgaar World Record",
      icon: "Users"
    },
    {
      number: "03",
      title: "Sacred Financial Stewardship",
      tag: "Audited Institutional Trust",
      description: "Managing temple finances and project coordination with rigorous transparency, treating every rupee as Krishna’s sacred Lakshmi.",
      highlight: "100% Audited Frugality & Pure Systems",
      icon: "ShieldCheck"
    },
    {
      number: "04",
      title: "Bhishma Donor Care",
      tag: "Pastoral Devotee Family Care",
      description: "Pioneering relationship-first patron care that treats donors not as financial contributors, but as family members advancing spiritually towards Krishna.",
      highlight: "Home Satsangs & Life-Cycle Samskaras",
      icon: "HeartHandshake"
    }
  ],

  quotes: [
    {
      sanskrit: "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् । यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् ॥",
      reference: "Bhagavad Gita 9.27",
      english: "Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform—do that, O son of Kunti, as an offering unto Me.",
      commentary: "Service is not defined by whether an action appears worldly or spiritual on the surface; it is consecrated by the consciousness of offering everything to the Supreme Lord."
    },
    {
      sanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम् ।",
      reference: "Hitopadesha",
      english: "True knowledge bestows humility; from humility comes worthiness and character.",
      commentary: "Knowledge without devotional humility inflates the false ego. Real education deepens gratitude and service."
    },
    {
      sanskrit: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया । उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः ॥",
      reference: "Bhagavad Gita 4.34",
      english: "Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him. The self-realized souls can impart knowledge unto you because they have seen the truth.",
      commentary: "In our Vaishnava lineage, every accomplishment is simply the causeless mercy and blessing of the Guru and Srila Prabhupada."
    }
  ]
};

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "1994",
    title: "Birth in a Devout Vaishnava Family",
    role: "Khatauli, Uttar Pradesh",
    description: "Born into a deeply spiritual family that regularly served sadhus and performed Radha-Madhava worship at home. From early childhood, soaked in sacred atmosphere and scriptural hymns.",
    category: "Foundation"
  },
  {
    year: "1999",
    title: "Father's ISKCON Life Membership",
    role: "First Connection with Srila Prabhupada",
    description: "His father became a Life Patron at ISKCON Vrindavan. The family received Back to Godhead magazine monthly, establishing a direct connection with the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada.",
    category: "Foundation"
  },
  {
    year: "2003 – 2012",
    age: "Class III to XII",
    title: "9 Years at Bhaktivedanta Gurukula, Vrindavan",
    role: "Vedic Sadhana & Rigorous Academic Training",
    description: "Entered Bhaktivedanta Gurukula and International School (BGIS) in Class III. Lived a disciplined monastic student life with 4:00 AM Mangala Arati, Sanskrit verses memorization, deity worship, balanced with ICSE/ISC academics, debates, and athletics.",
    category: "Gurukula",
    highlight: true
  },
  {
    year: "2012 – 2015",
    title: "Higher Education in Delhi",
    role: "B.Com & Company Secretary (CS) Pursuits",
    description: "Moved to Delhi for higher education, pursuing B.Com at Delhi University alongside professional Company Secretary (CS) examinations. Balanced corporate finance studies with residential youth center life at Laxmi Nagar BASE.",
    category: "Education"
  },
  {
    year: "2015",
    title: "Full-Time Monastic Dedication",
    role: "Brahmachari Monk at ISKCON Delhi",
    description: "Inspired by his Guru Maharaj HH Gopal Krishna Goswami Maharaj, made the conscious, wholehearted decision to dedicate his life as a full-time brahmachari monk at ISKCON Sri Sri Radha Parthasarathi Mandir, Delhi.",
    category: "Foundation",
    highlight: true
  },
  {
    year: "2016 – 2018",
    title: "Youth Preaching & Student Hostels (BASE)",
    role: "Youth Mentor, ISKCON Youth Forum (IYF)",
    description: "Guided hundreds of university students at Delhi University, IIT, and colleges across East Delhi. Initiated 'Shreshtha', a tailored spiritual and character-building wing specifically for Chartered Accountancy and CS students.",
    category: "Youth"
  },
  {
    year: "2017",
    title: "Siri Fort Youth Festival (Viplav)",
    role: "Organizing Committee Lead",
    description: "Spearheaded the massive youth conclave at Siri Fort Auditorium, gathering over 2,000 students for value-oriented drama, philosophical debate, and anti-addiction discourse.",
    category: "Youth"
  },
  {
    year: "2018",
    title: "Indira Gandhi Indoor Stadium Conclave",
    role: "Lead Coordinator",
    description: "Mobilized over 5,000 youth at Delhi's prestigious IG Indoor Stadium, engaging prominent spiritual speakers and national thinkers on purposeful living and national character.",
    category: "Youth"
  },
  {
    year: "2019",
    title: "Udgaar Anti-Addiction Youth Conclave",
    role: "Convenor & Operations Head",
    description: "Led the landmark 'Udgaar' festival at IG Stadium with over 15,000 youth in attendance. The event entered the World Book of Records for youth anti-addiction mobilization and was graced by Union Cabinet Ministers and spiritual dignitaries.",
    category: "Youth",
    highlight: true
  },
  {
    year: "2020 – 2021",
    title: "Financial Leadership & Pandemic Relief",
    role: "Chief Financial Officer (CFO), ISKCON Delhi",
    description: "Formally entrusted by HH Gopal Krishna Goswami Maharaj to manage ISKCON Delhi’s treasury, financial systems, budgeting, and audits during the Covid-19 pandemic, maintaining uninterrupted food relief and temple maintenance.",
    category: "Leadership",
    highlight: true
  },
  {
    year: "2021 – Present",
    title: "Head of Bhishma Donor Care Department",
    role: "Spiritual Relationship Stewardship",
    description: "Re-envisioned donor relationship management into a deeply spiritual pastoral care initiative. Established regular home visits, personalized spiritual counseling, and festival celebrations for hundreds of patron families.",
    category: "Leadership"
  },
  {
    year: "2022 – Present",
    title: "Sri Krishna-Arjuna Temple, Kurukshetra",
    role: "Finance & Project Coordination Lead",
    description: "Overseeing project finance, milestone disbursements, and donor coordination for the monumental ISKCON Sri Krishna-Arjuna Temple coming up at the historic battlefield of Kurukshetra, Haryana.",
    category: "Projects",
    highlight: true
  }
];

export const SERVICE_AREAS = [
  {
    id: "youth",
    title: "Youth Mentorship & Value Education",
    tagline: "Empowering Next-Gen Leaders with Vedic Clarity",
    description: "Guiding modern students and young professionals through stressful corporate and academic environments. Running residential BASE hostels, character education, and de-addiction initiatives.",
    image: "/images/ADA92781-D8DA-4079-954F-468852D4DEF0.JPG",
    stats: "15,000+ Youth Reached in Udgaar 2019",
    link: "/youth"
  },
  {
    id: "bhishma",
    title: "Bhishma Donor Care Department",
    tagline: "Devotional Relationship Stewardship",
    description: "Transforming traditional fundraising into profound spiritual care. Providing Life Patrons with scriptural discourses, spiritual counselling, samskara guidance, and heartfelt gratitude.",
    image: "/images/166FDB66-FA22-42B0-9F49-49B745D9C20F.JPG",
    stats: "Hundreds of Patron Families Nurtured",
    link: "/bhishma"
  },
  {
    id: "finance",
    title: "Temple Financial Administration",
    tagline: "Treating Every Rupee as Sacred Lakshmi",
    description: "Managing audits, computerized systems, transparent budgeting, and compliance at ISKCON Delhi under the direct instructions of HH Gopal Krishna Goswami Maharaj.",
    image: "/images/B6EEE94A-371B-4C3E-B8FD-D2A0B9C05530.JPG",
    stats: "100% Transparent Financial Systems",
    link: "/about#administration"
  },
  {
    id: "projects",
    title: "Kurukshetra Sri Krishna-Arjuna Temple",
    tagline: "Monumental Heritage at the Land of the Gita",
    description: "Coordinating project finances and infrastructure execution for the grand Sri Krishna-Arjuna Temple and Cultural Complex rising at Jyotisar, Kurukshetra.",
    image: "/images/3C7D35EC-37E3-4E2E-A02D-C460A56A68C9.PNG",
    stats: "Landmark Project on the Gita Battlefield",
    link: "/projects"
  },
  {
    id: "teachings",
    title: "Scriptural Preaching & Discourse",
    tagline: "Timeless Wisdom for Modern Dilemmas",
    description: "Delivering relatable, analytically sound Bhagavad Gita and Srimad Bhagavatam lectures in Hindi and English for corporate leaders, university students, and temple congregations.",
    image: "/images/1000170724.jpeg",
    stats: "Hundreds of Recorded Discourses",
    link: "/teachings"
  },
  {
    id: "lineage",
    title: "Guru-Seva & Vaishnava Tradition",
    tagline: "In the Footsteps of Srila Prabhupada",
    description: "Serving under the direct tutelage of HH Gopal Krishna Goswami Maharaj. Embodying the mood of trnad api sunicena—humility, dedication, and selfless service to the Vaishnavas.",
    image: "/images/bb9bc1cb-f9da-4784-954d-9df4a8a1bf82.jpg",
    stats: "Rooted in Authentic Gaudiya Lineage",
    link: "/about#guru"
  }
];

export const TEACHINGS_DATA: TeachingItem[] = [
  {
    id: "1",
    slug: "money-as-lakshmi-spiritual-finance",
    title: "Treating Resources as Sacred Lakshmi: The Ethics of Spiritual Stewardship",
    subtitle: "Why financial integrity in institutional service is the highest form of worship",
    category: "Financial Stewardship",
    sanskritVerse: "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् । तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥",
    verseTranslation: "Everything animate or inanimate that is within the universe is controlled and owned by the Lord. One should therefore accept only those things necessary for himself, which are set aside as his quota, and one should not accept other things, knowing well unto whom they belong. (Sri Ishopanishad, Mantra 1)",
    excerpt: "In a spiritual institution, financial management is not an administrative burden; it is sacred trust. Every paisa donated by a devotee is consecrated Lakshmi that belongs exclusively to Lord Krishna.",
    readingTime: "6 min read",
    publishedDate: "2024-03-15",
    featured: true,
    content: [
      "When His Holiness Gopal Krishna Goswami Maharaj entrusted me with the financial affairs of ISKCON Delhi, his first instruction was crystal clear: 'Remember that money collected in Krishna’s service is Lakshmi Devi herself. She must never be exploited for personal prestige or wasted in careless expenditure.'",
      "Modern corporate finance focuses on maximizing shareholder yield, often through speculative risk. In contrast, Vedic stewardship centers on 'Yukta Vairagya'—utilizing everything in the master's service with immaculate accounting and moral transparency.",
      "When we prepare budgets or process invoices, we do not view them merely as numbers on a spreadsheet. Each figure represents the sweat, faith, and hard-earned sacrifice of a devotee who desires to serve Sri Sri Radha Parthasarathi.",
      "Therefore, a spiritual administrator must practice dual vigilance: technical precision through modern digital auditing systems, and spiritual purity through daily sadhana and prayer."
    ]
  },
  {
    id: "2",
    slug: "navigating-distraction-youth-mind-control",
    title: "The Architecture of Focus: Mastering the Modern Mind through Gita Wisdom",
    subtitle: "Practical disciplines for youth facing digital overload and attention fragmentation",
    category: "Youth Guidance",
    sanskritVerse: "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्दृढम् । तस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम् ॥",
    verseTranslation: "The mind is restless, turbulent, obstinate and very strong, O Krishna, and to subdue it, I think, is more difficult than controlling the wind. (Bhagavad Gita 6.34)",
    excerpt: "The modern crisis of loneliness and depression among youth is not a failure of intelligence; it is an unanchored mind pulled by constant sensory stimulation.",
    readingTime: "5 min read",
    publishedDate: "2024-02-10",
    featured: true,
    content: [
      "In our youth mentorship programs across Delhi University and professional institutes, the most frequent struggle students express is not academic difficulty, but severe cognitive exhaustion.",
      "We live in an attention economy designed by algorithms to fragment human focus. Arjuna raised this exact question to Krishna 5,000 years ago on the battlefield of Kurukshetra.",
      "Krishna's answer in Gita 6.35 is twofold: 'abhyāsa' (deliberate, consistent practice) and 'vairāgya' (intelligent detachment). When a young person begins their morning with Mahamantra japa before touching their smartphone, they reclaim the cockpit of their mind.",
      "Spiritual discipline is not an archaic restriction; it is the ultimate mental freedom."
    ]
  },
  {
    id: "3",
    slug: "devotion-with-discipline-lessons-from-gurukula",
    title: "Devotion with Discipline: What 9 Years in Vrindavan Gurukula Taught Me",
    subtitle: "Reflections on waking at 4 AM, memorizing shlokas, and discovering inner joy",
    category: "Bhakti & Seva",
    sanskritVerse: "अभ्यासयोगयुक्तेन चेतसा नान्यगामिना । परमं पुरुषं दिव्यं याति पार्थानुचिन्तयन् ॥",
    verseTranslation: "He who meditates on Me as the Supreme Personality of Godhead, his mind constantly engaged in remembering Me, undeviated from the path, he, O Partha, is sure to reach Me. (Bhagavad Gita 8.8)",
    excerpt: "Entering the Bhaktivedanta Gurukula in Vrindavan in Class III was the greatest turning point of my life. There, spirituality was not a weekend ritual, but the oxygen of every breath.",
    readingTime: "8 min read",
    publishedDate: "2024-01-20",
    featured: true,
    content: [
      "At 4:00 in the morning, the temple bell in Raman Reti would ring. In the winter chill of Vrindavan, rising for Mangala Arati required surrender and stamina.",
      "Yet, once the curtains opened and Sri Sri Krishna-Balarama were revealed bathed in incense and lamps, any fatigue dissolved into transcendent wonder.",
      "The Gurukula education was holistic. Alongside studying ICSE science, mathematics, and English literature, we memorized the Bhagavad Gita and learned mridanga and harmonium.",
      "Discipline without love becomes dry legalism; love without discipline becomes sentimental whim. The Gaudiya Vaishnava path balances both in sweet surrender to the Lord."
    ]
  },
  {
    id: "4",
    slug: "bhishma-patron-care-as-spiritual-family",
    title: "Beyond Fundraising: The Philosophy of the Bhishma Department",
    subtitle: "Why caring for life patrons is an act of spiritual pastoral love",
    category: "Spiritual Leadership",
    sanskritVerse: "ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम् ॥",
    verseTranslation: "Those who render service unto Me in devotion are in Me, and I am also a friend to them. (Bhagavad Gita 9.29)",
    excerpt: "When someone supports a temple, they are not a client or an external funder. They are a dear devotee family member whom Srila Prabhupada entrusted to our shelter.",
    readingTime: "7 min read",
    publishedDate: "2023-11-28",
    featured: false,
    content: [
      "In many non-profit setups, donors receive a receipt and a quarterly brochure. But in ISKCON, our patrons are souls seeking spiritual upliftment for their entire lineage.",
      "Through the Bhishma Department at ISKCON Delhi, our primary mandate is not asking for contributions; it is giving spiritual nourishment. We visit patron homes for kirtan, celebrate their milestones, guide their children, and stand with them in moments of illness or crisis.",
      "Pitamaha Bhishma was the greatest example of unwavering commitment to righteousness. In the same spirit, our department seeks to protect and inspire every devotee who comes to the shelter of Sri Sri Radha Parthasarathi."
    ]
  }
];

export const LECTURES_DATA: LectureItem[] = [
  {
    id: "cfo-journey-talk",
    slug: "cfo-abhay-gaur-das-interview",
    title: "ISKCON Delhi के CFO Abhay Gaur Das का प्रेरणादायक सफर | Guru, Bhakti, Leadership & Temple Management",
    series: "Leadership, Guru & Temple Stewardship",
    topic: "Leadership & Temple Management",
    youtubeId: "oxF4MKXXY_w",
    duration: "1:14:22",
    date: "2024",
    location: "Special Live Feature Interview",
    description: "An intimate and inspiring feature on HG Abhay Gaur Das's transformative journey—from Vrindavan Gurukula to serving as Chief Financial Officer (CFO) of ISKCON Delhi, guiding modern youth, managing sacred institutional finances, and the grace of his spiritual master HH Gopal Krishna Goswami Maharaj.",
    keyTakeaways: [
      "The spiritual science of managing temple finances with absolute honesty as Krishna's Lakshmi",
      "How Gurukula discipline shaped leadership resilience in the corporate & monastic world",
      "Guru-Bhakti: Living by the instructions of HH Gopal Krishna Goswami Maharaj"
    ],
    thumbnail: "/images/featured_youtube_talk.jpg",
    videoUrl: "https://www.youtube.com/live/oxF4MKXXY_w?si=VihOJhe_wOjxKAwt"
  },
  {
    id: "1",
    title: "Mastering the Restless Mind: Bhagavad Gita Chapter 6 Demystified",
    series: "Vedic Psychology for Modern Times",
    topic: "Mind Control",
    youtubeId: "dQw4w9WgXcQ", // Embed placeholder or real ISKCON talk
    duration: "48:15",
    date: "2024-04-12",
    location: "ISKCON Glory of India Auditorium, New Delhi",
    description: "A deep dive into the psychological principles of the 6th chapter of Bhagavad Gita. How to conquer procrastination, anxiety, and wandering thoughts through sacred vibration.",
    keyTakeaways: [
      "The role of Buddhi (intelligence) in directing the senses",
      "Why emotional regulation starts with early morning sadhana",
      "The three-step strategy of practical detachment"
    ]
  },
  {
    id: "2",
    title: "Overcoming Fear & Uncertainty in Corporate & Student Life",
    series: "Sunday Feast Discourses",
    topic: "Youth & Focus",
    youtubeId: "b8y48k1L49U",
    duration: "54:30",
    date: "2024-02-18",
    location: "Siri Fort Auditorium, New Delhi",
    description: "Addressing the existential stress of competition, career pressure, and self-worth. Understanding that your true value is not determined by your LinkedIn title or income.",
    keyTakeaways: [
      "Karma Yoga: Disconnecting anxiety from results",
      "How to work with 100% effort without burnout",
      "Cultivating the internal witness consciousness"
    ]
  },
  {
    id: "3",
    slug: "bhagavad-gita-for-decision-makers",
    title: "Strategic Wisdom: Bhagavad Gita for Decision Makers & Leaders",
    series: "Leadership Through Service",
    topic: "Bhagavad Gita",
    youtubeId: "kXYZ123456",
    duration: "1:02:10",
    date: "2023-12-05",
    location: "FICCI Auditorium / ISKCON Delhi",
    description: "How ancient Vedic governance principles can reshape modern ethical leadership, team empathy, and sustainable institutional building.",
    keyTakeaways: [
      "The servant-leader paradigm of Maharaja Yudhishthira",
      "Balancing firm administrative justice with compassionate heart",
      "Frugality as a core leadership virtue"
    ]
  },
  {
    id: "4",
    title: "The Power of the Holy Name in Kali Yuga",
    series: "Bhakti Rasamrita Seminar",
    topic: "Devotional Service",
    youtubeId: "mAB987654",
    duration: "42:00",
    date: "2023-09-14",
    location: "Vrindavan Dham",
    description: "Exploring the science of sound vibration (Shabda Brahma) and how the Hare Krishna Mahamantra cleanses the mirror of the heart (ceto-darpana-marjanam).",
    keyTakeaways: [
      "The medicinal potency of the Maha-Mantra",
      "Avoiding the ten offenses in chanting",
      "Transforming routine chanting into heartfelt prayer"
    ]
  }
];

export const YOUTH_INITIATIVES: YouthInitiative[] = [
  {
    title: "Udgaar 2019: An Expression of Goodness",
    tagline: "India's Largest Youth Anti-Addiction Festival",
    metrics: "15,000+ Students • World Book of Records",
    period: "October 2019 • IG Stadium, New Delhi",
    description: "Conceived and executed under the guidance of ISKCON Youth Forum, Udgaar brought together over 15,000 students from across 100+ colleges to pledge against substance abuse, digital obsession, and moral degradation.",
    highlights: [
      "Entered the World Book of Records for massive youth de-addiction pledge",
      "Addressed by Union Health Minister Dr. Harsh Vardhan and top dignitaries",
      "Interactive skits, rock band devotional kirtans, and motivational workshops"
    ]
  },
  {
    title: "Viplav Youth Conclaves",
    tagline: "The Revolution of Thought and Consciousness",
    metrics: "2,000+ at Siri Fort (2017) • 5,000+ at IG Stadium (2018)",
    period: "2017 – 2018 • New Delhi",
    description: "Multi-edition youth conventions offering intellectually rigorous philosophical debates, moral science workshops, and cultural performances inspiring youth to live with higher purpose.",
    highlights: [
      "Siri Fort 2017: 2,000+ collegiate students engaged in value education",
      "IG Stadium 2018: 5,000+ youth mobilised on character and nation-building",
      "Keynote addresses on the science of karma, destiny, and mindful living"
    ]
  },
  {
    title: "BASE Youth Hostels & Student Mentorship",
    tagline: "Sanctuary for Character, Academic Focus & Devotion",
    metrics: "Multiple Centers across Delhi-NCR",
    period: "2015 – Present",
    description: "Residential spiritual hostels for university students where academic excellence goes hand-in-hand with sattvic diet, early morning sadhana, and peer support.",
    highlights: [
      "Laxmi Nagar BASE: Mentoring CA, CS, and commerce students",
      "North & South Campus wings for Delhi University scholars",
      "Weekly 'Discover Yourself' (DYS) 6-session foundation courses"
    ]
  },
  {
    title: "Shreshtha: The Professional Students Wing",
    tagline: "Spiritual Grounding for CA & CS Aspirants",
    metrics: "Specialised Professional Mentorship Group",
    period: "Initiated 2017",
    description: "Designed specifically to counter the acute isolation and burnout faced by students appearing for the grueling Chartered Accountancy and CS examinations.",
    highlights: [
      "Structured meditation breaks to combat exam anxiety",
      "Interactive sessions on ethical decision making in corporate practice",
      "Alumni mentorship by senior CA devotees"
    ]
  }
];

export const GALLERY_DATA: GalleryImage[] = [
  {
    id: "g0",
    src: "/images/abhay_gaur_prabhuji_hero.jpg",
    title: "HG Abhay Gaur Das at ISKCON Delhi",
    caption: "Joyful stage address at ISKCON Sri Sri Radha Parthasarathi Mandir, adorned with sacred Vaishnava tulasi and floral garlands.",
    category: "Spiritual Life",
    year: "2024"
  },
  {
    id: "g1",
    src: "/images/bb9bc1cb-f9da-4784-954d-9df4a8a1bf82.jpg",
    title: "Serving Sri Sri Gaura-Nitai with Guru Maharaj",
    caption: "Engaged in direct deity service and shringar alongside beloved spiritual master His Holiness Gopal Krishna Goswami Maharaj at ISKCON Delhi.",
    category: "Guru & Parampara",
    year: "2022"
  },
  {
    id: "g2",
    src: "/images/1000171378.jpeg",
    title: "On Stage with HH Gopal Krishna Goswami Maharaj",
    caption: "Accompanying Guru Maharaj during an auspicious temple festival address, receiving instructions on institutional service.",
    category: "Guru & Parampara",
    year: "2023"
  },
  {
    id: "g3",
    src: "/images/ADA92781-D8DA-4079-954F-468852D4DEF0.JPG",
    title: "Udgaar Youth Festival Leadership",
    caption: "At the historic Udgaar youth festival with VIP dignitaries, orchestrating the massive 15,000+ student convention.",
    category: "Youth Festivals",
    year: "2019"
  },
  {
    id: "g4",
    src: "/images/B6EEE94A-371B-4C3E-B8FD-D2A0B9C05530.JPG",
    title: "Welcoming Union Minister Gajendra Singh Shekhawat",
    caption: "Representing ISKCON Delhi leadership during the high-level visit of Union Cabinet Minister Gajendra Singh Shekhawat.",
    category: "Dignitaries",
    year: "2023"
  },
  {
    id: "g5",
    src: "/images/166FDB66-FA22-42B0-9F49-49B745D9C20F.JPG",
    title: "Hosting Dignitaries at Glory of India Cultural Centre",
    caption: "Guiding distinguished public leaders through the interactive Bhagavad Gita multimedia exhibitions at ISKCON New Delhi.",
    category: "Dignitaries",
    year: "2023"
  },
  {
    id: "g6",
    src: "/images/1000280433.jpeg",
    title: "Before the Astounding Bhagavad Gita",
    caption: "Standing beside the world's largest printed Bhagavad Gita at ISKCON Delhi, symbolising the global mission of Srila Prabhupada.",
    category: "Temple Service",
    year: "2023"
  },
  {
    id: "g7",
    src: "/images/4D8AA994-9667-4793-B47D-22CDFEEED831.JPG",
    title: "Ceremonial Presentation to Sri Sri Radha Parthasarathi",
    caption: "Participating in formal temple ceremonies and offerings in the main sanctum of ISKCON Delhi.",
    category: "Temple Service",
    year: "2023"
  },
  {
    id: "g8",
    src: "/images/3C7D35EC-37E3-4E2E-A02D-C460A56A68C9.PNG",
    title: "Pilgrimage to Badrinath Dham",
    caption: "Crossing the Alaknanda river bridge in deep contemplation at the holy Himalayan shrine of Sri Badrinath.",
    category: "Pilgrimage",
    year: "2022"
  },
  {
    id: "g9",
    src: "/images/IMG_5193.jpg",
    title: "Reflective Contemplation",
    caption: "Serene moments of prayer and meditation, seeking spiritual renewal in nature.",
    category: "Spiritual Life",
    year: "2023"
  },
  {
    id: "g10",
    src: "/images/1000053728.jpeg",
    title: "Delhi Youth Conclave at Red Fort Grounds",
    caption: "Leading thousands of youth in congregational chanting of the Holy Names at an outdoor public festival.",
    category: "Youth Festivals",
    year: "2019"
  },
  {
    id: "g11",
    src: "/images/1000170724.jpeg",
    title: "Traditional Vaishnava Shobha Yatra",
    caption: "In festive procession honoring the appearance day of the Supreme Lord with traditional turban and tilak.",
    category: "Spiritual Life",
    year: "2023"
  },
  {
    id: "g12",
    src: "/images/9919022F-340E-439A-A003-1DD06F9EB14F.JPG",
    title: "Sri Jagannath Snana Yatra Festival",
    caption: "Bathing Lord Jagannath, Baladeva, and Subhadra Maharani during the sacred Snana Yatra bathing ceremony.",
    category: "Temple Service",
    year: "2022"
  },
  {
    id: "g13",
    src: "/images/IMG_2490.jpg",
    title: "Dialogue with Swami Ramdev",
    caption: "Engaged in inter-spiritual dialogue on youth physical and mental wellness at a national convention.",
    category: "Dignitaries",
    year: "2019"
  },
  {
    id: "g14",
    src: "/images/87329B90-4DE3-4C8A-BCCE-D8C3E71F15B4.JPG",
    title: "Maha Abhisheka with Guru Maharaj",
    caption: "Assisting HH Gopal Krishna Goswami Maharaj in the sacred abhisheka of the deities.",
    category: "Guru & Parampara",
    year: "2021"
  }
];

export const UPCOMING_EVENTS = [
  {
    id: "ev-1",
    title: "The Art of Mindful Living: Sunday Gita Discourse",
    date: "Every Sunday, 5:30 PM – 7:00 PM",
    venue: "Main Temple Hall, ISKCON Sri Sri Radha Parthasarathi Mandir, New Delhi",
    category: "Discourse",
    description: "Weekly interactive exposition of Bhagavad Gita As It Is, followed by ecstatic Gaura Arati, kirtan, and sanctified prasadam feast.",
    speaker: "HG Abhay Gaur Das",
    registrationRequired: false
  },
  {
    id: "ev-2",
    title: "Awaken the Leader Within: Youth Spiritual Retreat",
    date: "15–17 November 2024",
    venue: "Vrindavan Dham (Bhaktivedanta Gurukula Campus)",
    category: "Retreat",
    description: "A transformative 3-day immersive retreat for college students and young professionals. Features meditation workshops, parikrama of sacred groves, and personal guidance.",
    speaker: "HG Abhay Gaur Das & Senior Mentors",
    registrationRequired: true
  },
  {
    id: "ev-3",
    title: "Bhishma Patrons Annual Deepotsava & Satsang",
    date: "02 November 2024, 6:00 PM",
    venue: "Glory of India Auditorium, ISKCON Delhi",
    category: "Patron Gathering",
    description: "Annual gathering of donor families to offer ghee lamps (Deep Daan) to Lord Damodara, celebrate spiritual milestones, and receive special prasadam blessings.",
    speaker: "HG Abhay Gaur Das & Temple Leadership",
    registrationRequired: true
  },
  {
    id: "ev-4",
    title: "Kurukshetra Sri Krishna-Arjuna Temple Update Seminar",
    date: "24 December 2024 (Gita Jayanti)",
    venue: "Jyotisar, Kurukshetra, Haryana & Live Stream",
    category: "Heritage & Project",
    description: "Special milestone presentation on the architectural progress and cultural vision of the grand upcoming temple at the site where the Gita was spoken.",
    speaker: "Project Leadership Team",
    registrationRequired: false
  }
];
