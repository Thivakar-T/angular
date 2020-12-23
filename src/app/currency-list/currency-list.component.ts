import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CurrencyServiceService } from '../currency-service.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
 
  currencyArr: any = [];
  id : any;

  constructor(private _currencySrevice : CurrencyServiceService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._currencySrevice.getAllData().subscribe(res => {
      this.currencyArr = res.data;
    }, err => {
      console.log(err);
    })
  }

  get(id) {
    this.id = id;
  }

}
