/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 * Customized for Västergårds Bygg AB (Örebro län).
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  hero: {
    background: ImageSlot;
  };
  services: {
    nybyggnation?: ImageSlot;
    smahusbyggnation?: ImageSlot;
    renovering?: ImageSlot;
    ombyggnation?: ImageSlot;
    totalentreprenad?: ImageSlot;
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
  servicePages: {
    markarbete: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    dranering: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    betong: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
  };
}

const images: SiteImages = {
  logo: {
    url: '/logo-white.png',
    alt: 'Västergårds Bygg AB',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'Västergårds Bygg AB',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'Västergårds Bygg AB hantverk och snickeri i Örebro län',
    },
  },

  services: {
    nybyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Nybyggnation av villor och fritidshus i Örebro län',
    },
    smahusbyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Nybyggnation och lösvirkeshus i Örebro län',
    },
    renovering: {
      url: '/service-renovering.webp',
      alt: 'Renovering och hantverk i Örebro och omnejd',
    },
    ombyggnation: {
      url: '/service-ombyggnation.webp',
      alt: 'Ombyggnation, takbyten och tillbyggnad i Örebro',
    },
    totalentreprenad: {
      url: '/service-totalentreprenad.webp',
      alt: 'Totalentreprenad och samordnade byggprojekt',
    },
  },

  gallery: [
    { url: '/gallery-vb-1.webp', alt: 'Västergårds Bygg AB snickeri och byggprojekt' },
    { url: '/gallery-vb-2.webp', alt: 'Västergårds Bygg AB renovering och tillbyggnad' },
    { url: '/gallery-vb-3.webp', alt: 'Västergårds Bygg AB stomresning och träkonstruktion' },
    { url: '/gallery-vb-4.webp', alt: 'Västergårds Bygg AB altanbygge och uterum' },
    { url: '/gallery-vb-5.webp', alt: 'Västergårds Bygg AB takarbete och fasad' },
    { url: '/gallery-vb-6.webp', alt: 'Västergårds Bygg AB inredningssnickeri och finish' },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'Västergårds Bygg AB projekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'Byggarbetsplats i Örebro',
    },
  },

  about: {
    hero: {
      url: '/logo-dark.png',
      alt: 'Västergårds Bygg AB logotyp',
    },
    teamMember: {
      url: '/logo-white.png',
      alt: 'Teammedlem',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant hantverk i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från idé till färdigt resultat',
  },

  portfolio: [
    {
      image: { url: '/gallery-vb-1.webp', alt: 'Västergårds Bygg AB nybyggnad och snickeri' },
      title: 'Nybyggnation & Träkonstruktion',
      category: 'Nybyggnation',
    },
    {
      image: { url: '/gallery-vb-2.webp', alt: 'Västergårds Bygg AB ombyggnad' },
      title: 'Om- & Tillbyggnad',
      category: 'Tillbyggnad',
    },
    {
      image: { url: '/gallery-vb-3.webp', alt: 'Västergårds Bygg AB stomresning' },
      title: 'Stomresning & Fasad',
      category: 'Entreprenad',
    },
    {
      image: { url: '/gallery-vb-4.webp', alt: 'Västergårds Bygg AB altan och trädäck' },
      title: 'Altan & Uterum',
      category: 'Tillbyggnad',
    },
    {
      image: { url: '/gallery-vb-5.webp', alt: 'Västergårds Bygg AB tak och fasadrenovering' },
      title: 'Tak & Fasadrenovering',
      category: 'Renovering',
    },
    {
      image: { url: '/gallery-vb-6.webp', alt: 'Västergårds Bygg AB interiör och finsnickeri' },
      title: 'Interiör & Finsnickeri',
      category: 'Renovering',
    },
  ],

  servicePages: {
    markarbete: {
      hero: {
        url: '/service-markarbete.webp',
        alt: 'Markarbete och schaktning',
      },
      section1: {
        url: '/service-markarbete.webp',
        alt: 'Förberedelse för tomtplanering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Grävmaskin på arbetsplats',
      },
    },
    dranering: {
      hero: {
        url: '/service-dranering.webp',
        alt: 'Dränering av husgrund',
      },
      section1: {
        url: '/service-dranering.webp',
        alt: 'Montering av Isodrän fuktskydd',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbete med dräneringsslangar',
      },
    },
    betong: {
      hero: {
        url: '/service-betong.webp',
        alt: 'Gjutning av betongplatta',
      },
      section1: {
        url: '/service-betong.webp',
        alt: 'Stenläggning och armering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Färdig betonggrund',
      },
    },
  },
};

export default images;
