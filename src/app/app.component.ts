import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template:`
    <main class="main">
      <app-navbar></app-navbar>
    </main>
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'voyage-palette';
}
