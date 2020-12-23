import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {
  private _baseUrl = 'https://5f99234950d84900163b8271.mockapi.io/api/teachers/';
  
 
  private _teachers = this._baseUrl ;

  
  constructor(private http : HttpClient) { }
  
  addTeacher(data){
  return this.http.post<any>(this._teachers,data);
  }

  getAllTeachers(){
    return this.http.get<any>(this._teachers);
    }
    
 getOneData(id){
      return this.http.get<any>(this._teachers + '/' + id );
    }   
  editOneData(id,data){
      return this.http.put<any>(this._teachers + '/' + id,data);
    }
    removeOneData(id){
      return this.http.delete<any>(this._teachers + '/' + id);
    }
  
}
