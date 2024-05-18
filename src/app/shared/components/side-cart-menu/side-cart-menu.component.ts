import { Component } from '@angular/core';
import { SideCartMenuService } from 'src/app/services/side-cart-menu.service';

@Component({
	selector: 'app-side-cart-menu',
	templateUrl: './side-cart-menu.component.html',
	styleUrls: ['./side-cart-menu.component.scss'],
})
export class SideCartMenuComponent {
	constructor(public sideCartService: SideCartMenuService) {}
}
