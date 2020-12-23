import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private _baseUrl = 'https://5f99234950d84900163b8271.mockapi.io/api/student/';
  
 
  private _students = this._baseUrl ;
  
  
  constructor(private http : HttpClient) { }
  
  addStudent(data){
    console.log('1');
  return this.http.post<any>(this._students,data);
  }

  getAllStudents(){
    return this.http.get<any>(this._students);
    }
    getOneData(id){
      return this.http.get<any>(this._students + '/' + id );
    }   
    editOneData(id,data){
      return this.http.put<any>(this._students + '/' + id,data);
    }

    removeOneData(id){
      return this.http.delete<any>(this._students + '/' + id);
    }

}
