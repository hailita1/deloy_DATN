import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Bill} from '../../model/Bill';
import {House} from '../../model/house';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HouseDay} from '../../model/houseDay';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) {
  }

  getAllBill(): Observable<Bill[]> {
    return this.http.get<Bill[]>(API_URL + '/bills');
  }

  getAllBillStatusTrue(): Observable<Bill[]> {
    return this.http.get<Bill[]>(API_URL + '/bills/statusTrue');
  }

  createBill(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(API_URL + '/bills', bill);
  }

  getBill(id: number): Observable<Bill> {
    return this.http.get<Bill>(API_URL + `/bills/${id}`);
  }

  updateBill(id: number, bill: Bill): Observable<Bill> {
    return this.http.put<Bill>(API_URL + `/bills/${id}`, bill);
  }

  getAllBillByHouse(house: House): Observable<Bill[]> {
    return this.http.post<Bill[]>(API_URL + `/bills/listBill`, house);
  }

  confirmBill(id: number, bill: Bill): Observable<Bill> {
    return this.http.put<Bill>(API_URL + `/bills/confirm/${id}`, bill);
  }

  confirmBillByHost(bill: Bill): Observable<Bill> {
    return this.http.put<Bill>(API_URL + `/bills/confirm`, bill);
  }

  pay(bill: Bill): Observable<Bill> {
    return this.http.put<Bill>(API_URL + `/bills/pay`, bill);
  }

  cancelOrder(bill: Bill): Observable<Bill> {
    return this.http.put<Bill>(API_URL + `/bills/cancelOrder`, bill);
  }

  getAllBillByUserTrue(id: number): Observable<Bill[]> {
    return this.http.get<Bill[]>(API_URL + `/bills/usersTrue/${id}`);
  }

  getAllBillByFalse(id: number): Observable<Bill[]> {
    return this.http.get<Bill[]>(API_URL + `/bills/usersFalse/${id}`);
  }


  deleteBill(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(API_URL + `/bills/deleteBill`, bill);
  }

  deleteListBill(id: number[]): Observable<Bill> {
    return this.http.post<Bill>(API_URL + '/bills/deleteList', id);
  }

  // tslint:disable-next-line:ban-types
  getAllHouseDayByHouse(object: Object): Observable<HouseDay[]> {
    return this.http.post<HouseDay[]>(API_URL + `/housedays/listHouseDay`, object);
  }

  getAllHouseDayByHouseBill(object: Object): Observable<HouseDay[]> {
    return this.http.post<HouseDay[]>(API_URL + `/housedays/listHouseDayBill`, object);
  }
}
