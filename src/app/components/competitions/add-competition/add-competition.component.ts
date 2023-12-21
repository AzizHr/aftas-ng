import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from 'src/app/models/competition/Competition';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.css']
})
export class AddCompetitionComponent {

    competition: Competition = {
      date: '',
      startTime: '',
      endTime: '',
      numberOfParticipants: 3,
      location: '',
      amount: 0
    };

    ngOnInit(): void {}

    constructor(private competitionService: CompetitionService, private router: Router) {}

    addCompetition() {
      this.competitionService.save(this.competition).subscribe(
        (data) => {
          console.log(data);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Created with success`,
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => this.navigateToCompetitions(), 2000);
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

    navigateToCompetitions() {
      this.router.navigate(['/competitions']);
    }

}
