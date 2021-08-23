import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../core/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.registerForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'age': ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.registerForm.value).subscribe(data => {
      this.router.navigate(['/']);
    });
  }
}
