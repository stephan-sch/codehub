import { Component, OnInit } from '@angular/core';
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
 

  constructor(private bugService: BugService) {
 
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


}
