import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/models/ranking/Ranking';
import { RankingService } from 'src/app/services/ranking/ranking.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
})
export class RankingsComponent implements OnInit {
  rankings: Ranking[];

  ngOnInit(): void {
    this.all();
  }

  constructor(private rankingsService: RankingService) {
    this.rankings = [];
  }

  all(): void {
    this.rankingsService.findAll().subscribe((data) => {
      this.rankings = data.rankings;
      console.log(data.rankings);
    });
  }

}