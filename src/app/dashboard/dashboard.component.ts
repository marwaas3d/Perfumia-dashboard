import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  results: any[] = [];

  productName: string = '';
  productDesc: string = '';
  productPrice: number = 0;
  coverImg: string = '';
  imagesInput: string = '';
  productimages: string[] = [];

  editingProductId: any = null; 

  constructor(private _ProductsDataService: ProductsDataService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this._ProductsDataService.getProducts().subscribe(data => {
      this.results = data;
    });
  }

loadProductToForm(product: any) {
  this.editingProductId = product.id;
  this.productName = product.name;
  this.productDesc = product.description;
  this.productPrice = product.price;
  this.coverImg = product.coverImg;
  this.imagesInput = product.images.join(', ');

  const formElement = document.getElementById('form');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' });
  }
}
addProduct() {
  this.productimages = this.imagesInput.split(",").map(img => img.trim()).filter(img => img.length > 0);

  const productData = {
    name: this.productName,
    description: this.productDesc,
    price: this.productPrice,
    coverImg: this.coverImg,
    images: [...this.productimages]
  };

  if (this.editingProductId) {
    this._ProductsDataService.updateProduct(this.editingProductId, productData).subscribe({
      next: (response: any) => {
        // response عبارة عن مصفوفة تحتوي المنتج المحدث (Supabase يرجع مصفوفة)
        if (response && response.length > 0) {
          // تحديث العنصر في this.results مباشرة
          const index = this.results.findIndex(p => p.id === this.editingProductId);
          if (index !== -1) {
            this.results[index] = response[0];
          }
        }
        this.clearForm();
      },
      error: (err) => {
        console.error('Error updating product:', err);
      }
    });
  } else {
    this._ProductsDataService.addProduct(productData).subscribe({
      next: (response) => {
        this.loadProducts();
        this.clearForm();
      },
      error: (err) => {
        console.error('Error adding product:', err);
      }
    });
  }
}


  clearForm() {
    this.editingProductId = null;
    this.productName = '';
    this.productDesc = '';
    this.productPrice = 0;
    this.coverImg = '';
    this.imagesInput = '';
  }

  deleteProduct(id: any) {
    this._ProductsDataService.deleteProducts(id).subscribe({
      next: () => {
        this.results = this.results.filter(product => product.id !== id);
      },
      error: (err) => {
        console.error('Error deleting product', err);
      }
    });
  }
}
