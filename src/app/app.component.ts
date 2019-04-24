import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Metropolitan Legal Solutions';

  constructor(private authService: AuthService, public router: Router, private titleService: Title ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        console.log(authService.protected);
      }
    });
    this.titleService.setTitle('Metropolitan Legal Solutions');
  }
}
