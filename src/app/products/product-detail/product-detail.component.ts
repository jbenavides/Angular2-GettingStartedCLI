import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from 'app/products/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
              private router: Router,
              private _productService: ProductService) { }

  ngOnInit() {
     this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

}
