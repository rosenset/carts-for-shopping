import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Item } from './items';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  endPoint: string = 'http://localhost:9999/cart-items'
  http: any;

  constructor() { }

    getAllItems(): Observable<any>{
      return this.http.get(this.endPoint);
    }
  
    deleteItem(id: number): Observable<any>{
      return this.http.delete(`${this.endPoint}/${id}`);
    }
  
    addItem(item: Item): Observable<any> {
      return this.http.post(this.endPoint, item);
    }

  }

