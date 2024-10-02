import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  baseAPIURL: string = environment.apiUrl;
  protected controllerName: string

  constructor(
    private _http: HttpClient,
    @Inject('CONTROLLER_NAME') controllerName: string
  ) {
    this.controllerName = controllerName;
  }

  setControllerName(controllerName: string) {
    this.controllerName = controllerName;
  }

  getList<T>(request: any): Observable<T> {
    return this._http.post<T>(`${this.baseAPIURL}/${this.controllerName}/GetList`, request)
  }

  getById<T>(id: number): Observable<T> {
    return this._http.get<T>(`${this.baseAPIURL}/${this.controllerName}/GetById?Id=${id}`)
  }


}
