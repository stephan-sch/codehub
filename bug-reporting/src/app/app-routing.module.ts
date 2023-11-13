import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugListComponent } from './bug-list/bug-list.component';
import { NewBugComponent } from './new-bug/new-bug.component';


const routes: Routes = [
  {
    path: "bug",

    component: NewBugComponent,
  },
  {
    path: "bug/:bugId",

    component: NewBugComponent,
  },
  {
    path: "bug-list",
    component: BugListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
