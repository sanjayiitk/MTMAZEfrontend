import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INavbarData } from './helper';
import { RouterModule } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sublevel-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
   <ul *ngIf="collapsed && data.items && data.items.length > 0" 
   [@submenu]="expanded
   ?{value:'visible', params:{transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',height:'*'}}
   :{value:'hidden',
  params:{transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',height:'0'}}"
   class="sublevel-nav"
   >
    <li *ngFor="let item of data.items" class="sublevel-nav-item">
      <a class="sublevel-nav-link"
      (click)="handLeClick(item)"
         *ngIf="item.items && item.items.length > 0">
        <i class="sublevel-link-icon fa fa-circle"></i>
        <span class="sublevel-link-text" *ngIf="collapsed">{{ item.Label}}</span>
        <i *ngIf="item.items && collapsed" class="menu-employee-icon" 
           [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"></i>
      </a>
      <a class="sublevel-nav-link"
      *ngIf="!item.items || (item.items && item.items.length ===0)"
      [routerLink]="[item.routeLink]"
      routerLinkActive="active-sublevel"
      [routerLinkActiveOptions]="{exact: true}">

    <i class="sublevel-link-icon fa fa-circle"></i>
    <span class="sublevel-link-text" *ngIf="collapsed">{{ item.Label}}</span>
    </a>
    <div *ngIf="item.items && item.items.length > 0">
      <app-sublevel-menu>
        [collapsed]="collapsed"
        [multiple]="multiple"
        [expanded]="item.expanded"
      </app-sublevel-menu>
    </div>
    </li>
  </ul>
  `,
  styleUrls: ['./sidenav.component.css'],
  animations:[
    trigger('submenu',[
      state('hidden',style({
        height:'0',
        overflow:'hidden'
      })),
    state('visible',style({
      height:'*'
    })),
    transition('visible <=> hidden',[style({overflow:'hidden'}),
      animate('{{transitionParams}}')]),
      transition('void =>*',animate(0))
  ])
  ]
})
export class SublevelMenuComponent implements OnInit {
  [x: string]: any;

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    Label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple = false;

  constructor() {}

  ngOnInit(): void {}
  handLeClick(item: any): void{
    if(!this.multiple){
      if(this.data.items && this.data.items.length>0){
        for(let modeLItem of this.data.items){
          if(item !==modeLItem && modeLItem.expanded){
            modeLItem.expanded= false;

          }
        }
      }
    }
    item.expanded= !item.expanded;
  }
}
