import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any = {};
  id: any;

  constructor(private _schoolService: SchoolService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      // this.getOneProfile();
    }
  }


submit() {
  if (this.id) {
    this._schoolService.editOneData(this.id, this.students).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/student-list');
    })
  }
else{
  console.log(this.students);
  this._schoolService.addStudent(this.students).subscribe(res => {
  console.log(res);
  this.router.navigateByUrl('/student-list');
 
   }, err => {
    console.log(err);
  } )

}
}
getOneProfile() {
  this.id;
  this._schoolService.getOneData(this.id).subscribe(res => {
  console.log(res);
  this.students = res;
})
}

}
