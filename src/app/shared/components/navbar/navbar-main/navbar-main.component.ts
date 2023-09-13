import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChurch, faCubes, faCode, faHome, faUserPlus, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit {

  lista = [
    { name: "Home", url: '/main/*' },
    { name: "Responsaveis", url: `/main/parents` },
    { name: "Crianças", url: `/main/childrens` },
    { name: "Reuniões", url: `/main/meetings` },
    { name: "Ajustes", url: `/main/settings` },
  ]
  indexPage = 0;
  faChurch = faChurch;
  faCubes = faCubes;
  faCode = faCode;
  faHome = faHome;
  faUserPlus = faUserPlus;
  faCogs = faCogs;

  constructor(private router: Router) {
    this.initNavbarUrl()
  }
  ngOnInit(): void {
  }

  selectIcon(name: string) {
    var icon;
    switch (name) {
      case 'Home':
        icon = faHome;
        break;
      case 'Responsaveis':
        icon = faUserPlus;
        break;
      case 'Reuniões':
        icon = faChurch;
        break;
      case 'Ajustes':
        icon = faCogs;
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

  initNavbarUrl() {
    this.lista.forEach((l, i) => {
      if (this.router.url == l.url) {
        console.log(this.router.url)
        this.indexPage = i;
      }
    })
  }

}
