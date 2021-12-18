import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-classes',
  templateUrl: './binding-classes.component.html',
  styleUrls: ['./binding-classes.component.scss']
})
export class BindingClassesComponent implements OnInit {

  public successClass = "text-success";

  public hasError = true;
  public isSpecial = true;
  public highlightedColor = 'orange';
  public multipleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial

  }

  constructor() { }

  ngOnInit(): void {
  }

}
