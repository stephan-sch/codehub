import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBugComponent } from './new-bug/new-bug.component';

const routes: Routes = [
  {
    path: 'new-bug',
    component: NewBugComponent
  //  loadComponent: () => import('./new-bug/new-bug.component').then(c=> c.NewBugComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
