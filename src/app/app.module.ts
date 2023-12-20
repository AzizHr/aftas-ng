import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { HuntingsComponent } from './components/huntings/huntings.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { MembersComponent } from './components/members/members.component';
import { FishComponent } from './components/fish/fish.component';
import { LevelsComponent } from './components/levels/levels.component';
import { LogoComponent } from './components/sidebar/logo/logo.component';
import { MenuComponent } from './components/sidebar/menu/menu.component';
import { MenuItemComponent } from './components/sidebar/menu/menu-item/menu-item.component';
import { AddCompetitionComponent } from './components/competitions/add-competition/add-competition.component';
import { AddHuntingComponent } from './components/huntings/add-hunting/add-hunting.component';
import { AddRankingComponent } from './components/rankings/add-ranking/add-ranking.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PodiumComponent } from './components/podium/podium.component';
import { NewMemberComponent } from './components/competitions/new-member/new-member.component';
import { NewHuntingComponent } from './components/competitions/new-hunting/new-hunting.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CompetitionsComponent,
    HuntingsComponent,
    RankingsComponent,
    LevelsComponent,
    MembersComponent,
    FishComponent,
    LogoComponent,
    MenuComponent,
    MenuItemComponent,
    AddCompetitionComponent,
    AddHuntingComponent,
    AddRankingComponent,
    NavbarComponent,
    PodiumComponent,
    NewMemberComponent,
    NewHuntingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
