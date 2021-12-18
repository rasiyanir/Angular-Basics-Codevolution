import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  public greeting = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any){
    console.log(event)
    this.greeting = 'Welcome Riyaz Rasiyani!'
  }
 }
