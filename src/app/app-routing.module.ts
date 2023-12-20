import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { LevelsComponent } from './components/levels/levels.component';
import { MembersComponent } from './components/members/members.component';
import { FishComponent } from './components/fish/fish.component';
import { AddCompetitionComponent } from './components/competitions/add-competition/add-competition.component';
import { PodiumComponent } from './components/podium/podium.component';
import { NewMemberComponent } from './components/competitions/new-member/new-member.component';
import { NewHuntingComponent } from './components/competitions/new-hunting/new-hunting.component';

const routes: Routes = [
  { path: '', component: CompetitionsComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'competitions/new', component: AddCompetitionComponent },
  { path: 'levels', component: LevelsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'fish', component: FishComponent },
  { path: 'new-member', component: NewMemberComponent },
  { path: 'new-hunting', component: NewHuntingComponent },
  { path: 'competitions/podium/:code', component: PodiumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
