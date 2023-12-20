import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopMember } from 'src/app/models/member/TopMember';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css'],
})
export class PodiumComponent implements OnInit {
  competitionCode: any;
  podiums: TopMember[];

  ngOnInit(): void {
    this.competitionCode = this.route.snapshot.paramMap.get('code');
    this.getPodiums();
  }

  constructor(
    private route: ActivatedRoute,
    private competitionService: CompetitionService
  ) {
    this.podiums = [];
  }

  getPodiums(): void {
    this.competitionService.podium(this.competitionCode).subscribe((data) => {
      this.podiums = data.top_three;
      console.log(data);
    });
  }
}
