import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/category-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  // private baseURL = 'assets/mock/categoryList.json';
  private baseURL = 'http://192.168.1.148:8000/api/';

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.baseURL + 'categories');
  }

  createCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.baseURL + 'categories/', category);
  }
}
