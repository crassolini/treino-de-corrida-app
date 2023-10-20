import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHideBtnAdicionar = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/corrida') {
          this.isHideBtnAdicionar = true;
        } else {
          this.isHideBtnAdicionar = false;
        }
      }
    });
  }

  ngOnInit() {
    let sideNav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sideNav);
  }

}
