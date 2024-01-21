export interface Translations {
    english: Translation;
    spanish: Translation;
}
export interface Translation {
    menu?: Menu;
    about?: About;
    main?: Main;
    background?: Background[];
    skills?: Skills;
    projects?: Projects;
    button?: Button;
    languages?: Languages;
}

interface Menu {
    home?: string;
    about?: string;
    experience?: string;
    education?: string;
    projects?: string;
    skills?: string;
}

export interface About {
    title?: string;
    description?: Description[];
}

interface Description {
    paragraph?: string;
}

interface Main {
    mainTitle?: string;
    description?: string;
}

export interface Background {
    mainTitle?: string;
    elementList?: TimelineElement[];
}

export interface TimelineElement {
    title?: string;
    company?: string;
    initialDate?: string;
    finalDate?: string;
    description?: string;
}

export interface Skills {
    title?: string;
    description?: string;
    html?: string;
    css?: string;
    typescript?: string;
    angular?: string;
    react?: string;
    sass?: string;
    dotNet?: string;
    umbraco?: string;
    azure?: string;
    scrum?: string;
    git?: string;
    sql?: string;
}

export interface Projects {
    title: string;
    description: string;
    listOfProjects: Project[]; 
  }
  
  interface Project {
    project: ProjectDetail;
  }
  
  interface ProjectDetail {
    title: string;
    description: string;
  }

interface Button {
    link?: string;
    code?: string;
    download?: string;
    whatsapp?: string;
}

interface Languages {
    english: string;
    spanish: string;
}