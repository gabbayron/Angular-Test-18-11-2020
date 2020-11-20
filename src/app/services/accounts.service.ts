import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(public http: HttpClient) { }
  account: any = []

  getAccountActions(id: string) {
    return this.http.get('http://localhost:1000/actions/' + id)
  }


}
