import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(public http: HttpClient) { }

  addAction(body: any) {
    return this.http.post('http://localhost:1000/actions', body, {
      headers: { 'content-type': 'application/json' }
    })
  }

}
