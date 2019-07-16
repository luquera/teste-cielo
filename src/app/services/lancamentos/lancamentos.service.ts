import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseLancamentos } from 'src/app/interfaces/base-lancamentos.interface';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  constructor(
    private http: HttpClient
  ) { }

  getLancamentos(): Observable<Object> {
    return this.http.get(environment.apiUrl);
  }
}
