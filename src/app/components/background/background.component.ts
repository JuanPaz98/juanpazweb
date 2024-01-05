import { Component, OnInit } from '@angular/core';
import { TimelineConfig } from 'src/app/models/timeline.config';

@Component({
  selector: 'experience',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})

export class BackgroundComponent implements OnInit {

  public experienceConfig!: TimelineConfig;
  public educationConfig!: TimelineConfig;

  ngOnInit(): void {
    this.experienceConfig = this.buildExperienceConfig()
    this.educationConfig = this.buildEducationConfig()
  }

  buildExperienceConfig(): TimelineConfig {
    return {
      mainTitle: 'Experience',
      elements: [
        {
          title: 'Frontend Developer',
          company: 'Newshore',
          initialDate: 'Nov 2022',
          finalDate: 'Present',
          description: 'UI Developer in the Master Product area, responsible for developing features on the main pages and sections of the application, such as the home page, promotion pages, banners, flight selection, and passenger form. My primary responsibilities encompass: Development of user stories with client-requested requirements, adding value to the product. Creation of components, services, and some functionalities with Angular. To implement accessibility across various sections and components of our product. Creation of macros, repositories, and content in Umbraco CMS.'
        },
        {
          title: 'experiencia 2',
          initialDate: 'background',
          finalDate: 'background',
          description: 'Background'
        },
        {
          title: 'experiencia 3',
          initialDate: 'background',
          finalDate: 'background',
          description: 'Background'
        }
      ]
    }
    
  }
  
  buildEducationConfig(): TimelineConfig {
    return {
      mainTitle: 'Education',
      elements: [
        {
          title: 'Educacion 1',
          initialDate: 'background',
          finalDate: 'background',
          description: 'Background'
        },
        {
          title: 'Educacion 2',
          initialDate: 'background',
          finalDate: 'background',
          description: 'Background'
        },
        {
          title: 'Educacion 3',
          initialDate: 'background',
          finalDate: 'background',
          description: 'Background'
        }
      ]
    }
    
  }

}
