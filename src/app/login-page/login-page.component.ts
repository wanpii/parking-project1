import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
username: ['', Validators.required],
password: ['', Validators.required]
});
}

ngOnInit() {
}
postdata(angForm1: FormGroup)
{
this.dataService.userlogin(angForm1.value.username,angForm1.value.password)
.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home';
this.router.navigate([redirect]);
},
error => {
alert("User name or password is incorrect")
});
}
get email() { return this.angForm.get('username'); }
get password() { return this.angForm.get('password'); }
}

