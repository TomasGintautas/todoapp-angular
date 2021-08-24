import { Component, OnInit } from '@angular/core';
import {User} from "../core/models/user.model";
import {UserService} from "../core/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  users: User[];

  user: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onDelete(id: number): void {
    this.userService.deleteUser(id).subscribe(data => {
      this.router.navigate(['/admin/panel/view'])
    });
  }
}
// location reload
