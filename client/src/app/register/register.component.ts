import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any = {};
  @Input() usersFromHomeComponent;
  constructor() { }

  ngOnInit(): void {
    }

  register(model:any)
  {
    console.log(model);
  }
  cancel()
  {
    console.log('Cancelled');
  }
}
