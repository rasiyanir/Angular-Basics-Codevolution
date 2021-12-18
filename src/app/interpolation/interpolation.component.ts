import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  title = 'angular-io-Riyaz';

  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }


  greetUser(){
    return "Hello " + this.title;
  }

}
