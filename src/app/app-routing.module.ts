import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  //jika string URL = heroes, maka akan ditampilkan heroescomponent.
  { path: 'heroes', component:HeroesComponent },
  { path: 'dashboard', component:DashboardComponent},
  //redirect automatically if starts to dashboard. under html <router-outlet> is blank
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: 'detail/:id', component:HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
