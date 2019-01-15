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

  //public allproduct: product[];
  // public productAVG: string;
  // public sumTotal: number = 0;
  // public sumAmount: number = 0;

  public allproduct2: productAVG = new productAVG();

  constructor(public http: HttpClient, public navCtrl: NavController) {
    this.http.get<productAVG>("https://localhost:5001/api/Product/GetAVG").subscribe(
      it => {
        this.allproduct2 = it;
        console.log("Respone: " + JSON.stringify(it))
      });
  }

  // ionViewDidEnter() {
  //   this.http.get<product[]>("https://localhost:5001/api/Product").subscribe(
  //     it => {
  //       this.allproduct = it;
  //       this.calculate(this.allproduct);
  //     });
  // }

  // calculate(data: product[]) {
  //   for (var i = 0; i < data.length; i++) {
  //     this.sumTotal += data[i].total;
  //     this.sumAmount += data[i].amount;
  //   }
  //   this.productAVG = (this.sumTotal / this.sumAmount).toFixed(2) ;
  // }

}
