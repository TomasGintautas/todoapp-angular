import { Component, OnInit } from '@angular/core';
import {User} from "../core/models/user.model";
import {UserService} from "../core/services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-workspace-today',
  templateUrl: './workspace-today.component.html',
  styleUrls: ['./workspace-today.component.css']
})
export class WorkspaceTodayComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.user = data;
    });
  }
}
