import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserIndexComponent } from './components/user-index/user-index.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: UserIndexComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
