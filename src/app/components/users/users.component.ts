import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array< User >;

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.httpClient.get("http://localhost:3000/users")
    .subscribe(
      (response: any) => {
        console.log(response);
        this.users = response;
      }
    );
  }
}