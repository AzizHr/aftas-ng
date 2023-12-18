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