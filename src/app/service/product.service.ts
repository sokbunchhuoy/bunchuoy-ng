import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private baseUrl = environment.baseUrl;
    constructor(private http: HttpClient) { }

    getAllProduct() {
        return this.http.get(`${this.baseUrl}/products`);
    }

    saveData(data: any) {
        return this.http.post(`${this.baseUrl}/products`, data);
    }

    delete(id) {
        return this.http.delete(`${this.baseUrl}/products/${id}`);
    }

    getProductById(id: number) {
        return this.http.get(`${this.baseUrl}/products/${id}`);
    }

    updateProduct(id: number, data: any) {
        return this.http.put(`${this.baseUrl}/products/${id}`, data);
    }

}
