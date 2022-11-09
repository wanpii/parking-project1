import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  password = '';
  username = '';

  constructor(private router: Router) { }
  ngOnInit(): void {  
  }
  onSubmit() {
    if(this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['/home'])
      console.log('working')
    }
  }
}
