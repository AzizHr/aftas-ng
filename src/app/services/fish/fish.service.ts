import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fish } from 'src/app/models/fish/Fish';
import { FishResponse } from 'src/app/models/fish/FishResponse';

@Injectable({
  providedIn: 'root'
})

export class FishService {

  api: string = 'http://localhost:8080/api/fish';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  save(fish: Fish): Observable<FishResponse> {
    return this.http.post<FishResponse>(this.api, fish)
  }

  delete(name: string): Observable<string> {
    return this.http.delete<string>(`${this.api}/${name}`, { responseType: 'json' })
  }

  findByCode(name: string): Observable<FishResponse> {
    return this.http.get<FishResponse>(`${this.api}/${name}`);
  }

  update(fish: Fish): Observable<FishResponse> {
    return this.http.put<FishResponse>(`${this.api}`, fish);
  }
}
