import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }
  user!: User;
  users: User[] = [
    {
      'username': 'arks2123',
      'email': 'edgars@gmail.com',
      'firstName': 'Edgars',
      'lastName': 'Edgars',
      'plateNumber': 'HH-2331',
      'id': 0,
      'password': '123'
    },
    {
      'username': 'arks2123',
      'email': 'edgars@gmail.com',
      'firstName': 'Edghars',
      'lastName': 'Arks',
      'plateNumber': 'HH-2331',
      'id': 1,
      'password': '123'
    },
    {
      'username': 'gang213',
      'email': 'ganggang@gmail.com',
      'firstName': 'Arnis',
      'lastName': 'Alps',
      'plateNumber': 'Se-2331',
      'id': 2,
      'password': '333'
    },
  ]
getUserById(id: number): User {
return this.users[id];
}
readonly id = this.route.snapshot.paramMap.get('id')
  ngOnInit(): void {
  this.user =  this.getUserById(Number(this.id))
  if (this.user === undefined) {
    this.router.navigate(['/404']);
  }
  }


}
