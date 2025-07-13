import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private _HttpClient : HttpClient) {}

      getProducts() :Observable<any>{
         return this._HttpClient.get(`https://exqokdmjrvkaivkgnwiq.supabase.co/rest/v1/products`,{
              
              headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cW9rZG1qcnZrYWl2a2dud2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTE0NjUsImV4cCI6MjA2NjY2NzQ2NX0.__T63UYDhdLfUB-lheGneeIwg0JleauCfLAtU4QJ6gU',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cW9rZG1qcnZrYWl2a2dud2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTE0NjUsImV4cCI6MjA2NjY2NzQ2NX0.__T63UYDhdLfUB-lheGneeIwg0JleauCfLAtU4QJ6gU',
                'Content-Type': 'application/json'
              }
         })
      }



      addProduct(product: any): Observable<any> {
      return this._HttpClient.post('https://exqokdmjrvkaivkgnwiq.supabase.co/rest/v1/products', product , {
              
              headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cW9rZG1qcnZrYWl2a2dud2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTE0NjUsImV4cCI6MjA2NjY2NzQ2NX0.__T63UYDhdLfUB-lheGneeIwg0JleauCfLAtU4QJ6gU',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cW9rZG1qcnZrYWl2a2dud2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTE0NjUsImV4cCI6MjA2NjY2NzQ2NX0.__T63UYDhdLfUB-lheGneeIwg0JleauCfLAtU4QJ6gU',
                'Content-Type': 'application/json'
              }
         });
    }

    deleteProducts(id:any):Observable<any>{
      return this._HttpClient.delete( `https://exqokdmjrvkaivkgnwiq.supabase.co/rest/v1/products?id=eq.${id}`,
        {          
              headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cW9rZG1qcnZrYWl2a2dud2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTE0NjUsImV4cCI6MjA2NjY2NzQ2NX0.__T63UYDhdLfUB-lheGneeIwg0JleauCfLAtU4QJ6gU',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cW9rZG1qcnZrYWl2a2dud2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTE0NjUsImV4cCI6MjA2NjY2NzQ2NX0.__T63UYDhdLfUB-lheGneeIwg0JleauCfLAtU4QJ6gU',
                'Content-Type': 'application/json'
              }
        }        
      )
    }

      updateProduct(id: any, product: any): Observable<any> {
        return this._HttpClient.patch(
          `https://exqokdmjrvkaivkgnwiq.supabase.co/rest/v1/products?id=eq.${id}`,
          product,
          {
            headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cW9rZG1qcnZrYWl2a2dud2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTE0NjUsImV4cCI6MjA2NjY2NzQ2NX0.__T63UYDhdLfUB-lheGneeIwg0JleauCfLAtU4QJ6gU',
                            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cW9rZG1qcnZrYWl2a2dud2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwOTE0NjUsImV4cCI6MjA2NjY2NzQ2NX0.__T63UYDhdLfUB-lheGneeIwg0JleauCfLAtU4QJ6gU',
              'Content-Type': 'application/json',
              'Prefer': 'return=representation'
            }

          }
        );
      }





}
