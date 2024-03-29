import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users:any;
  constructor(private _http:HttpClient, private accountService:AccountService)
  {

  }
  ngOnInit() {
    // this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user:User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
  // getUsers(){
  //   this._http.get('https://localhost:5001/api/users').subscribe(response => {
  //     this.users = response
  //   }, err => {
  //     console.log(err);
  //   })
  // }
}
