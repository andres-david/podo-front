import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public contracts: any;
  public coupons: any;
  public selectedCoupon: any;
  public status: any;
  public selectedStatus: any;
  public origin: any;
  public selectedOrigin: any;

  public optionSort: {property: string | null, order: string} = {property: null, order: 'asc'};

  constructor(
    private apiService: ApiService
  ){}

  ngOnInit(): void {

    this.getAllContracts();

    this.apiService.getStatusList()
      .subscribe((res: any[]) => {
        this.status = res;
      })

    this.apiService.getCouponsList()
      .subscribe((res: any[]) => {
        console.log(res);
        this.coupons = res;
      })

    this.apiService.getOriginList()
      .subscribe((res: any[]) => {
        this.origin = res;
      })
  }

  getContractsCoupon(){
    let {cupon} = this.selectedCoupon;

    this.apiService.getContractsByCoupon(cupon)
      .subscribe((res: any) => {
        this.contracts = res;

        this.selectedOrigin = '';
        this.selectedStatus = '';
      });
  }

  getAllContracts() {
    this.apiService.getAllContracts()
      .subscribe((res: any) => {
        this.contracts = res;

        this.selectedCoupon = '';
        this.selectedOrigin = '';
        this.selectedStatus = '';
      })
  }

  getContractsStatus(){
    let {estado} = this.selectedStatus;

    this.apiService.getContractsByStatus(estado)
      .subscribe((res: any) => {
        this.contracts = res;

        this.selectedCoupon = '';
        this.selectedOrigin = '';
      });
  }

  getContractsOrigin(){
    let {origen} = this.selectedOrigin;

    this.apiService.getContractsByOrigin(origen)
      .subscribe((res: any) => {
        this.contracts = res;

        this.selectedCoupon = '';
        this.selectedStatus = '';
      })

  }

  changeSort(property: string) {
    const {order} = this.optionSort;
    this.optionSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

}
