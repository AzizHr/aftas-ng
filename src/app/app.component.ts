import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aftas-ng';

  constructor(private router: Router) {}

  isDashboardRoute(): boolean {
    return this.router.url.startsWith('/dashboard');
  }
  
}
