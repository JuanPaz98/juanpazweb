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
                    paragraph: 'I graduated from the MisiónTic 2022 program at the Universidad del Norte, an intensive bootcamp focused on web development. Throughout the program, I learned about python, HTML, CSS, JS, React, SQLite and programming logic and problem-solving.  I continue my self-study, dedicating time on platforms like YouTube, Platzi, and Udemy.'
                },
                {
                    paragraph : 'I like to spend my free time working on personal projects, learning new technologies, riding my bike, and doing exercise.'
                },
                {
                    paragraph: 'My main goal for this year is increase my seniority and get a new job where I can speak English all the time.'
                }
            ]
        },
        main: {
            mainTitle: "I'm Juan Paz",
            description: "Full Stack Developer with 3 years of experience specializing in Angular and .NET, building scalable, high-performance web applications. I develop dynamic, accessible UIs with Angular and well-structured APIs in .NET, following clean architecture and SOLID principles. I like to be committed, empathetic, and a team player, always striving to deliver high-quality solutions."
        },
        background: [
            {
                mainTitle: 'Experience',
                elementList: [
                    {
                        title: 'Frontend Developer',
                        company: 'Newshore',
                        initialDate: 'Nov 2022',
                        finalDate: 'Feb 2025',
                        description: 'UI Developer in the Master Product area, responsible for developing features on the main pages and sections of the application, such as the home page, promotion pages, banners, flight selection, and passenger form. My primary responsibilities encompass: Development of user stories with client-requested requirements, adding value to the product. Creation of components, services, and functionalities with Angular. To implement accessibility across various sections and components of our product. Creation of macros, repositories, and content in Umbraco CMS and .Net.'
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
            dotNet: 'Asp .Net',
            umbraco: 'Umbraco',
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
                        title: 'Meli Clon',
                        description: 'Currently, I am working on this project, It is a little Mercado Libre clone. Built in Angular and .Net'
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
                    paragraph: 'Soy Desarrollador Web Frontend, tengo 25 años y vivo en la ciudad de Cali, Colombia'
                },
                {
                    paragraph : 'Actualmente, estoy trabajando en Newshore, una empresa de desarrollo de software para aerolíneas, mi rol es de Desarrollador UI, en el equipo de Master Product, desarrollando funcionalidades en las páginas principales como la home, las páginas de promociones, banners, el buscador, selección de vuelos y formulario de pasajeros.'
                }, 
                {
                    paragraph : 'Soy egresado del programa MisiónTic 2022, en la Universidad del Norte. Bootcamp intensivo enfocado en el desarrollo web. Aquí aprendí sobre tecnologías como Python, HTML, CSS, JavaScript, React, SQLite, y adquirí bases de lógica de programación y resolución de problemas. Continúo estudiando constantemente por mi cuenta aprendiendo cosas nuevas en plataformas como Youtube, Platzi y Udemy.'
                },
                {
                    paragraph: 'Mi principal objetivo para este año es obtener un trabajo totalmente en ingles e incrementar mi seniority.'                
                }
            ]
        },
        main: {
            mainTitle: 'Soy Juan Paz',
            description: 'Desarrollador Frontend con más de 2 años de experiencia en tecnologías base como HTML, CSS, JS, con fortaleza principalmente en Angular, framework con el que trabajo a diario. Adicional cuento con conocimientos en Accesibilidad, Umbraco CMS y .Net. En mis habilidades blandas destacan mi empatía, compromiso y trabajo en equipo.'
        },
        background: [
            {
                mainTitle: 'Experiencia',
                elementList: [
                    {
                        title: 'Desarrollador Frontend',
                        company: 'Newshore',
                        initialDate: 'Nov 2022',
                        finalDate: 'Presente',
                        description: 'Desarrollador UI el área de Master Product, responsable de desarrollar funcionalidades en las páginas principales como la home, páginas de promociones, banners, selección de vuelos y formularios de pasajeros. Entre mis principales responsabilidades se encuentran: Desarrollar historias de usuario basado en los requerimientos del cliente, agregando valor al producto. Creación de componentes, servicios y varias funcionalidades con Angular. Implementar accesibilidad en varias secciones y componentes del producto. Creación de macros, repositorios y contenido en Umbraco CMS y .Net.'
                    },
                    {
                        title: 'Auxiliar de soporte ténico',
                        company: 'Quala S.A.',
                        initialDate: 'Mar 2021',
                        finalDate: 'Nov 2022',
                        description: 'Brindar soporte técnico remoto y en sitio para equipos de cómputo, dispositivos móviles (Honeywell, Motorola-Zebra), e impresión para el distrito Cali y sus agencias Pasto y Popayán. Manejo de inventario y solución de incidentes y requerimientos de usuario.'
                    },
                    {
                        title: 'SET Level 2 Support',
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
                        title: 'Desarrollador Web',
                        initialDate: 'Mar 2021',
                        finalDate: 'Dic 2021',
                        description: 'Bootcamp intensivo enfocado en el desarrollo web con énfasis en tecnologías como HTML, CSS, JavaScript, React, Python, Java y SQLite.'
                    },
                    {
                        title: 'Técnico en sistemas',
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
            dotNet: 'Asp .Net',
            umbraco: 'Umbraco',
            azure: 'Azure',
            scrum: 'Scrum',
            git: 'Git',
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
                        title: 'Meli Clon',
                        description: 'Actualmente, estoy trabajando en este proyecto. Es un pequeño clon de Mercado Libre. Construido en Angular y .Net'
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