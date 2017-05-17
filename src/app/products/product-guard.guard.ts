import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// ng g guard products/product-guard.service --spec false -m app.module --dry-run

@Injectable()
export class ProductGuardGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if(isNaN(id) || id < 1){
      alert('Invalid product Id');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }

}