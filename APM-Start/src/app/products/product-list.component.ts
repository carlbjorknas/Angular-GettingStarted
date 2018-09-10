import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Page title??'
    imageWidth: number = 50
    imageMargin: number = 2
    showImage: boolean = false
    errorMessage: any

    constructor(private productService: ProductService) { }
    
    _listFilter: string
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    filteredProducts: IProduct[]
    products: IProduct[]
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit() {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products
                this.filteredProducts = this.products 
            },
            error => this.errorMessage = <any>error
        )
          
    }

    performFilter(listFilter: string): IProduct[] {
        return this.products.filter(product => 
            product.productName.toLocaleLowerCase().indexOf(listFilter) >= 0)
    }

    onRatingClicked(rating: string){
        this.pageTitle = rating;
    }
}
