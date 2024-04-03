import { Component,OnInit,NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Userinfo } from './userinfo';
import { PersondetailComponent } from './persondetail/persondetail.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,RouterModule,RouterLink,RouterLinkActive],
  // templateUrl: './app.component.html',
  template: `
  <main class="brand">
  
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.png" height="50px" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent{
 title='users';
}
