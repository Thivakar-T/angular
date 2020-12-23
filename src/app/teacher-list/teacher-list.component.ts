import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherServiceService } from '../teacher-service.service';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teacherArr: any = [];
  id : any;

  constructor(private _teacherService : TeacherServiceService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._teacherService.getAllTeachers().subscribe(res => {
      this.teacherArr = res;
    }, err => {
      console.log(err);
    })
  }

  get(id) {
    this.id = id;
    this.deleteOneProfile();

  }

  deleteOneProfile() {
    this.id;
   
    this._teacherService.removeOneData(this.id).subscribe(res => {
    
      this.router.navigateByUrl('/empty', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['/teacher-list']), 0);

    })
  } 

}
