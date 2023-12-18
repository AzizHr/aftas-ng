import { Component, OnInit } from '@angular/core';
import { FishResponse } from 'src/app/models/fish/FishResponse';
import { FishService } from 'src/app/services/fish/fish.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
})
export class FishComponent implements OnInit {
  fish: FishResponse[];

  ngOnInit(): void {
    this.all();
  }

  constructor(private fishService: FishService) {
    this.fish = [];
  }

  all(): void {
    this.fishService.findAll().subscribe((data) => {
      this.fish = data.fish;
      console.log(data.fish);
    });
  }

  confirmDelete(name: string) {
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
        this.delete(name);
      }
    });
  }

  delete(name: string): void {
    this.fishService.delete(name).subscribe((data) => {
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