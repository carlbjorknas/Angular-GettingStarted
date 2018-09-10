import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, tap} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private productUrl = 'api/products/products.json'

  constructor(private http: HttpClient){}

  getProducts(): Observable<IProduct[]>{
      return this.http.get<IProduct[]>(this.productUrl)
        .pipe(
          tap(data=>console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse, data: Observable<IProduct[]>) {
    let errorMessage    

    if (error.error instanceof ErrorEvent){
      // Client error
      errorMessage = `An error occurred: ${error.error.message}`
    } else {
      // Backend error
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}