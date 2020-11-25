import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User;

  constructor() { }

  ngOnInit(): void {
  }
  resetForm(form:NgForm){
    form.reset();
    this.user={
      Username:'',
      Password:'',
      Email:'',
      Firstname:'',
      Lastname:''
    }
  }
  onSubmit(){
    console.log(this.user)
  }

}

