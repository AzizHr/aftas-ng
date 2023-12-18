import { Component, OnInit } from '@angular/core';
import { HuntingResponse } from 'src/app/models/hunting/HuntingResponse';
import { HuntingService } from 'src/app/services/hunting/hunting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-huntings',
  templateUrl: './huntings.component.html',
})
export class HuntingsComponent implements OnInit {
  huntings: HuntingResponse[];

  ngOnInit(): void {
    this.all();
  }

  constructor(private huntingService: HuntingService) {
    this.huntings = [];
  }

  all(): void {
    this.huntingService.findAll().subscribe((data) => {
      this.huntings = data.huntings;
      console.log(data.huntings);
    });
  }

  confirmDelete(id: number) {
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
        this.delete(id);
      }
    });
  }

  delete(id: number): void {
    this.huntingService.delete(id).subscribe((data) => {
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