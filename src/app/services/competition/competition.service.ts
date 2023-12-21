import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Competition } from 'src/app/models/competition/Competition';
import { CompetitionResponse } from 'src/app/models/competition/CompetitionResponse';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  api: string = 'http://localhost:8080/api/competitions';

  constructor(private http: HttpClient) {}

  public findAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  getCompetitions(page: number, size: number): Observable<any> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<any>(this.api, { params });
  }

  save(competition: Competition): Observable<CompetitionResponse> {
    return this.http.post<CompetitionResponse>(this.api, competition)
    .pipe(
      catchError((error: any) => {
        console.log(error.error.message);
        throw error;
      })
    );
  }

  delete(code: string): Observable<string> {
    return this.http.delete<string>(`${this.api}/${code}`, { responseType: 'json' })
  }

  findByCode(code: string): Observable<any> {
    return this.http.get<any>(`${this.api}/${code}`);
  }

  update(competition: Competition): Observable<CompetitionResponse> {
    return this.http.put<CompetitionResponse>(`${this.api}`, competition);
  }

  podium(competitionCode: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/leaderboard/top-three/${competitionCode}`);
  }
}