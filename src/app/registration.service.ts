import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  public loginForm(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:4200/login",user)

  }
}
