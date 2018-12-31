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

  public allproduct: any = [];

  constructor(public http: HttpClient, public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    this.http.get<productAVG>("https://localhost:5001/api/Product/GetAVG").subscribe(
      it => {
        console.log(it)
        this.allproduct = it;
      });
  }

}
