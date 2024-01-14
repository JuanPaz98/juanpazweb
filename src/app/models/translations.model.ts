export interface Translations {
    menu: Menu;
    about: About;
    main: Main;
    background: Background[];
    skills: Skills;
    projects: Projects;
    button: Button;
    languages: Languages;
}

interface Menu {
    home: string;
    about: string;
    experience: string;
    education: string;
    projects: string;
    skills: string;
}

interface About {
    title: string;
    description: Description[];
}

interface Description {
    paragraph: string;
}

interface Main {
    mainTitle: string;
    description: string;
}

interface Background {
    mainTitle: string;
    experienceList?: Experience[];
    educationList?: Education[];
}

interface Experience {
    title: string;
    company: string;
    initialDate: string;
    finalDate: string;
    description: string;
}

interface Education {
    title: string;
    initialDate: string;
    finalDate: string;
    description: string;
}

interface Skills {
    title: string;
    description: string;
    html: string;
    css: string;
    typescript: string;
    angular: string;
    react: string;
    sass: string;
    dotNet: string;
    umbraco: string;
    azure: string;
    scrum: string;
    git: string;
    sql?: string;
}

interface Projects {
    title: string;
    description: string;
    listOfProjects: Project[];
}

interface Project {
    title: string;
    description: string;
}

interface Button {
    link: string;
    code: string;
    download: string;
    whatsapp: string;
}

interface Languages {
    english: string;
    spanish: string;
}