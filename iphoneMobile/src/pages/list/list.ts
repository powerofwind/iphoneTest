import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { product } from '../../models/product';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public products: product[];

  constructor(public http: HttpClient, public navCtrl: NavController) {
    
  }

  ionViewWillEnter(){
    this.http.get<product[]>("https://localhost:5001/api/Product").subscribe(
      it => {
        console.log(it)
        this.products = it;
      });
  }

}
