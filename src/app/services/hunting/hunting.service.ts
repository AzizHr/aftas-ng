import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hunting } from 'src/app/models/hunting/Hunting';
import { HuntingResponse } from 'src/app/models/hunting/HuntingResponse';

@Injectable({
  providedIn: 'root'
})

export class HuntingService {

  api: string = 'http://localhost:8080/api/huntings';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  save(hunting: Hunting): Observable<HuntingResponse> {
    return this.http.post<HuntingResponse>(this.api, hunting)
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.api}/${id}`, { responseType: 'json' })
  }

  findByCode(id: number): Observable<HuntingResponse> {
    return this.http.get<HuntingResponse>(`${this.api}/${id}`);
  }

  update(hunting: Hunting): Observable<HuntingResponse> {
    return this.http.put<HuntingResponse>(`${this.api}`, hunting);
  }
}
