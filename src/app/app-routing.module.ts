import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserIndexComponent } from './components/user-index/user-index.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: UserIndexComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
