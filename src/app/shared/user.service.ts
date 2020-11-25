import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public loginForm(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:3333/login",user)

  }
}
