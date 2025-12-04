import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  appName = 'New Angular App';
}
