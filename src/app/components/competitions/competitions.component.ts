import { Component, OnInit } from '@angular/core';
import { CompetitionResponse } from 'src/app/models/competition/CompetitionResponse';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
})
export class CompetitionsComponent implements OnInit {
  competitions: CompetitionResponse[];
  selectedFilter: string = 'All';

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

  running(): void {
    const currentTime = new Date();

    const runningCompetitions = this.competitions.filter((competition) => {
      const startDate = new Date(
        competition.date + ' ' + competition.startTime
      );
      const endDate = new Date(competition.date + ' ' + competition.endTime);

      return startDate <= currentTime && endDate >= currentTime;
    });

    console.log(runningCompetitions);

    this.competitions = runningCompetitions;
  }

  done(): void {
    const currentTime = new Date();

    const doneCompetitions = this.competitions.filter((competition) => {
      const endDate = new Date(competition.date + ' ' + competition.endTime);
      return endDate < currentTime;
    });

    console.log(doneCompetitions)

    this.competitions = doneCompetitions;
  }

  upcoming(): void {
    const currentTime = new Date();

    const upcomingCompetitions = this.competitions.filter((competition) => {
      const startDate = new Date(
        competition.date + ' ' + competition.startTime
      );
      return startDate > currentTime;
    });

    console.log(upcomingCompetitions)
    this.competitions = upcomingCompetitions;
  }

  isRunning(competition: CompetitionResponse) {
    const currentTime = new Date();
    const startDate = new Date(competition.date + ' ' + competition.startTime);
    const endDate = new Date(competition.date + ' ' + competition.endTime);

    return startDate <= currentTime && endDate >= currentTime;
  }

  isDone(competition: CompetitionResponse) {
    const currentTime = new Date();
    const endDate = new Date(competition.date + ' ' + competition.endTime);
    return endDate < currentTime;
  }

  isUpcoming(competition: CompetitionResponse) {
    const currentTime = new Date();
    const startDate = new Date(competition.date + ' ' + competition.startTime);
    return startDate > currentTime;
  }

  applyFilter(): void {
    switch (this.selectedFilter) {
      case 'All':
        this.all();
        break;
      case 'Running':
        this.running();
        break;
      case 'Done':
        this.done();
        break;
      case 'Upcoming':
        this.upcoming();
        break;
      default:
        this.all();
        break;
    }
  }

  confirmDelete(code: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(code);
      }
    });
  }

  delete(code: string): void {
    this.competitionService.delete(code).subscribe((data) => {
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${data}`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.all();
    });
  }
}
