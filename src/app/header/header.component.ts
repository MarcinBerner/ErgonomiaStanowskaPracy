import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  authService = inject(AuthService);
  ngOnInit(): void {
      this.authService.user$.subscribe((user) => {
        if(user){
          this.authService.currentUserSig.set({
            email: user.email!,
            username: user.displayName!,
            password: '',
          });
        }
        else{
          this.authService.currentUserSig.set(null);
        }
      })
  }


}
