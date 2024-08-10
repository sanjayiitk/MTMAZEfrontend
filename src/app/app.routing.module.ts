import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationComponent } from './designation/designation.component';
import { AssignProjectsComponent } from './assign-projects/assign-project.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NewEmployeesComponent } from './employee/new-employees/new-employees.component';
import { AllEmployeesComponent } from './employee/all-employees/all-employees.component';
import { AuthGuard } from './auth.guard';
import { NewProjectsComponent } from './projects/new-projects/new-projects.component';
import { AllProjectsComponent } from './projects/all-projects/all-projects.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { AddTaskComponent } from './task/add-task/add-task.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'layout', component: LayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: 'employee', children: [
        { path: 'new-employees', component: NewEmployeesComponent },
        { path: 'all-employees', component: AllEmployeesComponent }
      ]},
      { path: 'projects', children: [
        { path: 'new-projects', component: NewProjectsComponent },
        { path: 'all-projects', component: AllProjectsComponent }
      ]},
      { path: 'assign_project', component: AssignProjectsComponent },
      { path: 'task', children: [
        { path: 'task-list', component: TaskListComponent },
        { path: 'add-task', component: AddTaskComponent }
      ]},
      { path: 'comments', component: CommentsComponent },
      { path: 'designation', component: DesignationComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
