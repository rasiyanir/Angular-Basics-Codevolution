import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  public selectedId: any;

  public departments = [
    { "id": 1, "name": "Angular"},
    { "id": 2, "name": "Node"},
    { "id": 3, "name": "MongoDB"},
    { "id": 4, "name": "Ruby"},
    { "id": 5, "name": "Bootstrap"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id");
      this.selectedId = id;
    })
  }

  onSelect(department: any){
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department: any){
    return department.id === Number(this.selectedId);
  }

}
