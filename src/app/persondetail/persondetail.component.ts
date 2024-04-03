import { Component,Input } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { Userinfo } from '../userinfo';
import { DetailComponent } from '../detail/detail.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule],
  template: `
  <section class="listing">
  <img class="listing-photo" src="/assets/avatar.jpg" height="10px" width="20px" alt=" photo of {{personDetail.name}}">
    <h2 class="listing-heading">{{ personDetail.name| uppercase}}</h2>
    <h3 class="listing-location">{{personDetail.email }}</h3>
    <a [routerLink]="['/detail', personDetail.id]">Learn More</a>
</section>
  `,
  styleUrl: './persondetail.component.css'
})
export class PersondetailComponent {
  // @Input() user!: Userinfo;
  @Input() personDetail!:Userinfo;
  
}

