import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {JwtService} from "./jwt.service";
import {Registration} from "../models/registration.model";
import {Router} from "@angular/router";
import {Update} from "../models/update.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private router: Router,
              private apiService: ApiService,
              private jwtService: JwtService) { }

  getUser(id: any): Observable<User> {
    return this.apiService.get('/users/' + id);
  }

  getUsers(): Observable<User[]> {
    return this.apiService.get('/admin/panel/view');
  }

  login(username: string, password: string): void {
    this.apiService.post('/login', {username: username, password: password}).subscribe(data => {
      this.user = data.user;
      this.jwtService.saveToken(data.accessToken);
      this.router.navigate(['/workspace/' + this.user.id + '/todo']);
    });
  }

  deleteUser(id: any): Observable<any> {
    return this.apiService.delete('/admin/panel/view/' + id);
  }

  updateUser(id: any, update: Update): Observable<User> {
    return this.apiService.put('/admin/panel/edit/' + id, update);
  }

  register(registration: Registration): Observable<any> {
    return this.apiService.post('/register', registration);
  }
}
