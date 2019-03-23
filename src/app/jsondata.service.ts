import { Injectable } from '@angular/core';
import { myProducts } from '../productsdata'

@Injectable({
  providedIn: 'root'
})
export class JsondataService {
  constructor() { }

  getproducts(): any {
    return (myProducts);
  }
  
}
