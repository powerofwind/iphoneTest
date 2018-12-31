import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public Amount: number;
  public Price: number;

  constructor(public http: HttpClient, public navCtrl: NavController) {

  }

  Order() {
    this.http.post("https://localhost:5001/api/Product",
      {
        Amount: this.Amount,
        Price: this.Price,
      }).subscribe(
        it => {
          console.log('success')
        });
  }

}
