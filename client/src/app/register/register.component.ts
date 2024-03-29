import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any = {};
  @Input() usersFromHomeComponent;
  @Output() cancelRegister = new EventEmitter();
  constructor(private accountService:AccountService, private toastr:ToastrService) { }

  ngOnInit(): void {
    }

  register(model:any)
  {
    if(model)
    this.accountService.register(model).subscribe(response => {
      console.log(response);
      this.cancel();
    },err => {
      console.log(err);
      this.toastr.error(err.error);
    })
  }
  cancel()
  {
    this.cancelRegister.emit(false);
  }
}
