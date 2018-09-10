import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  template:`
    <ul class='nav nav-pills'>
      <li><a [routerLink]="['/welcome']">Home</a></li>
      <li><a [routerLink]="['/products']">Product list</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A first component';
}
