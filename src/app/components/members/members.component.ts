import { Component, OnInit } from '@angular/core';
import { MemberResponse } from 'src/app/models/member/MemberResponse';
import { MemberService } from 'src/app/services/member/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
})
export class MembersComponent implements OnInit {
  members: MemberResponse[];

  ngOnInit(): void {
    this.all();
  }

  constructor(private memberService: MemberService) {
    this.members = [];
  }

  all(): void {
    this.memberService.findAll().subscribe((data) => {
      this.members = data.members;
      console.log(data.members);
    });
  }

  confirmDelete(num: number) {
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
        this.delete(num);
      }
    });
  }

  delete(num: number): void {
    this.memberService.delete(num).subscribe((data) => {
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