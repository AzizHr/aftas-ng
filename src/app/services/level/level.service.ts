import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from 'src/app/models/level/Level';

@Injectable({
  providedIn: 'root'
})

export class LevelService {

  api: string = 'http://localhost:8080/api/levels';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  save(level: Level): Observable<Level> {
    return this.http.post<Level>(this.api, level)
  }

  delete(code: number): Observable<string> {
    return this.http.delete<string>(`${this.api}/${code}`, { responseType: 'json' })
  }

  findByCode(code: number): Observable<Level> {
    return this.http.get<Level>(`${this.api}/${code}`);
  }

  update(level: Level): Observable<Level> {
    return this.http.put<Level>(`${this.api}`, level);
  }
}
