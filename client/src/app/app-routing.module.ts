import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { TestErrosComponent } from './errors/test-erros/test-erros.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:
    [
      {path:'members',component:MemberListComponent,canActivate:[AuthGuard]},
      {path:'members/:id', component:MemberDetailComponent},
      {path:'lists',component:ListsComponent},
      {path:'messages', component:MessagesComponent}
    ]
  },
  {path:'errors',component:TestErrosComponent},
  {path:'**', component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
