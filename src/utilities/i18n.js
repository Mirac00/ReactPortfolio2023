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
        description1: "I am an applied computer science engineer working in e-commerce, marketing, and graphic design industries. Thanks to my experience, I can create modern, aesthetic, and user-friendly projects tailored to the needs of both businesses and individual clients.",
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
        professionalWebsitesDesc: "My specialty is Frontend development from design to implementation. I handle various projects from minor website modifications to complete designs.",
        cmsSystems: "CMS and E-commerce Systems",
        cmsSystemsDesc: "I also possess Backend skills. I work on integrating websites/stores with WordPress and PrestaShop APIs, and I create custom REST APIs.",
        fullstackSolutions: "Comprehensive Fullstack Solutions",
        fullstackSolutionsDesc: "An example of a comprehensive Fullstack project is a social media application for creators and its backend, created for my engineering thesis.",
        seeServices: "See services"
      },

      // article > CERTIFICATES
      certificates: {
        title: "Certificates and Qualifications",
        description: "My competencies confirmed by certificates in database and network security fields.",
        seeCertificates: "See certificates"
      },

      // Skills section
      skills: {
        title: "Skills",
        description:"I specialize in creating modern digital solutions, combining creativity with the latest technologies. Here are the tools and technologies I use in my daily work."
      },

      // PAGE > SERVICES
      servicesPage: {
        title: "My Services",
        professionalWebsites: {
          title: "Professional Websites",
          description: "I design and implement modern websites using JavaScript/TypeScript with React. Thanks to my graphic skills and e-commerce experience, I create cohesive, aesthetic, and functional projects tailored to client needs. I also collaborate with a freelance team, allowing me to handle complex projects in a modular way - efficiently, precisely, and with a wide range of possibilities.",
          features: [
            "Business card websites and landing pages",
            "Integrations with CMS systems (WordPress, PrestaShop) and e-commerce",
            "Graphic designs and interface implementations with emphasis on UX/UI",
            "One-page applications"
          ],
          githubButton: "FrontEnd",
          githubButton2: "BackEnd"
        },
        cmsSystems: {
          title: "CMS and E-commerce Systems",
          description: "I also work on backend programming, dealing with databases and API systems. I create custom solutions in C# using the .NET platform, with Entity Framework and MySQL databases. This allows me to build flexible REST APIs tailored to specific project needs. I also have practical knowledge of ready-made e-commerce and CMS systems like WordPress (including WooCommerce) and PrestaShop, which I work with at the API integration level. This enables me not only to develop store functionalities but also to synchronize them with external systems and automate sales processes.",
          features: [
            "Online stores",
            "Content management systems (CMS)",
            "Integrations with external services",
            "E-commerce process automation and data synchronization"
          ]
        },
        fullstackSolutions: {
          title: "Comprehensive Fullstack Systems",
          description: "SMtrend is a custom social media application built as part of my engineering thesis, showcasing my approach to comprehensive Fullstack programming. This project demonstrates my knowledge of web application architecture, ability to integrate frontend with backend, and create stable systems based on modern technologies. The frontend was built with React and TypeScript, while the backend uses .NET (C#) with JWT token-based authorization and CRUD operations. The application combines user management, security, and logical data modeling aspects.",
          features: [
            "Complete client-server architecture (React + .NET)",
            "Authorization and authentication using JWT tokens",
            "CRUD operations and data relationship management",
            "Project demonstrating independent implementation of a complete system"
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
        titleDesc: "I constantly develop my skills to provide the highest quality services. In my work, I combine technical knowledge with a practical approach to solving business problems.",
        certificate1: {
          title: "98-364: MTA Database Fundamentals",
          description: "This certificate confirms fundamental knowledge and skills related to databases, including relational databases like Microsoft SQL Server. It validates understanding of basic database concepts, data manipulation, and database administration."
        },
        certificate2: {
          title: "Certiport Network Security",
          description: "This certificate demonstrates fundamental knowledge and skills in security, including understanding security principles, operating system security, networks and devices. The holder shows commitment to data protection and development in IT security."
        },
        certificate3: {
          title: "Adobe Illustrator Certificate",
          description: "Confirms completion of a computer graphics course in Adobe Illustrator, covering graphic design, computer graphics editing and print preparation. This certificate validates essential skills for work in graphic design and visual processing."
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
        websites: "Strony internetowe",
        cms: "Systemy CMS i e-commerce",
        fullstack: "Kompleksowe systemy Fullstack"
      },
      // Interview component
      interview: {
        profileImageAlt: "Zdjęcie profilowe",
        titleLine1: "Strony internetowe",
        titleLine2: "Aplikacje Fullstack",
        titleLine3: "Sklepy internetowe",
        description1: "Jestem inżynierem informatyki stosowanej działającym w branży e-commerce, marketingu oraz projektowania graficznego. Dzięki zdobytemu doświadczeniu potrafię tworzyć nowoczesne, estetyczne i przyjazne użytkownikowi projekty, dopasowane do potrzeb zarówno firm, jak i indywidualnych klientów.",
        description2: "Sprawdź przykłady moich prac poniżej i przekonaj się, jak mogę pomóc w realizacji Twoich projektów!",
        buttonText: "Dowiedz się więcej o mnie",
        "greeting": {
          "part1": "Hello, I'm",
          "part2": "Sławek Zając"
        }
      },

      // STRONY > HOME
      home: {
        welcomeMessage: "Witamy",
        myBestProjects: "Moje najlepsze realizacje",
        "industries": {
          "coding": "Programowanie",
          "ecommerce": "E-commerce",
          "marketing": "Marketing"
        }
      },

      // artykuł > SERVICES
      services: {
        professionalWebsites: "Strony internetowe",
        professionalWebsitesDesc: "Moim głównym konikiem jest frontend – od projektów po implementację. Realizuję w tej mierze różne zlecenia, od lekkich modyfikacji stron po kompletne projekty.",
        cmsSystems: "Systemy CMS w e-commerce",
        cmsSystemsDesc: "Posiadam również umiejętności backendowe. Pracuję nad integracjami stron i sklepów internetowych z API WordPress i PrestaShop, a także tworzę autorskie REST API.",
        fullstackSolutions: "Kompleksowe rozwiązania Fullstack",
        fullstackSolutionsDesc: "Przykładem kompleksowego projektu Fullstack jest aplikacja społecznościowa dla twórców oraz jej backend, stworzona na potrzeby projektu do pracy inżynierskiej.",
        seeServices: "Zobacz usługi"
      },

      // artykuł > CERTIFICATES
      certificates: {
        title: "Certyfikaty i kwalifikacje",
        description: "Moje kompetencje potwierdzone certyfikatami w zakresie baz danych i bezpieczeństwa sieciowego.",
        seeCertificates: "Zobacz certyfikaty"
      },

      // Sekcja umiejętności
      skills: {
        title: "Umiejętności",
        description:"Specjalizuję się w tworzeniu nowoczesnych rozwiązań cyfrowych, łącząc kreatywność z najnowszymi technologiami. Oto narzędzia i technologie, które wykorzystuję w codziennej pracy."
      },

      // STRONA > USŁUGI
      servicesPage: {
        title: "Moje usługi",
        professionalWebsites: {
          title: "Profesjonalne strony internetowe",
          description: "Projektuję i wdrażam nowoczesne strony internetowe w technologiach JavaScript/TypeScript z użyciem Reacta. Dzięki umiejętnościom graficznym i doświadczeniu w e-commerce tworzę spójne, estetyczne i funkcjonalne projekty dopasowane do potrzeb klienta. Współpracuję także z zespołem freelancerów, co pozwala mi realizować rozbudowane zlecenia w modularny sposób – sprawnie, precyzyjnie i z szerokim zakresem możliwości.",
          features: [
            "Strony wizytówki i landing pages",
            "Integracje z systemami CMS (WordPress, PrestaShop) i e-commerce",
            "Projekty graficzne oraz implementacja interfejsów z naciskiem na UX/UI",
            "One-page applications"
          ],
          githubButton: "FrontEnd",
          githubButton2: "BackEnd"
        },
        cmsSystems: {
          title: "Systemy CMS i e-commerce",
          description: "Zajmuję się również programowaniem backendowym, pracując z bazami danych oraz systemami API. Tworzę autorskie rozwiązania w języku C# z wykorzystaniem platformy .NET, a jako warstwę danych stosuję Entity Framework z bazami MySQL. Dzięki temu mogę budować własne, elastyczne REST API dopasowane do konkretnych potrzeb klienta i projektu. Posiadam również praktyczną wiedzę na temat działania gotowych systemów e-commerce i CMS, takich jak WordPress (w tym WooCommerce) oraz PrestaShop, z którymi pracuję na poziomie integracji API. Umożliwia mi to nie tylko rozwijanie funkcjonalności sklepów, ale też ich synchronizację z zewnętrznymi systemami i automatyzację procesów sprzedażowych.",
          features: [
            "Sklepy internetowe",
            "Systemy zarządzania treścią (CMS)",
            "Integracje z zewnętrznymi usługami",
            "Automatyzacja procesów e-commerce i synchronizacja danych"
          ]
        },
        fullstackSolutions: {
          title: "Kompleksowe systemy Fullstack",
          description: "SMtrend to autorska aplikacja społecznościowa zbudowana w ramach pracy inżynierskiej, która stanowi przykład mojego podejścia do kompleksowego programowania Fullstack. Projekt ten pokazuje moją znajomość architektury aplikacji webowych, umiejętność integrowania frontendu z backendem oraz tworzenia stabilnych systemów opartych na nowoczesnych technologiach. Frontend powstał w React z użyciem TypeScriptu, natomiast backend oparty został na .NET (C#), z wdrożoną autoryzacją opartą o tokeny JWT oraz operacjami CRUD. Aplikacja łączy w sobie aspekty zarządzania użytkownikami, bezpieczeństwa oraz logicznego modelowania danych i relacji w systemie.",
          features: [
            "Pełna architektura klient–serwer (React + .NET)",
            "Autoryzacja i uwierzytelnianie z użyciem tokenów JWT",
            "Operacje CRUD i obsługa relacji między danymi",
            "Projekt ukazujący samodzielną realizację kompletnego systemu"
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
        titleDesc: "Ciągle rozwijam swoje umiejętności, aby zapewnić najwyższą jakość usług. W mojej pracy łączę wiedzę techniczną z praktycznym podejściem do rozwiązywania problemów biznesowych.",
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