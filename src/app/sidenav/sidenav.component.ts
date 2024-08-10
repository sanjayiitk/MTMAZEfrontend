import { Component,Output,EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SublevelMenuComponent } from "./sublevel-menu.component";
import { INavbarData } from './helper';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SublevelMenuComponent
],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter ();
  collapsed= false;
  screenWidth= 0;
  navData= navbarData;
  multiple: boolean =false;

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  closeSidenav():void{
    this.collapsed = false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  handleClick(item: INavbarData): void{
    if(!this.multiple){
      for(let modeLItem of this.navData){
        if(item !== modeLItem && modeLItem.expanded){
          modeLItem.expanded =false;
        }

      }
    }
    item.expanded = !item.expanded

  }
}
