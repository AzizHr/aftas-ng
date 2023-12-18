import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Ranking } from 'src/app/models/ranking/Ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  api: string = 'http://localhost:8080/api/rankings';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  save(ranking: Ranking): Observable<Ranking> {
    return this.http.post<Ranking>(this.api, ranking)
    .pipe(
      catchError((error: any) => {
        console.log(error.error.message);
        throw error;
      })
    );
  }

}
