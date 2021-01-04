import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins(): void;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    init_plugins();
  }

  login(): void{
    this.router.navigate(['/dashboard']);
  }
}
