import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IProduct } from './product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


// ng g s products/product.service --spec false -m app.module --dry-run 

@Injectable()
export class ProductService {

  private _productUrl = 'api/products.json';

  constructor(private http: Http) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get(this._productUrl)
                    .map((response: Response) => <IProduct[]>response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
