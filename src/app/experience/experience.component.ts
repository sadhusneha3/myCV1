import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceTabs = [
    { key: 'internship', label: 'Internship' },
    { key: 'certificate', label: 'Certificate' },
    { key: 'course', label: 'Course' }
  ];

  activeExperienceTab: string | null = 'internship';

  selectExperienceTab(tab: string) {
    this.activeExperienceTab = tab;
  }
}
