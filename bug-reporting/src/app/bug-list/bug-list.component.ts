import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bug } from 'src/domain/bug';
import { Bugs } from 'src/domain/bugs';
import { BugService } from 'src/services/bug.service';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {
  bugList?: Bug[];
 

  constructor(private bugService: BugService, private router: Router) {
 
    this.bugService.getBugs('').subscribe((bugFetched : Bug[]) => {
      this.bugList = bugFetched;
    
    })
  }

  sortTable(sortBy: string){
    this.bugService.getBugs(sortBy).subscribe((bugFetched : Bug[]) => {
      this.bugList = bugFetched;
    
    })
  }

  ngOnInit() {
  }

  editTicket(bugId: string){
    this.router.navigate(['bug' , bugId ])
  }

}
