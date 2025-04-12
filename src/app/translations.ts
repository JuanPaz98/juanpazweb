import { Translations } from "./models/translations.model";

export const translations = {
    english: {
        menu: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            education: 'Education',
            projects: 'Projects',
            skills: 'Skills',
        },
        about: {
            title: 'About Me',
            description: [
                {
                    paragraph: 'I am a FullStack Developer, I am 26 years old, living in the city of Cali, Colombia.'
                },
                {
                    paragraph: "I am currently working as a freelance developer and I am in the last semesters of my Systems Engineering degree. I have three years of experience in software development and more than seven years in the technology industry. I also graduated from Universidad del Norte's MisiónTIC 2022 program, an intensive web development bootcamp."
                },
                {
                    paragraph : 'In my free time, I enjoy working on personal projects, exploring new technologies, riding motorcycle, exercising, and spending time with my family.'
                },
                {
                    paragraph: 'My main goal this year is to increase my seniority and secure a new position where I can use English on a daily basis.'
                }
            ]
        },
        main: {
            mainTitle: "I'm Juan Paz",
            description: "Full Stack Developer with 3 years of experience specializing in Angular and .NET, building scalable, high-performance web applications. I develop dynamic, accessible UIs with Angular and well-structured APIs in .NET, following clean architecture, applying design patterns and SOLID principles. I like to be committed, empathetic, and a team player, always striving to deliver high-quality solutions."
        },
        background: [
            {
                mainTitle: 'Experience',
                elementList: [
                    {
                        title: 'Freelance Developer',
                        company: 'Jirka IT Solutions',
                        initialDate: 'Mar 2025',
                        finalDate: 'Present',
                        description: 'Responsible for developing responsive and reusable UI components using Angular to support client products. Involved in debugging and resolving issues across the frontend and parts of the backend to maintain system stability. Also handle integration and testing of APIs to ensure efficient communication between application layers.'
                    },
                    {
                        title: 'Frontend Developer',
                        company: 'Newshore',
                        initialDate: 'Nov 2022',
                        finalDate: 'Feb 2025',
                        description: 'UI Developer in the Master Product area, responsible for developing features on the main pages and sections of the application, such as the home page, promotion pages, banners, flight selection, and passenger form. My primary responsibilities encompass: Development of user stories with client-requested requirements, adding value to the product. Creation of components, services, and functionalities with Angular. To implement accessibility across various sections and components of our product. Creation of macros, repositories, and content in Umbraco CMS and .Net.'
                    },
                    {
                        title: 'Desarrollador de Software',
                        company: 'Poliedro Software',
                        initialDate: 'May 2022',
                        finalDate: 'Oct 2022',
                        description: 'Responsible for developing user stories based on client requirements to deliver valuable product features. Builds UI components and API endpoints, while also handling bug fixes across both frontend and backend. Continuously improves skills in Angular and .NET through hands-on development.'
                    },
                    {
                        title: 'Information Technology Support Assistant',
                        company: 'Quala S.A.',
                        initialDate: 'Mar 2021',
                        finalDate: 'Nov 2022',
                        description: 'Provide remote and on-site support for computer equipment, mobile devices (Honeywell, Motorola-Zebra), and printing services for the Cali district and its agencies in Pasto and Popayán. Manage asset inventory and handle incident resolution and user requests.'
                    },
                    {
                        title: 'SET Level 2 Support',
                        company: 'ARUS',
                        initialDate: 'Feb 2019',
                        finalDate: 'Mar 2021',
                        description: "Provide Helpdesk support and on-site assistance for computer and printer equipment at the client's headquarters (Fundación Valle del Lili). Proficient in Active Directory management, SAP handling, office applications, and delivering excellent customer service."
                    }
                ]
            },{
                mainTitle: 'Education',
                elementList: [
                    {
                        title: "Systems Engineer",
                        initialDate: 'Mar 2025',
                        finalDate: 'Present',
                        description: 'Systems Engineering student at Universidad INCCA de Colombia, currently in the final semesters of the program. The degree provides a solid foundation in computer science, information systems management, and process analysis, with an emphasis on software development and web technologies.'
                    },
                    {
                        title: 'Web Developer',
                        initialDate: 'Mar 2021',
                        finalDate: 'Dec 2021',
                        description: 'Intensive bootcamp focused on web development. Emphasis in technologies such as HTML, CSS, JavaScript, React, Python, Java and SQLite'
                    },
                    {
                        title: 'Systems Technician',
                        initialDate: 'Feb 2017',
                        finalDate: 'Feb 2018',
                        description: 'Emphasis in computer management, formatting, software installation, and supporting applications and operatives systems.'
                    }
                ]
            }
        ],
        skills: {
            title: 'Skills',
            description: 'My Technology stack',
            html: 'Html',
            css: 'Css',
            typescript: 'Ts',
            angular: 'Angular',
            react:'React',
            sass: 'Sass',
            bootstrap: 'Bootstrap',
            material: 'A. Material',
            primeNg: 'PrimeNg',
            dotNet: 'Asp .Net',
            umbraco: 'Umbraco',
            redis: 'Redis',
            keycloak: 'Keycloak',
            docker: 'Docker',
            azure: 'Azure',
            scrum: 'Scrum',
            git: 'Git',
            sql: 'SQL'
        },
        projects: {
            title: 'My Projects',
            description: 'I like spending my free time in some personal projects. These are some of them:',
            listOfProjects: [
                { 
                    project: {
                        title: 'To-Do App',
                        description: 'A To-Do list application built with .NET MVC and SQL Server, hosted on Azure. Features JWT-based authentication and enhanced security using Azure Key Vault.'
                    }
                },
                { 
                    project: {
                        title: 'Rick and Morty App',
                        description: 'Web application built with Angular and Bootstrap that consumes the Rick and Morty API. It is fully responsive, includes pagination, and allows users to search for characters.'
                    }
                },
                { 
                    project: {
                        title: 'Stock Flow App (In development)',
                        description: 'Application for order and inventory management. Built with a .NET API using clean architecture, CQRS, Redis caching, and authentication via Keycloak.'
                    }
                }
            ]
        },
        button: {
            link: 'Link',
            code: 'Code',
            download: 'Download CV',
            whatsapp: 'Write me'
        },
        languages: {
            english: 'English',
            spanish: 'Spanish',
        }
    },

    // Spanish
    spanish: {
        menu: {
            home: 'Inicio',
            about: 'Sobre Mi',
            experience: 'Experiencia',
            education: 'Educación',
            projects: 'Proyectos',
            skills: 'Habilidades',
        },
        about: {
            title: 'Sobre Mi',
            description: [
                {
                    paragraph: 'Soy Desarrollador FullStack, tengo 26 años y vivo en la ciudad de Cali, Colombia.'
                },
                {
                    paragraph : 'Actualmente trabajo como desarrollador freelance y estoy cursando los últimos semestres de la carrera de Ingeniería de Sistemas. Tengo tres años de experiencia en desarrollo de software y más de siete años en la industria tecnológica. También me gradué del programa MisiónTIC 2022 de la Universidad del Norte, un bootcamp intensivo de desarrollo web.'
                }, 
                {
                    paragraph : 'En mi tiempo libre, disfruto trabajar en proyectos personales, aprender nuevas tecnologías, rodar en mi moto, hacer ejercicio y compartir con mi familia.'
                },
                {
                    paragraph: 'Mi objetivo principal este año es aumentar mi nivel de experiencia y conseguir un nuevo empleo donde pueda usar el inglés de forma constante.'                
                }
            ]
        },
        main: {
            mainTitle: 'Soy Juan Paz',
            description: 'Desarrollador Full Stack con 3 años de experiencia, especializado en Angular y .NET, creando aplicaciones web escalables y de alto rendimiento. Desarrollo interfaces de usuario dinámicas y accesibles con Angular, y APIs bien estructuradas en .NET, aplicando clean architecture, patrones de diseño y principios SOLID. Soy comprometido, empático y con habilidad para el trabajo en equipo, enfocado en entregar software de calidad.'
        },
        background: [
            {
                mainTitle: 'Experiencia',
                elementList: [
                    {
                        title: 'Desarrollador Freelance',
                        company: 'Jirka IT Solutions',
                        initialDate: 'Mar 2025',
                        finalDate: 'Actualidad',
                        description: 'Responsable del desarrollo de componentes de interfaz de usuario responsivos y reutilizables utilizando Angular para los productos del cliente. Depuración y resolución de errores tanto en el frontend como en partes del backend para garantizar la estabilidad del sistema. Además, integración y pruebas de APIs para asegurar una comunicación eficiente entre las capas de la aplicación.'
                    },
                    {
                        title: 'Desarrollador Frontend',
                        company: 'Newshore',
                        initialDate: 'Nov 2022',
                        finalDate: 'Feb 2025',
                        description: 'Desarrollador UI el área de Master Product, responsable de desarrollar funcionalidades en las páginas principales como la home, páginas de promociones, banners, selección de vuelos y formularios de pasajeros. Entre mis principales responsabilidades se encuentran: Desarrollar historias de usuario basado en los requerimientos del cliente, agregando valor al producto. Creación de componentes, servicios y varias funcionalidades con Angular. Implementar accesibilidad en varias secciones y componentes del producto. Creación de macros, repositorios y contenido en Umbraco CMS y .Net.'
                    },
                    {
                        title: 'Desarrollador de Software',
                        company: 'Poliedro Software',
                        initialDate: 'May 2022',
                        finalDate: 'Oct 2022',
                        description: 'Responsable del desarrollo de historias de usuario basadas en los requerimientos del cliente para entregar funcionalidades de valor al producto. Construcción de componentes de interfaz y endpoints de API, además de la resolución de errores tanto en frontend como en backend. Mejora continua de habilidades en Angular y .NET mediante el desarrollo práctico.'
                    },
                    {
                        title: 'Auxiliar de soporte técnico',
                        company: 'Quala S.A.',
                        initialDate: 'Mar 2021',
                        finalDate: 'Nov 2022',
                        description: 'Brindar soporte técnico remoto y en sitio para equipos de cómputo, dispositivos móviles (Honeywell, Motorola-Zebra), e impresión para el distrito Cali y sus agencias Pasto y Popayán. Manejo de inventario y solución de incidentes y requerimientos de usuario.'
                    },
                    {
                        title: 'Soporte SET Nivel 2',
                        company: 'ARUS',
                        initialDate: 'Feb 2019',
                        finalDate: 'Mar 2021',
                        description: "Brindar soporte técnico remoto y en sitio para equipos de cómputo e impresoras a la sede cliente Valle del Lili. Manejo de directorio activo, SAP, aplicaciones de office y brindar un excelente servicio al cliente."
                    }
                ]
            },{
                mainTitle: 'Educación',
                elementList: [
                    {
                        title: 'Ingeniero de Sistemas',
                        initialDate: 'Mar 2025',
                        finalDate: 'Presente',
                        description: 'Estudiante de Ingeniería de Sistemas en la Universidad INCCA de Colombia, actualmente cursando los últimos semestres de formación. La carrera ofrece una sólida base en ciencias computacionales, gestión de sistemas de información y análisis de procesos. Con énfasis en desarrollo de software y tecnologías web.'
                    },
                    {
                        title: 'Desarrollador Web',
                        initialDate: 'Mar 2021',
                        finalDate: 'Dic 2021',
                        description: 'Bootcamp intensivo enfocado en el desarrollo web con énfasis en tecnologías como HTML, CSS, JavaScript, React, Python, Java y SQLite.'
                    },
                    {
                        title: 'Técnico en Sistemas',
                        initialDate: 'Feb 2017',
                        finalDate: 'Feb 2018',
                        description: 'Énfasis en manejo de equipos de cómputo, formateo, instalación de software, y soporte a aplicaciones y sistemas operativos.'
                    }
                ]
            }
        ],
        skills: {
            title: 'Habilidades',
            description: 'Mi Stack tecnológico',
            html: 'Html',
            css: 'Css',
            typescript: 'Ts',
            angular: 'Angular',
            react:'React',
            sass: 'Sass',
            bootstrap: 'Bootstrap',
            material: 'A. Material',
            primeNg: 'PrimeNg',
            dotNet: 'Asp .Net',
            umbraco: 'Umbraco',
            redis: 'Redis',
            keycloak: 'Keycloak',
            docker: 'Docker',
            azure: 'Azure',
            scrum: 'Scrum',
            git: 'Git',
            sql: 'SQL'
        },
        projects: {
            title: 'Mis Proyectos',
            description: 'En ocasiones, suelo invertir mi tiempo libre en algunos proyectos personales. Aquí algunos de ellos:',
            listOfProjects: [
                { 
                    project: {
                        title: 'To-Do App',
                        description: 'Aplicación de lista de tareas desarrollada con .NET MVC y SQL Server, alojada en Azure. Implementa autenticación con JWT y seguridad mejorada mediante Azure Key Vault.'
                    }
                },
                { 
                    project: {
                        title: 'Rick and Morty App',
                        description: 'Aplicación web desarrollada con Angular y Bootstrap, que consume la API de Rick and Morty. Es responsive, tiene paginación y permite buscar personajes.'
                    }
                },
                { 
                    project: {
                        title: 'Stock Flow App (En desarrollo)',
                        description: 'Aplicación para la gestión de pedidos e inventario. API en .NET, arquitectura limpia, CQRS, caché con Redis y autenticación con Keycloak.'
                    }
                }
            ]
        },
        button: {
            link: 'Enlace',
            code: 'Código',
            download: 'Descargar HV',
            whatsapp: 'Escríbeme'
        },
        languages: {
            english: 'Inglés',
            spanish: 'Español',
        }
    }
} as Translations;