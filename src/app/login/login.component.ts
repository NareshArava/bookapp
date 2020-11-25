import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.service.loginForm(this.user).subscribe(
      data=> console.log("Response recieved"),
      error=> console.log("Error Ocuured")
    )

  }

}
