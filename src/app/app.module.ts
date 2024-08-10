import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from "./app.component";
import { BodyComponent } from "./body/body.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { DesignationComponent } from "./designation/designation.component";
import { RouterModule } from '@angular/router';
import { AssignProjectsComponent } from "./assign-projects/assign-project.component";
import { SublevelMenuComponent } from "./sidenav/sublevel-menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common'
import { LoginComponent } from "./login/login.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NewEmployeesComponent } from "./employee/new-employees/new-employees.component";
import { AllEmployeesComponent } from "./employee/all-employees/all-employees.component";
import { NewProjectsComponent } from "./projects/new-projects/new-projects.component";
import { AllProjectsComponent } from "./projects/all-projects/all-projects.component";
import { TaskListComponent } from "./task/task-list/task-list.component";
import { AddTaskComponent } from "./task/add-task/add-task.component";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
    declarations: [
        AppComponent,
        BodyComponent,
        SidenavComponent,
        AssignProjectsComponent,
        Comment,
        DesignationComponent,
        SidenavComponent,
        SublevelMenuComponent,
        LoginComponent,
        HeaderComponent,
        NewEmployeesComponent,
        AllEmployeesComponent,
        NewProjectsComponent,
        AllProjectsComponent,
        TaskListComponent,
        AddTaskComponent,
        
        
    
        
            
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        SidenavComponent,
        HeaderComponent,
        HttpClientModule,
        ReactiveFormsModule,
   
      
        
        
   
        
    ],
    providers: [ provideHttpClient(withFetch())],
    bootstrap: [AppComponent]
})
export class AppModule { }
