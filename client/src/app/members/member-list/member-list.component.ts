import { Component, inject, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit{
 private memberService = inject(MembersService);
 members: Member[] = [];

  ngOnInit(): void {
    this.loadMembers();
    
  }

  loadMembers(){
    this.memberService.getMembers().subscribe({
      next: members => this.members = members
    })

  }

  trackByFn(index: number, member: any): number{
    return member.id;
  }

}
