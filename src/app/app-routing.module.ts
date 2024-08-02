import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { ScoreComponent } from './score/score.component';
import { scoreGuard } from './core/guards/score.function.guard';

const routes: Routes = [
  {path: '', component: FormComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'score', component: ScoreComponent, pathMatch: 'full', canActivate: [scoreGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
