import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faChurch, faCubes, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-visitor',
  templateUrl: './navbar-visitor.component.html',
  styleUrls: ['./navbar-visitor.component.scss']
})
export class NavbarVisitorComponent {

  lista = [
    { name: "Crianças", url: `/visitor/children`, active: false },
    { name: "Culto", url: `/visitor/meetings`, active: false }
  ]
  indexPage = 0;
  faChurch = faChurch;
  faCubes = faCubes;
  faCode = faCode;

  constructor(private router: Router) {
    this.lista.forEach((l, i) => {
      if (this.router.url == l.url) {
        this.indexPage = i;
      }
    })
  }

  selectIcon(name: string) {
    var icon;
    const sizeIcon = 28;
    switch (name) {
      case 'Culto':
        icon = faChurch;
        break;
      case 'Crianças':
        icon = faCubes;
        break;
      default:
        icon = faCode;
        break;
    }

    return icon;
  }

  navegated(url: string, index: number) {
   this.indexPage = index
   this.router.navigateByUrl(url)
  }

}
