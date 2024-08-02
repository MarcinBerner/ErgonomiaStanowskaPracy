import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const scoreGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userSig = inject(AuthService).currentUserSig();
  let isLoggedIn: boolean = false;
  if(userSig != undefined && userSig != null){
    isLoggedIn = true;
  }
  return isLoggedIn ? isLoggedIn : inject(Router).createUrlTree(['/login']);

}
