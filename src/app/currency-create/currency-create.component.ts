import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CurrencyServiceService } from '../currency-service.service';

@Component({
  selector: 'app-currency-create',
  templateUrl: './currency-create.component.html',
  styleUrls: ['./currency-create.component.css']
})
export class CurrencyCreateComponent implements OnInit {

  currency:any = {};
  id: any;

  constructor(private _currencySrevice : CurrencyServiceService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.getOneProfile();
    }
  }

  submit() {
    if (this.id){
      this._currencySrevice.editOneData(this.currency).subscribe(res => {
        this.router.navigateByUrl('/currencyList');
      })
    }else{
      this._currencySrevice.addCurrency(this.currency).subscribe(res => {
      this.router.navigateByUrl('/currencyList');    
       }, err => {
        console.log(err);
      } )
    }
    
  }

  getOneProfile() {
    this.id;
    this._currencySrevice.getOneData(this.id).subscribe(res => {
    this.currency = res.data;
  })
  }
}
