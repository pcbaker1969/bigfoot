import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username + " clicked the button!")
    if (this.hardcodedAuthenticationService.authenticate(
      this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
      console.log("You have successfully logged in as" + this.username)
    } else {
      this.invalidLogin = true
    }
  }
}
