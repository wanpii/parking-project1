import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { User } from '../models/user';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
  this.angForm = this.fb.group({
  email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
  username: ['', Validators.required],
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  plateNumber: ['', Validators.required],
  password: ['', Validators.required]
  });
  }
  
  ngOnInit() {
  }
  
  postdata(angForm1: FormGroup)
  {
  this.dataService.userregistration(angForm1.value.email,angForm1.value.username,angForm1.value.firstName,angForm1.value.lastName,angForm1.value.plateNumber,angForm1.value.password)
  .pipe(first())
  .subscribe(
  data => {
  this.router.navigate(['login']);
  },
  
  error => {
  });
  }
  
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get username() { return this.angForm.get('username'); }
}
