import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { LevelsComponent } from './components/levels/levels.component';
import { MembersComponent } from './components/members/members.component';
import { FishComponent } from './components/fish/fish.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { HuntingsComponent } from './components/huntings/huntings.component';
import { AddCompetitionComponent } from './components/competitions/add-competition/add-competition.component';
import { HomeComponent } from './components/home/home.component';
import { CompetitionsUserComponent } from './components/competitions-user/competitions-user.component';

const routes: Routes = [
  { path: 'home', redirectTo: "", pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'competitions', component: CompetitionsUserComponent },
  { path: 'dashboard/competitions', component: CompetitionsComponent },
  { path: 'dashboard/competitions/new', component: AddCompetitionComponent },
  // { path: 'dashboard/levels/edit/:id', component: EditLevelComponent },
  { path: 'dashboard/levels', component: LevelsComponent },
  // { path: 'dashboard/levels/new', component: AddLevelComponent },
  // { path: 'dashboard/levels/edit/:id', component: EditLevelComponent },
  { path: 'dashboard/members', component: MembersComponent },
  // { path: 'dashboard/members/new', component: AddQuestionComponent },
  // { path: 'dashboard/members/edit/:id', component: EditQuestionComponent },
  { path: 'dashboard/fish', component: FishComponent },
  // { path: 'dashboard/fish/new', component: AddResponseComponent },
  // { path: 'dashboard/fish/edit/:id', component: EditResponseComponent },
  { path: 'dashboard/rankings', component: RankingsComponent },
  // { path: 'dashboard/rankings/new', component: AddMediaComponent },
  // { path: 'dashboard/rankings/edit/:id', component: EditMediaComponent },
  { path: 'dashboard/huntings', component: HuntingsComponent },
  // { path: 'dashboard/huntings/new', component: AddValidationComponent },
  // { path: 'dashboard/huntings/edit/:id', component: EditValidationComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
