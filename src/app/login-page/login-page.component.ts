
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
username= '';
password= '';
loggedIn = true;
  constructor(private router: Router) {}
ngOnInit() {
}
 onSubmit() {
  if(this.username === 'admin' && this.password === 'admin') {
  this.router.navigate(['/home'])
  this.loggedIn= true;
 }
  else {
  this.loggedIn= false; 
  }
}
}

