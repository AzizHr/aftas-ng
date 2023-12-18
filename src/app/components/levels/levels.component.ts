import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level/Level';
import { LevelService } from 'src/app/services/level/level.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
})
export class LevelsComponent implements OnInit {
  levels: Level[];

  ngOnInit(): void {
    this.all();
  }

  constructor(private levelService: LevelService) {
    this.levels = [];
  }

  all(): void {
    this.levelService.findAll().subscribe((data) => {
      this.levels = data.levels;
      console.log(data.levels);
    });
  }

  confirmDelete(code: number) {
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

  delete(code: number): void {
    this.levelService.delete(code).subscribe((data) => {
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