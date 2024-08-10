import { INavbarData } from "./helper";

export const navbarData: INavbarData[]  =[
    {
        routeLink: 'employee',
        icon: 'fal fa-home',
        Label: 'Employees',
        items: [
            {
                routeLink: 'employee/all-employees',
                Label: 'All Employees'
            },
            {
                routeLink: 'employee/new-employees',
                Label: 'New Employees'
            }
        ]
    },
    {
        routeLink: 'projects',
        icon:'fal fa-chart-bar',
        Label:'Projects',
        items:[
            {
                routeLink: 'projects/all-projects',
                Label: 'All Projects'
            },
            {
                routeLink: 'projects/new-projects',
                Label: 'New projects'
            }
        ]
    },
    {
        routeLink:'assign_project',
        icon:'fal fa-handshake',
        Label:'AssignProjects'
    },
    {
        routeLink: 'task',
        icon:'fal fa-check',
        Label: 'Task',
        items:[
            {
                routeLink:'task/task-list',
                Label:'Task list'
            },
            {
                 routeLink:'task/add-task',
                Label:'Add task'
            }
        ]
    },
    {
        routeLink: 'comments',
        icon:'fal fa-file',
        Label:'Comments'
    },
    {
        routeLink: 'designation',
        icon:'fal fa-book',
        Label:'Designation'
    },
   

];