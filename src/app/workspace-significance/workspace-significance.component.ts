import { Component, OnInit } from '@angular/core';
import {User} from "../core/models/user.model";
import {UserService} from "../core/services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-workspace-significance',
  templateUrl: './workspace-significance.component.html',
  styleUrls: ['./workspace-significance.component.css']
})
export class WorkspaceSignificanceComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.user = data;
    });
  }

}
