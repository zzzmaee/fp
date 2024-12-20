import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {UsersApiService} from "../../services/users-api.service";
import {User} from "../../models/User";
import {UserCardComponent} from "../user-card/user-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    RouterLink,
    UserCardComponent,
    NgForOf
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  private readonly usersService = inject(UsersService);
  private readonly usersApiService = inject(UsersApiService);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersApiService.getUsers()
      .subscribe(
        (users: User[]) => {
          this.users = users;
        },
        (error) => {
          console.error('Houston, we have a problem', error);
        }
      );
  }
}
