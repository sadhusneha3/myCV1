import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NAV_ITEMS } from '../../navigation/navigation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navitems = NAV_ITEMS
  constructor(private router: Router) { }

  routepage(url: any) {
    console.log('Navigating to:', url);
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    this.router.navigate([url]);
  }


}