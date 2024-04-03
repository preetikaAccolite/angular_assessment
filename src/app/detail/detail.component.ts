import { Component,inject,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { Userinfo } from '../userinfo';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  // @Input() personDetail!:Userinfo;
  route: ActivatedRoute = inject(ActivatedRoute);
  personService=inject(PersonService);
  userInfo:Userinfo| undefined;
  constructor() {
      const persondetailId=Number(this.route.snapshot.params['id']);
      this.personService.getUserById(persondetailId).subscribe((user:any)=>{
        this.userInfo=user
      })
  }
}
