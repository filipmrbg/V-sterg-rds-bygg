export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'nybyggnation',
    title: 'Nybyggnation',
    shortDescription: 'Kundanpassade villor, fritidshus, attefallshus och garage från grund till nyckelfärdigt hem med högsta precision.',
    heroText: 'Förverkliga ditt drömboende i Örebro län. Gedigen och trygg nybyggnation från idé till nyckelfärdigt resultat.',
    detailedDescription: `Att bygga nytt är en av livets största och mest spännande satsningar. Hos Västergårds Bygg AB får du en trygg och engagerad partner som guidar dig genom hela byggprocessen – oavsett om det gäller en modern villa, ett charmigt fritidshus, attefallshus eller garage.

Vi hanterar hela kedjan med noggrannhet och yrkesstolthet: från planering och stomresning till tak, fasad, fönstermontage och inredningssnickeri. Med vår bas i Örebro län säkerställer vi ett smidigt projektförlopp och ett resultat du kan njuta av under många årtionden.`,
    heroImage: '/service-smahusbyggnation.webp',
    image: '/service-smahusbyggnation.webp',
    href: '/tjanster#nybyggnation',
    tag: 'Nybyggnation',
    badge: 'Kundanpassat',
    highlights: [
      'Kundanpassade lösvirkeshus och modulhus',
      'Erfarna och noggranna yrkessnickare',
      'Hållbara material av högsta kvalitet',
      'Tydliga avtal, fast tidsplan och full transparens',
    ],
    sections: [
      {
        heading: 'Från ritning till nyckelfärdigt hem',
        text: 'Ett lyckat husbygge bygger på noggrann planering och ett genuint hantverkskunnande. Vi anpassar konstruktionen efter dina önskemål och tomtens unika förutsättningar.',
        bullets: [
          'Stomresning & Klimatskal: Energieffektiv och tät träkonstruktion',
          'Tak & Fasad: Tåliga fasadpaneler och komplett takläggning',
          'Interiört Snickeri: Golv, innerdörrar, lister och finsnickeri',
          'Slutbesiktning: Tryggt överlämnande med godkända protokoll',
        ],
      },
      {
        heading: 'Kvalitet och hållbarhet i fokus',
        text: 'Vi arbetar med beprövade byggmetoder och certifierade material anpassade för det svenska klimatet, vilket ger dig ett energieffektivt och långsiktigt hållbart boende.',
      },
    ],
    faq: [
      {
        question: 'Hur lång tid tar en nybyggnation?',
        answer: 'Tidsplanen beror på byggnadens storlek och komplexitet, men normalt tar en nybyggnation mellan 4 och 8 månader från påbörjad stomme till inflyttningsklart.',
      },
      {
        question: 'Kan ni bygga efter egna ritningar?',
        answer: 'Absolut! Vi bygger både utifrån färdiga arkitektritningar och hjälper till med rådgivning och anpassningar för att förverkliga dina idéer.',
      },
    ],
  },
  {
    slug: 'renovering',
    title: 'Renovering',
    shortDescription: 'Omfattande och varsamma renoveringar av hus, kök, ytskikt och fasader som höjer både standard och trivsel.',
    heroText: 'Ge ditt hus nytt liv med professionell renovering i Örebro och omnejd.',
    detailedDescription: `Oavsett om du vill förvandla ett äldre hus till en modern pärla, öppna upp planlösningen, bygga om köket eller förnya fasaden levererar Västergårds Bygg AB ett förstklassigt hantverk.

Vi kombinerar moderna byggtekniker med känsla för husets ursprungliga karaktär. Vårt mål är att renoveringen ska ske smidigt och med minsta möjliga påverkan på din vardag. Som privatperson nyttjar du givetvis ROT-avdraget med 30 % direkt på fakturan.`,
    heroImage: '/service-renovering.webp',
    image: '/service-renovering.webp',
    href: '/tjanster#renovering',
    tag: 'Invändigt & Utvändigt',
    badge: 'ROT avdrag',
    highlights: [
      'Totalrenovering och delrenovering av villor och lägenheter',
      'Golvbyten, panelbyten och bjälklagsarbeten',
      'Fasadrenovering, fönsterbyten och tilläggsisolering',
      '30% ROT-avdrag på arbetskostnaden direkt på fakturan',
    ],
    sections: [
      {
        heading: 'Skräddarsydd renovering med personligt engagemang',
        text: 'Vi sätter stort värde på öppen dialog och god planering. Tillsammans går vi igenom dina önskemål och hittar de bästa lösningarna för ditt hem.',
        bullets: [
          'Kök & Ytskikt: Montering av kök, golvläggning och snickerier',
          'Fasad & Tak: Nya panelbrädor, tilläggsisolering och fönstermontage',
          'Planlösningsändring: Avväxling av väggar och öppna sällskapsytor',
          'Utemiljö: Trädäck, altaner, verandor och trappor',
        ],
      },
    ],
    faq: [
      {
        question: 'Hur fungerar ROT-avdraget vid renovering?',
        answer: 'Som privatperson kan du dra av 30% av arbetskostnaden upp till 50 000 kr per person och år. Vi administrerar hela avdraget direkt mot Skatteverket på din faktura.',
      },
      {
        question: 'Kan man bo kvar under renoveringen?',
        answer: 'I de flesta fall går det alldeles utmärkt. Vi delar upp arbetet i etapper och håller arbetsytorna dammavskärmade och snyggt städade.',
      },
    ],
  },
  {
    slug: 'ombyggnation',
    title: 'Om- & Tillbyggnad',
    shortDescription: 'Utöka boytan med harmoniska tillbyggnader, taklyft, verandor och uterum som smälter in perfekt.',
    heroText: 'Väx i ditt nuvarande hem. Skräddarsydda om- och tillbyggnader i Örebro län.',
    detailedDescription: `När familjen växer eller behoven förändras är en tillbyggnad ofta den bästa och mest ekonomiska lösningen för att få mer utrymme utan att behöva flytta.

Västergårds Bygg AB utför allt från utbyggnad av vardagsrum och sovrum till isolerade uterum, taklyft, garage och verandor. Vi ser till att den nya delen integreras harmoniskt med husets befintliga stil och bärande konstruktion.`,
    heroImage: '/service-ombyggnation.webp',
    image: '/service-ombyggnation.webp',
    href: '/tjanster#ombyggnation',
    tag: 'Tillbyggnad & Utbyggnad',
    badge: 'Flexibla lösningar',
    highlights: [
      'Tillbyggnad av villor, fritidshus och garage',
      'Uterum, inglasade verandor och rejäla trädäck',
      'Avväxling av bärande konstruktioner och planlösningsändringar',
      'Kompletta takbyten och fasadlyft',
    ],
    sections: [
      {
        heading: 'Fler kvadratmeter och stabil konstruktion',
        text: 'En välplanerad tillbyggnad höjer både boendekvaliteten och fastighetens marknadsvärde. Vi säkerställer stabil grund, robust stomme och perfekt isolering.',
        bullets: [
          'Husutbyggnad: Extra sovrum, större kök eller rymliga sällskapsrum',
          'Uterum & Altan: Förläng sommaren med isolerade partier och trädäck',
          'Garage & Förråd: Funktionella och välbyggda komplementbyggnader',
          'Takbyte: Tätt och snyggt tak med tegel, betongpannor eller plåt',
        ],
      },
    ],
    faq: [
      {
        question: 'Krävs det bygglov för en tillbyggnad?',
        answer: 'Tillbyggnader upp till 15 kvm (Attefall) kräver normalt endast bygganmälan, medan större tillbyggnader kräver bygglov. Vi hjälper dig gärna med underlag inför anmälan eller ansökan.',
      },
    ],
  },
  {
    slug: 'totalentreprenad',
    title: 'Totalentreprenad',
    shortDescription: 'En enda kontaktperson och ett samlat ansvar från idé och ritning till nyckelfärdigt och besiktigat resultat.',
    heroText: 'Bekymmersfritt byggande med en helhetsansvarig partner i Örebro län.',
    detailedDescription: `Med totalentreprenad från Västergårds Bygg AB slipper du stressen med att själv samordna olika hantverkare, tidplaner och leveranser.

Vi tar ett helhetsansvar för hela byggprojektet från start till mål. Du får en och samma kontaktperson som håller i alla trådar och samordnar snickare, elektriker, VVS-montörer och målare. Det ger dig full trygghet, tydlig tidsplan och fast budget.`,
    heroImage: '/service-totalentreprenad.webp',
    image: '/service-totalentreprenad.webp',
    href: '/tjanster#totalentreprenad',
    tag: 'Helhetslösning',
    badge: '100% Trygghet',
    highlights: [
      'En och samma kontaktperson genom hela projektet',
      'Full samordning av alla behöriga hantverksgrupper',
      'Tydlig tidsplan, fasta avtal och transparent budget',
      'Trygga garantier och noggrann slutbesiktning',
    ],
    sections: [
      {
        heading: 'Enkelhet och trygghet för dig som beställare',
        text: 'När du anlitar oss för totalentreprenad kan du luta dig tillbaka och lita på att bygget drivs framåt strukturerat och professionellt.',
        bullets: [
          'Projektledning: Samordning av alla delmoment och underentreprenörer',
          'Kvalitetskontroll: Löpande avstämningar och strikta kvalitetskrav',
          'Tidsgaranti: Tydlig planering för att hålla utlovat inflyttningsdatum',
          'Ekonomisk trygghet: Fasta priser och inga dolda överraskningar',
        ],
      },
    ],
    faq: [
      {
        question: 'Vilka fördelar har totalentreprenad?',
        answer: 'Du har ett enda avtal och en kontaktperson som bär det juridiska och praktiska ansvaret för hela bygget. Det minimerar risken för missförstånd och förseningar.',
      },
    ],
  },
];

export default services;
