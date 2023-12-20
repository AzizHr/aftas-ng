import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionResponse } from 'src/app/models/competition/CompetitionResponse';
import { MemberResponse } from 'src/app/models/member/MemberResponse';
import { Ranking } from 'src/app/models/ranking/Ranking';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { MemberService } from 'src/app/services/member/member.service';
import { RankingService } from 'src/app/services/ranking/ranking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
})
export class NewMemberComponent implements OnInit {
  competitions: CompetitionResponse[];
  members: MemberResponse[];

  ranking: Ranking = {
    memberNum: 0,
    competitionCode: '',
    rank: 0,
    score: 0,
  };

  ngOnInit(): void {
    this.getCompetitions();
    this.getMembers()
  }

  constructor(
    private competitionService: CompetitionService,
    private memberServive: MemberService,
    private rankingService: RankingService,
    private router: Router
  ) {
    this.competitions = [];
    this.members = [];
  }

  getCompetitions(): void {
    this.competitionService.findAll().subscribe((data) => {
      this.competitions = data.competitions;
      console.log(data.competitions);
    });
  }

  getMembers(): void {
    this.memberServive.findAll().subscribe((data) => {
      this.members = data.members;
      console.log(data.members);
    });
  }

  newMember() {
    this.rankingService.save(this.ranking).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Member added with success`,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => this.navigateToCompetitions(), 2000);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.error.message}`,
        });
      }
    );
  }

  navigateToCompetitions() {
    this.router.navigate(['/competitions']);
  }
}
