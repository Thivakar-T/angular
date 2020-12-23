import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
  private _baseUrl = 'http://101.53.155.156/api/currency/';
  
  private _addData = this._baseUrl + 'create';
 
  private _getAllData = this._baseUrl + 'get';
  private _getSingleData = this._baseUrl + 'get';
  private _editSingleData = this._baseUrl + 'update';

  constructor(private http : HttpClient) { }

  addCurrency(data){
  return this.http.post<any>(this._addData,data);
  }

  getAllData(){
    return this.http.get<any>(this._getAllData);
  }
  
  getOneData(id){
    return this.http.get<any>(this._getSingleData + '/' + id );
  }   
  editOneData(data){
    return this.http.put<any>(this._editSingleData , data);
  }

}
