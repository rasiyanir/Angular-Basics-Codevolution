import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public name = 'Riyaz';

  public person = {
    "firstName" : "Riyaz",
    "lastName" : "Rasiyani"
  }

  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
