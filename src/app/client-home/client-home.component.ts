import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})

export class ClientHomeComponent implements OnInit {
  appTitle = 'Metropolitan Legal Solutions';

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
}
