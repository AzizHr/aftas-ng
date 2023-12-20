import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionResponse } from 'src/app/models/competition/CompetitionResponse';
import { FishResponse } from 'src/app/models/fish/FishResponse';
import { Hunting } from 'src/app/models/hunting/Hunting';
import { MemberResponse } from 'src/app/models/member/MemberResponse';
import { CompetitionService } from 'src/app/services/competition/competition.service';
import { FishService } from 'src/app/services/fish/fish.service';
import { HuntingService } from 'src/app/services/hunting/hunting.service';
import { MemberService } from 'src/app/services/member/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-hunting',
  templateUrl: './new-hunting.component.html',
  styleUrls: ['./new-hunting.component.css'],
})
export class NewHuntingComponent {
  competitions: CompetitionResponse[];
  members: MemberResponse[];
  fish: FishResponse[];

  hunting: Hunting = {
    numberOfFish: 0,
    competitionCode: '',
    memberNum: 0,
    fishName: '',
  };

  ngOnInit(): void {
    this.getCompetitions();
    this.getMembers();
    this.getFish();
  }

  constructor(
    private competitionService: CompetitionService,
    private memberServive: MemberService,
    private fishService: FishService,
    private huntingService: HuntingService,
    private router: Router
  ) {
    this.competitions = [];
    this.members = [];
    this.fish = [];
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

  getFish(): void {
    this.fishService.findAll().subscribe((data) => {
      this.fish = data.fish;
      console.log(data.fish);
    });
  }

  newHunting() {
    this.huntingService.save(this.hunting).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Hunting added with success`,
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
