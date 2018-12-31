import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { product } from '../../models/product';
import { productAVG } from '../../models/productAVG';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public allproduct: product[];
  public avgtest: number = 0;
  public  sum: number= 0;
  constructor(public http: HttpClient, public navCtrl: NavController) {
   
  }

  ionViewDidEnter() {
    this.http.get<product[]>("https://localhost:5001/api/Product").subscribe(
      it => {
        console.log('loadsuccess')
        this.allproduct = it;
        console.log(this.allproduct)
        this.calculate(this.allproduct);
      });
  }

  calculate(data:product[]){
    console.log('data')
    console.log(data)
  for (var i = 0; i < data.length; i++) {
    this.sum += data[i].total;
  }
  this.avgtest = this.sum / data.length;
  console.log(this.avgtest)
  }
}
