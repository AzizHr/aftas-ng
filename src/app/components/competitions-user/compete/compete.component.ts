import { Component } from '@angular/core';
import { CompetitionResponse } from 'src/app/models/competition/CompetitionResponse';
import { MemberResponse } from 'src/app/models/member/MemberResponse';
import { Ranking } from 'src/app/models/ranking/Ranking';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { MemberService } from 'src/app/services/member/member.service';
import { RankingService } from 'src/app/services/ranking/ranking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compete',
  templateUrl: './compete.component.html'
})
export class CompeteComponent {

    competitions: CompetitionResponse[];
    members: MemberResponse[];

    ranking: Ranking = {
        memberNum: 0,
        competitionCode: '',
        rank: 0,
        score: 0,
      };

    ngOnInit(): void {}

    constructor(private rankingService: RankingService, private competitionService: CompetitionService, private memberService: MemberService) {
        this.competitions = [];
        this.members = [];
    }

    allCompetitions(): void {
        this.competitionService.findAll().subscribe((data) => {
          this.competitions = data.competitions;
          console.log(data.competitions);
        });
      }

      allMembers(): void {
        this.memberService.findAll().subscribe((data) => {
          this.members = data.members;
          console.log(data.members);
        });
      }

    compete() {
        this.rankingService.save(this.ranking).subscribe(
          (data) => {
            console.log(data);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `You joined this competition with success`,
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            console.error('Error saving competition:', error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${error.error.message}`
            });
          }
        );
      }

}
