import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Competition } from 'src/app/models/competition/Competition';
import { CompetitionResponse } from 'src/app/models/competition/CompetitionResponse';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  api: string = 'http://localhost:8080/api/competitions';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<any>(this.api);
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

  findByCode(code: string): Observable<CompetitionResponse> {
    return this.http.get<CompetitionResponse>(`${this.api}/${code}`);
  }

  update(competition: Competition): Observable<CompetitionResponse> {
    return this.http.put<CompetitionResponse>(`${this.api}`, competition);
  }
}