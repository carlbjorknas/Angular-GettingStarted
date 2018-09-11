import { Component, OnInit } from '@angular/core';
import { RouterState, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')
    this.pageTitle += `: ${id}`
  }

}
