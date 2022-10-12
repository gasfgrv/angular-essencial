import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.showMessage('Teste')
  } 

  cancel(): void {
    this.router.navigate(['/products'])
  } 

}
