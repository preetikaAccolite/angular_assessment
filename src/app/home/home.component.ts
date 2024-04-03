import { Component, Input,OnDestroy,OnInit,inject } from '@angular/core';
import { PersondetailComponent } from '../persondetail/persondetail.component';
import { CommonModule } from '@angular/common';
import { Userinfo } from '../userinfo';
import { PersonService } from '../person.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,PersondetailComponent,HttpClientModule],
  styleUrl: './home.component.css',
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by username">
      <button class="primary" type="button">Search</button>
    </form>
    
  </section>

  <section class="results">
    <app-person-detail *ngFor="let user of users" [personDetail]="user"></app-person-detail>
  
  </section>  

  `,
})
export class HomeComponent implements OnInit,OnDestroy {
  intervalsubscription:Subscription
  personsubscription:Subscription
 httpClient=inject(HttpClient);
 users:any[]=[];
 personService: PersonService=inject(PersonService);
 ngOnInit(): void {
     this.personsubscription=this.personService.getAllUsers().subscribe((users:any)=>{
      console.log(users);
      this.users=users;
     }
     )
     this.intervalsubscription=interval(1000).subscribe(count=>{console.log(count)})
 }

 ngOnDestroy() {
  this.intervalsubscription.unsubscribe();
  this.personsubscription.unsubscribe();
}
}
