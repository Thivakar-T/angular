import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentArr: any = [];
  id : any;

  constructor(private _schoolService : SchoolService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._schoolService.getAllStudents().subscribe(res => {
      this.studentArr = res;
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
   
    this._schoolService.removeOneData(this.id).subscribe(res => {
    
      this.router.navigateByUrl('/empty', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['/student-list']), 0);

    })
  } 

}


