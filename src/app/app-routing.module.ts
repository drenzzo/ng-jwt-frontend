import { NgModule } from '@angular/core';
import { Routes, RouterModule, GuardsCheckEnd } from '@angular/router';

// Components
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

//Guard
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: "", redirectTo: "tasks", pathMatch: "full"},
  {path: "tasks", component: TasksComponent},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent},
  {path: "private", component: PrivateTasksComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
