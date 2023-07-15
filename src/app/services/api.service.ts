import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url : string = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) { }

  getAllContracts() {
    return this.http.get(this.url+"contracts")
  }

  getContractsByCoupon(coupon: string) {
    return this.http.get(this.url+"contracts-coupon?cupon="+coupon)
  }

  getContractsByStatus(status: string) {
    return this.http.get(this.url+"contracts-status?estado="+status)
  }

  getContractsByOrigin(origin: string) {
    return this.http.get(this.url+"contracts-origin?origen="+origin)
  }

  getCouponsList() {
    return this.http.get(this.url+"coupons")
  }

  getStatusList() {
    return this.http.get(this.url+"status")
  }

  getOriginList() {
    return this.http.get(this.url+"origin")
  }




}
