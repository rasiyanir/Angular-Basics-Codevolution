import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.scss']
})
export class TemplateReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(value: any){
    console.log(value);
  }
}
