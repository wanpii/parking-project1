import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  isPressed = false;
  isPressed1 = false;
  isPressed2 = false;
  isPressed3 = false;
  isPressed4 = false;
  isPressed5 = false;
  isPressed6 = false;
  isPressed7 = false;
  isPressed8 = false;
  isPressed9 = false;
  isPressed10 = false;
  isPressed11 = false;
  ngOnInit(): void {

  }
  alertPark() {
    if(confirm("Do you want to reserve this parking space?")) {  
      this.isPressed = true;
    }
    else {
      this.isPressed = false;
    }

  }
  alertPark1() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed1 = true;
    }
    else {
      this.isPressed1 = false;
    }

  }
  alertPark2() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed2 = true;
    }
    else {
      this.isPressed2 = false;
    }

  }
  alertPark3() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed3 = true;
    }
    else {
      this.isPressed3 = false;
    }

  }
  alertPark4() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed4 = true;
    }
    else {
      this.isPressed4 = false;
    }

  }
  alertPark5() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed5 = true;
    }
    else {
      this.isPressed5 = false;
    }

  }
  alertPark6() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed6 = true;
    }
    else {
      this.isPressed6 = false;
    }

  }
  alertPark7() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed7 = true;
    }
    else {
      this.isPressed7 = false;
    }

  }
  alertPark8() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed8 = true;
    }
    else {
      this.isPressed8 = false;
    }

  }
  alertPark9() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed9 = true;
    }
    else {
      this.isPressed9 = false;
    }

  }
  alertPark10() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed10 = true;
    }
    else {
      this.isPressed10 = false;
    }

  }
  alertPark11() {
    if(confirm("Do you want to reserve this parking space?")) {
      this.isPressed11 = true;
    }
    else {
      this.isPressed11 = false;
    }

  }
}
