var data = {
  db: process.env.REACT_APP_SITE,
  english: {
    topbar: {
      titleText: 'H-2A Vision',
      homeText: 'Home',
      resourcesText: 'Resources',
      searchText: 'Search',
    },
    home: {
      titleText: 'Welcome to H-2A Vision',
      descriptionText: 'Search for violation data about any H-2A sponsor company. This tool makes searching Department of Labor Wage and Hour compliance data easy.',
      searchButtonText: 'Search for a company',
      resourcesButtonText: 'Explore other resources',
      FAQTitleText: 'FAQ',
      mostViolationsTitleText: 'Companies with the most H-2A violations',
      faq: [
        {
          question: "What is H-2A?",
          answer: 'H-2A is a government program that allows US farms to bring temporary labor from foreign countries. Learn more about the program on our <a href="/resources">resources page</a>.'
        },
        {
          question: "Where is the data from?",
          answer: 'The data is from the <a href="https://enforcedata.dol.gov/views/data_summary.php">US Department of Labor Wage and Hour Division</a>. On this website, we only include companies that have H-2A violations. Also, all the code for this website is <a href="https://github.com/lucaspauker/h2a-vision">here</a>!'
        },
        {
          question: "Who is this for?",
          answer: 'We created this website to provide a resource for various parties that may be interested in easily finding information about H-2A violations. This website can be used by people looking for H-2A work who want to search potential employers. This website can also be used people researching H-2A.'
        },
        {
          question: "What is an H-2A violation?",
          answer: 'An H-2A violation can mean a variety of mispractice, including workers not provided with adequate meals, workers not provided with adequate housing, workers forced to pay for recruitment or transportation, or workers jobs improperly classified. More information about H-2A violations can be found <a href="https://www.dol.gov/agencies/whd/agriculture/h2a">here</a>.'
        },
        {
          question: "What are back wages?",
          answer: 'Back wages are wages that are paid back to workers. This is usually a result of wage theft or failing to pay for certain aspects of the H-2A program. Back wages are different than civil monetary penalties, which are collected by the government.'
        },
        {
          question: "Who are we?",
          answer: 'We are Stanford students that love to build technology that increases data visibility and understanding. We have researched the H-2A program and built this resource to apply our research.'
        },
      ],
    },
    footer: {
      text: 'The information provided by H-2A Vision is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.',
    },
    companyCard: {
      h2aViols: 'H-2A violations',
      h2aBW: 'Back wages',
      numEE: '# of employees affected',
      h2aCMP: 'Civil monetary penalties',
      learnMore: 'Learn more',
    },
    search: {
      title: "Search H-2A violation data",
      descriptionText: "Search by state or by company name. If a company is not on this website, it means that they did not have any reported H-2A violations.",
      stateText: "State",
      noneText: "All",
      alphabeticalText: "Alphabetical",
      h2aViolText: "H-2A Violations (↓)",
      h2aViolUpText: "H-2A Violations (↑)",
      sortText: "Sort",
      searchCompanyText: "Search by company name",
      refreshText: "Refresh",
      noCompaniesText: "No companies found",
    },
    company: {
      violStatsText: "Violation Statistics",
      extLinksText: "External Links",
      h2aViols: 'H-2A violations',
      h2aBW: 'Back wages',
      h2aCMP: 'Civil monetary penalties',
      numEE: '# of employees affected',
      totalText: 'Total penalties',
      averageText: 'Average violation cost',
      invStart: 'Investigation start date',
      invEnd: 'Investigation end date',
      dol: 'US Department of Labor Enforcement Data',
      back: 'Back',
    },
    resources: {
      title: "Resources",
      description: "Use this page to find resources about workers rights, government websites, and other resources for H-2A workers. Click on the cards to go to the external website.",
      genInfoTitle: "General Information",
      rightsTitle: "Workers Rights",
      searchTitle: "Employer Search",
      otherTitle: "Other Resources",
      genInfoData: [
        {
          title: "Department of Labor H-2A Website",
          text: "This is the official Department of Labor H-2A information website.",
          link: "https://www.dol.gov/agencies/whd/agriculture/h2a",
        },
        {
          title: "USCIS H-2A Website",
          text: "This is the official US Citizenship and Immigration Services H-2A information website.",
          link: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-2a-temporary-agricultural-workers",
        },
        {
          title: "Wikipedia",
          text: "Wikipedia page for H-2A.",
          link: "https://en.wikipedia.org/wiki/H-2A_visa",
        },
      ],
      rightsData: [
        {
          title: "Department of Labor Wage and Hour Division Rights Poster",
          text: "This flyer describes the rights of H-2A workers in a concise manner.",
          link: "https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/WHD1491Eng_H2A.pdf",
        },
        {
          title: "Contratados Know Your Rights",
          text: "This website provides information about the rights of workers during every step of the H-2A process.",
          link: "https://contratados.org/es/conoce-tus-derechos-h2x",
        },
        {
          title: "Legal Rights of H-2A Workers",
          text: "This website, made by Iowa State University, details the rights of H-2A workers.",
          link: "https://www.calt.iastate.edu/article/legal-rights-h-2a-workers",
        },
      ],
      searchData: [
        {
          title: "Seasonal Jobs Board",
          text: "This is the official Department of Labor seasonal jobs search tool.",
          link: "https://seasonaljobs.dol.gov/",
        },
        {
          title: "Contratados Company Search",
          text: "This website lets you search for employer and recruiter information and reviews.",
          link: "https://contratados.org",
        },
      ],
      otherData: [
        {
          title: "CATO Institute H-2A Information",
          text: "This website provides a detailed look into the H-2A program and the H-2A process.",
          link: "https://www.cato.org/publications/immigration-research-policy-brief/h-2a-visas-agriculture-complex-process-farmers-hire",
        },
        {
          title: "H-2 Recruitment Report",
          text: "This report, created by Centro de Los Derechos del Migrante, investigates H-2 program recruitment practices.",
          link: "https://cdmigrante.org/wp-content/uploads/2018/02/Recruitment_Revealed.pdf",
        },
        {
          title: "Bracero Legacy Project",
          text: "The Bracero Legacy Project seeks to document and explore the history of the Bracero program from the perspective of the workers.",
          link: "https://danielruanova.com/the-bracero-art-project/",
        },
      ],
    },
  },
  español: {
    topbar: {
      titleText: 'H-2A Visión',
      homeText: 'Principal',
      resourcesText: 'Recursos',
      searchText: 'Buscar',
    },
    home: {
      titleText: 'Bienvenidos a H-2A Visión',
      descriptionText: 'Busque datos de infracciones sobre cualquier empresa que usa H-2A. Esta herramienta facilita la búsqueda de datos del Departamento de Trabajo de EE. UU.',
      searchButtonText: 'Buscar una empresa',
      resourcesButtonText: 'Explora otros recursos',
      FAQTitleText: 'Preguntas más frecuentes',
      mostViolationsTitleText: 'Empresas con la mayor cantidad de infracciones H-2A',
      faq: [
        {
          question: "¿Que es H-2A?",
          answer: 'H-2A es un programa gubernamental de los EE. UU. que permite a las granjas estadounidenses traer empleados temporal de países extranjeros. Lea más información sobre el programa en nuestra <a href="/resources">página de recursos</a>.'
        },
        {
          question: "¿De dónde son los datos?",
          answer: 'Los datos provienen de la <a href="https://enforcedata.dol.gov/views/data_summary.php">División de Horas y Salarios del Departamento de Trabajo de EE. UU.</a> En este sitio web, solo incluimos datos de compañías que tienen violaciones H-2A. Además, ¡todo el código de este sitio web está <a href="https://github.com/lucaspauker/h2a-vision">aquí</a>!'
        },
        {
          question: "¿Para quién es esto?",
          answer: 'Creamos este sitio web para varias personas tienen interés en encontrar información sobre violaciones H-2A. Este sitio web puede ser útil para personas que buscan trabajo H-2A y desean buscar posibles empleadores. También puede ser utilizado por personas que quieren aprender más del programa H-2A.'
        },
        {
          question: "¿Qué es una violación H-2A?",
          answer: 'Una violación H-2A puede significar una variedad de prácticas como no dar suficiente comida a los trabajadores, no dando una vivienda adecuada a trabajadores, o la empresa no pagando por el reclutamiento o el transporte.. Puedes encontrar más información sobre las infracciones H-2A <a href="https://www.dol.gov/agencies/whd/agriculture/h2a">aquí</a>.'
        },
        {
          question: "¿Qué son los salarios atrasados?",
          answer: 'Los salarios atrasados son salarios que se devuelven a los trabajadores. Esto puede ser el resultado del robo de salarios o de no pagar para ciertos aspectos del programa H-2A. Los salarios atrasados son diferentes a las sanciones monetarias civiles, que son recaudado por el gobierno.'
        },
        {
          question: "¿Quienes somos nosotros?",
          answer: 'Somos estudiantes de la Universidad de Stanford a los que nos encanta crear tecnología. Hemos investigado el programa H-2A y hemos creado este recurso para aplicar que hemos aprendido de nuestra investigación.'
        },
      ]
    },
    footer: {
      text: 'La información proporcionada por H-2A Vision es solo para información general. Toda la información se proporciona de buena fe, sin embargo, no hacemos ninguna representación ni garantía de ningún tipo, expresa o implícita, con respecto a la precisión, adecuación, validez, confiabilidad, disponibilidad o integridad de cualquier información.',
    },
    companyCard: {
      h2aViols: 'H-2A infracciones',
      h2aBW: 'Salarios atrasados',
      numEE: '# de empleados afectados ',
      h2aCMP: 'Sanciones monetarias civiles',
      learnMore: 'Aprende más',
    },
    search: {
      title: "Busca datos de infracciones H-2A",
      descriptionText: "Busque por estado o por nombre de la empresa. Si una empresa no está en este sitio web, significa que no tiene ninguna violación H-2A.",
      stateText: "Estado",
      noneText: "Todos",
      alphabeticalText: "Alfabético",
      h2aViolText: "Violaciones H-2A (↓)",
      h2aViolUpText: "Violaciones H-2A (↑)",
      sortText: "Ordenar",
      searchCompanyText: "Buscar por nombre de empresa",
      refreshText: "Refrescar",
      noCompaniesText: "No se encontraron empresas",
    },
    company: {
      violStatsText: "Estadísticas de Infracciones",
      extLinksText: "Enlaces Externos",
      h2aViols: 'H-2A infracciones',
      h2aBW: 'Salarios atrasados',
      h2aCMP: 'Sanciones monetarias civiles',
      numEE: '# de empleados afectados ',
      totalText: 'Sanciones totales',
      averageText: 'Costo promedio de infracción',
      invStart: 'Fecha de inicio de la investigacion',
      invEnd: 'Fecha de finalización de la investigación',
      dol: 'Departamento de Trabajo de EE. UU.',
      back: 'Atrás',
    },
    resources: {
      title: "Recursos",
      description: "Use esta página para encontrar recursos sobre los derechos de los trabajadores, sitios web del gobierno EE. UU. y otros recursos para trabajadores H-2A. Haga clic en las tarjetas para ir al sitio web externo.",
      genInfoTitle: "Información General",
      rightsTitle: "Derechos de Trabajadores",
      searchTitle: "Búsqueda de Empleador",
      otherTitle: "Otros Recursos",
      genInfoData: [
        {
          title: "Sitio web del Departamento de Trabajo H-2A",
          text: "Este es el sitio web oficial del Departamento de Trabajo EE. UU.",
          link: "https://www.dol.gov/agencies/whd/agriculture/h2a",
        },
        {
          title: "Sitio web de USCIS H-2A",
          text: "Este es el sitio web oficial del Servicio de Ciudadanía e Inmigración de EE. UU.",
          link: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-2a-temporary-agricultural-workers",
        },
        {
          title: "Wikipedia",
          text: "Página de Wikipedia para H-2A.",
          link: "https://en.wikipedia.org/wiki/H-2A_visa",
        },
      ],
      rightsData: [
        {
          title: "Póster de derechos hecho por el Departamento de Trabajo EE. UU.",
          text: "Este folleto describe los derechos de los trabajadores H-2A.",
          link: "https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/WHD1491Eng_H2A.pdf",
        },
        {
          title: "Contratados Conoce Tus Derechos",
          text: "Este sitio web tiene información sobre los derechos de los trabajadores H-2A.",
          link: "https://contratados.org/es/conoce-tus-derechos-h2x",
        },
        {
          title: "Derechos legales de los trabajadores H-2A",
          text: "Este sitio web, creado por la Universidad Estatal de Iowa, detalla los derechos de los trabajadores H-2A.",
          link: "https://www.calt.iastate.edu/article/legal-rights-h-2a-workers",
        },
      ],
      searchData: [
        {
          title: "Junta de Trabajos de Temporada",
          text: "Esta es la junta de empleos estacionales oficial del Departamento de Trabajo.",
          link: "https://seasonaljobs.dol.gov/",
        },
        {
          title: "Contratados Buscar Empresa",
          text: "Este sitio web te permite buscar información y reseñas de empleadores y reclutadores.",
          link: "https://contratados.org",
        },
      ],
      otherData: [
        {
          title: "Instituto CATO Información de H-2A",
          text: "Este sitio web tiene una descripción detallada del programa H-2A y el proceso de H-2A.",
          link: "https://www.cato.org/publications/immigration-research-policy-brief/h-2a-visas-agriculture-complex-process-farmers-hire",
        },
        {
          title: "Informe de Reclutamiento H-2",
          text: "Este informe, creado por el Centro de Los Derechos del Migrante, investiga las prácticas de reclutamiento del programa H-2.",
          link: "https://cdmigrante.org/wp-content/uploads/2018/02/Recruitment_Revealed.pdf",
        },
        {
          title: "Proyecto Legado Bracero",
          text: "El Proyecto Legado Bracero busca documentar y explorar la historia del programa Bracero.",
          link: "https://danielruanova.com/the-bracero-art-project/",
        },
      ],
    },
  }
}

export default data;
