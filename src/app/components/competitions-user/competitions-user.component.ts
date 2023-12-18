import { Component, OnInit } from '@angular/core';
import { CompetitionResponse } from 'src/app/models/competition/CompetitionResponse';
import { CompetitionService } from 'src/app/services/competition/competition.service';

@Component({
  selector: 'app-competitions-user',
  templateUrl: './competitions-user.component.html',
})
export class CompetitionsUserComponent implements OnInit {
  competitions: CompetitionResponse[];

  ngOnInit(): void {
    this.all();
  }

  constructor(private competitionService: CompetitionService) {
    this.competitions = [];
  }

  all(): void {
    this.competitionService.findAll().subscribe((data) => {
      this.competitions = data.competitions;
      console.log(data.competitions);
    });
  }

}