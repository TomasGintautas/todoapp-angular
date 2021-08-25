import { Component, OnInit } from '@angular/core';
import {Todo} from "../core/models/todo.model";
import {ToDoService} from "../core/services/todo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../core/models/user.model";
import {UserService} from "../core/services/user.service";

declare const generateNote: any;

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  todos: Todo[] = [];

  todo: Todo;

  todoForm: FormGroup;

  user: User;

  constructor(private toDoService: ToDoService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private userService: UserService) {


    this.todoForm = this.fb.group({
        'significance': ['', Validators.required],
        'toDoText': ['', Validators.required],
        'deadline': ['', Validators.required]
      });
  }

  ngOnInit(): void {
    this.toDoService.getUserToDo(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.todos = data;
    });
    this.userService.getUser(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.user = data;
    });
  }

  onDelete(ownerId: number,toDoId: number): void {
    this.toDoService.deleteToDo(ownerId, toDoId).subscribe(data => {
      this.router.navigate(['/workspace/' + ownerId + '/todo'])
    });
  }

  onDeleteOld(): void {
    this.toDoService.deleteOldToDo(this.todo.ownerId).subscribe(data => {
      this.router.navigate(['/workspace/' + this.todo.ownerId + '/todo'])
    });
  }

  onSubmitUpdate(): void {
    this.toDoService.updateToDo(this.todo.ownerId, this.todo.id, this.todoForm.value).subscribe(data => {
      this.router.navigate(['/workspace/' + this.todo.ownerId + '/todo'])
    });
  }

  onSubmitSave(): void {
    this.toDoService.createToDo(this.todo.ownerId, this.todoForm.value).subscribe(data => {
      this.router.navigate(['/workspace/' + this.todo.ownerId + '/todo'])
    });
  }

  onGenerate() {
    generateNote();
  }

}
