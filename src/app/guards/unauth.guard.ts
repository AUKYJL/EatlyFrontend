import { inject } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateFn,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const unauthGuard: CanActivateFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	if (!inject(AuthService).checkAuth()) {
		return true;
	} else {
		inject(Router).navigate(['/']);
		return false;
	}
};
