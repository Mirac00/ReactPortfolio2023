import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // COMPONENTS > NAVBAR
      navbar: {
        start: "Start",
        aboutMe: "About Me",
        services: "Services",
        certificates: "Certificates",
        contact: "Contact",
        name: "Sławomir Zając"
      },

      // COMPONENTS > DROPDOWN (MenuItems)
      dropdown: {
        websites: "Professional Websites",
        cms: "CMS and E-commerce Systems",
        fullstack: "Comprehensive Fullstack Solutions"
      },
      // Interview component
      interview: {
        profileImageAlt: "Profile picture",
        titleLine1: "Websites",
        titleLine2: "Fullstack Applications",
        titleLine3: "Online Stores",
        description1: "I am an applied computer science engineer, actively working in the e-commerce, marketing, and graphic design industries. Thanks to my experience, I am able to create modern, visually appealing, and user-friendly digital projects tailored to the needs of both businesses and individual clients.",
        description2: "Check out examples of my work below and see how I can help with your projects!",
        buttonText: "Learn more about me",
        "greeting": {
          "part1": "Hello, I'm",
          "part2": "Sławek Zając"
        }
      },

      // PAGES > HOME
      home: {
        welcomeMessage: "Welcome",
        myBestProjects: "My Best Projects",
        "industries": {
          "coding": "Coding",
          "ecommerce": "E-commerce",
          "marketing": "Marketing"
        }
      },

      // article > SERVICES
      services: {
        professionalWebsites: "Professional Websites",
        professionalWebsitesDesc: "I specialize in creating modern, responsive websites. My projects combine aesthetics with functionality, providing excellent user experiences. I offer comprehensive solutions tailored to each client's individual needs.",
        cmsSystems: "CMS and E-commerce Systems",
        cmsSystemsDesc: "I create advanced content management systems and e-commerce stores based on the latest technologies. My solutions are characterized by high performance, security and ease of use. I provide full integration with payment systems and marketing tools.",
        fullstackSolutions: "Comprehensive Fullstack Solutions",
        fullstackSolutionsDesc: "SM Trend is an example of an advanced fullstack system demonstrating my technical and marketing skills. The project includes an original authentication system, advanced content filters and analytical tools. This is a comprehensive solution combining technology with effective audience targeting.",
        seeServices: "See services"
      },

      // article > CERTIFICATES
      certificates: {
        title: "Certificates and Qualifications",
        description: "My competencies confirmed by certificates in the field of databases and network security. I constantly develop my skills to provide the highest quality of services. In my work, I combine technical knowledge with a practical approach to solving business problems.",
        seeCertificates: "See certificates"
      },

      // PAGE > SERVICES
      servicesPage: {
        title: "My Services",
        professionalWebsites: {
          title: "Professional Websites",
          description: "I specialize in designing and implementing:",
          features: [
            "Business card websites and landing pages",
            "Portfolios for professionals",
            "Corporate and institutional websites",
            "One-page applications"
          ],
          githubButton: "FrontEnd",
          githubButton2: "BackEnd"
        },
        cmsSystems: {
          title: "CMS and E-commerce Systems",
          description: "I offer comprehensive systems:",
          features: [
            "Online stores",
            "Content management systems (CMS)",
            "Sales platforms",
            "Product management systems"
          ]
        },
        fullstackSolutions: {
          title: "Comprehensive Fullstack Solutions",
          description: "I create dedicated systems combining:",
          features: [
            "Advanced user interfaces",
            "Efficient API and business logic",
            "Database integration",
            "Marketing and analytical solutions"
          ]
        },
        navigation: {
          websites: "Websites",
          cms: "CMS Systems",
          fullstack: "Fullstack Solutions",
          contactText: "Are you interested?",
          contactLabel: "CONTACT"
        }
    },

      // COMPONENT > ABOUT ME
      aboutme: {
        title: "Curriculum Vitae",
        links: "Links:",
        nextImage: "Next image"
      },

      // COMPONENT > CONTACT
      contact: {
        title: "Contact",
        email: "Email address: slawomirzajc@gmail.com",
        phone: "Tel: 575 180 010",
        nameLabel: "First and last name:",
        emailLabel: "Email address:",
        messageLabel: "Message:",
        sendButton: "Send",
        successMessage: "Message sent",
        errorMessage: "An error occurred"
      },

      // PAGE > CERTIFICATES
      certificatesPage: {
        title: "Certificates",
        certificate1: {
          title: "98-364: MTA Database Fundamentals",
          description: "This certificate confirms fundamental knowledge and skills related to databases, including relational databases such as Microsoft SQL Server. The certificate validates understanding of basic database concepts, data manipulation, and database administration."
        },
        certificate2: {
          title: "Certiport Network Security",
          description: "This certificate demonstrates fundamental knowledge and skills in security, including understanding security principles, operating system security, networks and devices. The holder of this certificate shows commitment to data protection and development in IT security."
        },
        certificate3: {
          title: "Adobe Illustrator Certificate",
          description: "Confirms completion of a computer graphics course in Adobe Illustrator, covering graphic design, computer graphics editing and print preparation. This certificate validates skills essential for work in graphic design and visual processing."
        }
      }
    }
  },
  pl: {
    translation: {
      // KOMPONENTY > NAVBAR
      navbar: {
        start: "Start",
        aboutMe: "O mnie",
        services: "Usługi",
        certificates: "Certyfikaty",
        contact: "Kontakt",
        name: "Sławomir Zając"
      },

      // KOMPONENTY > DROPDOWN (MenuItems)
      dropdown: {
        websites: "Profesjonalne Strony Internetowe",
        cms: "Systemy CMS i E-commerce",
        fullstack: "Kompleksowe Systemy Fullstack"
      },
      // Interview component
      interview: {
        profileImageAlt: "Zdjęcie profilowe",
        titleLine1: "Strony internetowe",
        titleLine2: "Aplikacje Fullstack",
        titleLine3: "Sklepy internetowe",
        description1: "Jestem inżynierem informatyki stosowanej, działającym w branży e-commerce, marketingu oraz projektowania graficznego. Dzięki zdobytemu doświadczeniu potrafię tworzyć nowoczesne, estetyczne i przyjazne użytkownikowi projekty, dopasowane do potrzeb zarówno firm, jak i indywidualnych klientów.",
        description2: "Sprawdź przykłady moich prac poniżej i przekonaj się, jak mogę pomóc w realizacji Twoich projektów!",
        buttonText: "Dowiedz się o mnie więcej",
        "greeting": {
          "part1": "Hello, I'm",
          "part2": "Sławek Zając"
        }
      },

      // STRONY > HOME
      home: {
        welcomeMessage: "Witamy",
        myBestProjects: "Moje Najlepsze Realizacje",
        "industries": {
          "coding": "Coding",
          "ecommerce": "E-commerce",
          "marketing": "Marketing"
        }
      },

      // artykuł > SERVICES
      services: {
        professionalWebsites: "Profesjonalne Strony Internetowe",
        professionalWebsitesDesc: "Specjalizuję się w tworzeniu nowoczesnych, responsywnych stron internetowych. Moje projekty łączą estetykę z funkcjonalnością, zapewniając doskonałe doświadczenia użytkownika. Oferuję kompleksowe rozwiązania dostosowane do indywidualnych potrzeb każdego klienta.",
        cmsSystems: "Systemy CMS i E-commerce",
        cmsSystemsDesc: "Tworzę zaawansowane systemy zarządzania treścią oraz sklepy internetowe oparte o najnowsze technologie. Moje rozwiązania charakteryzują się wysoką wydajnością, bezpieczeństwem i łatwością obsługi. Zapewniam pełną integrację z systemami płatności i narzędziami marketingowymi.",
        fullstackSolutions: "Kompleksowe Rozwiązania Fullstack",
        fullstackSolutionsDesc: "SM Trend to przykład zaawansowanego systemu fullstack demonstrującego moje umiejętności techniczne i marketingowe. Projekt obejmuje autorski system uwierzytelniania, zaawansowane filtry treści i narzędzia analityczne. To kompleksowe rozwiązanie łączące technologię z efektywnym targetowaniem odbiorców.",
        seeServices: "Zobacz usługi"
      },

      // artykuł > CERTIFICATES
      certificates: {
        title: "Certyfikaty i Kwalifikacje",
        description: "Moje kompetencje potwierdzone certyfikatami w zakresie baz danych i bezpieczeństwa sieciowego. Ciągle rozwijam swoje umiejętności, aby zapewnić najwyższą jakość usług. W mojej pracy łączę wiedzę techniczną z praktycznym podejściem do rozwiązywania problemów biznesowych.",
        seeCertificates: "Zobacz certyfikaty"
      },

      // STRONA > USŁUGI
      servicesPage: {
        title: "Moje Usługi",
        professionalWebsites: {
          title: "Profesjonalne Strony Internetowe",
          description: "Specjalizuję się w projektowaniu i implementacji:",
          features: [
            "Stron wizytówek i landing pages",
            "Portfolio dla profesjonalistów",
            "Stron firmowych i instytucjonalnych",
            "One-page applications"
          ],
          githubButton: "FrontEnd",
          githubButton2: "BackEnd"
        },
        cmsSystems: {
          title: "Systemy CMS i E-commerce",
          description: "Oferuję kompleksowe systemy:",
          features: [
            "Sklepy internetowe",
            "Systemy zarządzania treścią (CMS)",
            "Platformy sprzedażowe",
            "Systemy zarządzania produktami"
          ]
        },
        fullstackSolutions: {
          title: "Kompleksowe Systemy Fullstack",
          description: "Tworzę dedykowane systemy łączące:",
          features: [
            "Zaawansowane interfejsy użytkownika",
            "Wydajne API i logikę biznesową",
            "Integrację z bazami danych",
            "Rozwiązania marketingowe i analityczne"
          ]
        },
        navigation: {
          websites: "Strony WWW",
          cms: "Systemy CMS",
          fullstack: "Rozwiązania Fullstack",
          contactText: "Jesteś zainteresowany?",
          contactLabel: "KONTAKT"
        }
    },
      // KOMPONENT > O MNIE
      aboutme: {
        title: "Curriculum Vitae",
        links: "Linki:",
        nextImage: "Następne zdjęcie"
      },

      // KOMPONENT > KONTAKT
      contact: {
        title: "Kontakt",
        email: "Adres e-mail: slawomirzajc@gmail.com",
        phone: "Tel: 575 180 010",
        nameLabel: "Imię i nazwisko:",
        emailLabel: "Adres e-mail:",
        messageLabel: "Wiadomość:",
        sendButton: "Wyślij",
        successMessage: "Wiadomość wysłana",
        errorMessage: "Wystąpił błąd"
      },

      // STRONA > CERTYFIKATY
      certificatesPage: {
        title: "Certyfikaty",
        certificate1: {
          title: "98-364: MTA Database Fundamentals",
          description: "Ten certyfikat potwierdza podstawową wiedzę i umiejętności związane z bazami danych, w tym z relacyjnymi bazami danych, takimi jak Microsoft SQL Server. Certyfikat ten potwierdza znajomość podstawowych koncepcji bazy danych, manipulowania danymi oraz administrowania bazą danych."
        },
        certificate2: {
          title: "Certiport Network Security",
          description: "Ten certyfikat wykazuje podstawową wiedzę i umiejętności z zakresu bezpieczeństwa, w tym zrozumienie zasad bezpieczeństwa, bezpieczeństwa systemów operacyjnych, sieci i urządzeń. Posiadacz tego certyfikatu wykazuje zaangażowanie w ochronę danych i rozwój w dziedzinie bezpieczeństwa IT."
        },
        certificate3: {
          title: "Certyfikat Adobe Illustrator",
          description: "Potwierdza ukończenie kursu grafiki komputerowej w programie Adobe Illustrator, obejmującego projektowanie graficzne, edycję grafiki komputerowej oraz przygotowanie do druku. Ten certyfikat potwierdza umiejętności niezbędne do pracy w zakresie projektowania graficznego i obróbki wizualnej."
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['cookie']
    }
  });

export default i18n;