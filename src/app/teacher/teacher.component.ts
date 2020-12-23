import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
 
  teachers: any = {};
  id: any;

  constructor(private _teacherService: TeacherServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];;
    if (this.id) {
      this.getOneProfile();
    }
  }

submit() {
  if(this.id){
    this._teacherService.editOneData(this.id, this.teachers).subscribe(res => {

      this.router.navigateByUrl('/teacher-list');
    })
  }else{
  this._teacherService.addTeacher(this.teachers).subscribe(res => {

  this.router.navigateByUrl('/teacher-list');
 
   }, err => {
    console.log(err);
  } )
  }

}

getOneProfile() {
  this.id;
  this._teacherService.getOneData(this.id).subscribe(res => {
  this.teachers = res;
})
}
}
