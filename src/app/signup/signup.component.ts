import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  student:any={};
 
  constructor( private router: Router) { }

  ngOnInit(): void {  
  }
  signUp(){

      console.log(this.student);
      this.student.userName='';
      this.student.pwd='';
      this.router.navigateByUrl('/login');
  }
}
