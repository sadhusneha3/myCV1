import { Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [


    {
        path: '',
        loadComponent: () =>
            import('./layout/layout.component').then(
                (m) => m.LayoutComponent
            ),
        title: 'Layout',
        children: [
            {
                path: '',
                redirectTo: 'about',
                pathMatch: 'full'
            },
            {
                path: 'experience',
                loadComponent: () =>
                    import('./experience/experience.component').then(
                        (m) => m.ExperienceComponent
                    ),
                title: 'Experience',
            },
            {
                path: 'education',
                loadComponent: () =>
                    import('./education/education.component').then(
                        (m) => m.EducationComponent
                    ),
                title: 'Education',
            },
            {
                path: 'about',
                loadComponent: () =>
                    import('./about/about.component').then(
                        (m) => m.AboutComponent
                    ),
                title: 'About',
            },
            {
                path: 'skills',
                loadComponent: () =>
                    import('./skills/skills.component').then(
                        (m) => m.SkillsComponent
                    ),
                title: 'About',
            },
            {
                path: 'contact',
                loadComponent: () =>
                    import('./contact/contact.component').then(
                        (m) => m.ContactComponent
                    ),
                title: 'Contact',
            },
            {
                path: 'projects',
                loadComponent: () =>
                    import('./projects/projects.component').then(
                        (m) => m.ProjectsComponent
                    ),
                title: 'Projects',
            },
        ]
    }
];
