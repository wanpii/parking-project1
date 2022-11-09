import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }
  users: User[] = []
  ngOnInit(): void {
    // workign on getting users from db
    this.http.get<{ [key: string]: User}>('https://parking-project-89c39-default-rtdb.europe-west1.firebasedatabase.app/users.json').
    pipe(
      map(responseData => {
        const usersArray: User[] = [];
        for(const key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            usersArray.push({ ...responseData[key], id: key})
          }
        }
        return usersArray;
      })).subscribe(users => {
        console.log(users)
      })
  }
  onCreateUser(data: User) {
    this.http.post('https://parking-project-89c39-default-rtdb.europe-west1.firebasedatabase.app/users.json',data).subscribe()
    // this.router.navigate(['/login'])
  }
}
