import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member/Member';
import { MemberResponse } from 'src/app/models/member/MemberResponse';

@Injectable({
  providedIn: 'root'
})

export class MemberService {

  api: string = 'http://localhost:8080/api/members';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  save(member: Member): Observable<MemberResponse> {
    return this.http.post<MemberResponse>(this.api, member)
  }

  delete(num: number): Observable<string> {
    return this.http.delete<string>(`${this.api}/${num}`, { responseType: 'json' })
  }

  findByNum(num: number): Observable<MemberResponse> {
    return this.http.get<MemberResponse>(`${this.api}/${num}`);
  }

  update(member: Member): Observable<MemberResponse> {
    return this.http.put<MemberResponse>(`${this.api}`, member);
  }
}
