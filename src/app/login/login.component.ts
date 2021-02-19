import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'admin'
  password = 'changeit'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username + " clicked the button!")
    if (this.username==="admin" && this.password==='changeit') {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
      console.log("You have successfully logged in as" + this.username)
    } else {
      this.invalidLogin = true
    }
  }
}
