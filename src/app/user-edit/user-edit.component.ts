import { Component, OnInit } from '@angular/core';
import {User} from "../core/models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  updateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this.updateForm = this.fb.group({
      'username': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'age': ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.user = data;

      this.updateForm.setValue({
        'username' : data.username,
        'firstName' : data.firstName,
        'lasName' : data.lastName,
        'age' : data.age
      });
    });
  }
  //TODO: Kodel neskaito ID sitoj vietoj?

  onSubmit(): void {
    this.userService.updateUser(this.user.id, this.updateForm.value).subscribe(data => {
      this.router.navigate(['/admin/panel/view'])
    });
  }

}
