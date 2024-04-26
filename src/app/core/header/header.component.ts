import { Component } from '@angular/core';
import { INavList } from 'src/app/types/header.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	public navList:INavList[]=[{
		title:'Menu',
		route:'',
	},{
		title:'Blog',
		route:'',
	},{
		title:'Pricing',
		route:'',
	},{
		title:'Contact',
		route:'',
	},]
}
