import { Component } from '@angular/core';
import { CurrencyapiService } from './currencyapi.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency_converter';
  currjson: any =[];

  base='USD'
  cont2='USD'
  result: string='1'

  changebase(a:string){
    this.base=a
  }

  tocountry(b:string)
  {
    this.cont2=b
  }

  constructor(private currency: CurrencyapiService){

  }

  convert(){
    // console.log(this.base)
    // console.log(this.cont2)
    this.currency.getcurrencydata(this.base).subscribe(data =>{
      // console.log(data)
      this.currjson = JSON.stringify(data)
      this.currjson= JSON.parse(this.currjson)
      console.log(this.currjson)

      this.result= this.currjson.rates[this.cont2]
    })

  }
}
