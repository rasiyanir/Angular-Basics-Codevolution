import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-io-Riyaz';

  public name = "Riyaz Input"

  public message = '';

  public siteUrl = window.location.href;

  greetUser(){
    return "Hello " + this.title;
  }
}
