import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faChurch, faChild, faUserGear, faCubes, faChartPie, faUserCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {

  faHome = faHome;
  faChurch = faChurch;
  faUserGear = faUserGear;
  faChild = faChild;
  faCubes = faCubes;
  faChartPie = faChartPie;
  faUserCheck = faUserCheck;

  indexPage = 0;

  itens = [
    { title: 'Pendencias', icon: faUserCheck, direct: '/admin/*' },
    { title: 'Dashboard', icon: faChartPie, direct: '/admin/dashboard' },
    // { title: 'Permissões', icon: faUserGear, direct: '/admin/permission' },
    // { title: 'Crianças', icon: faChild, direct: '/admin/children' },
    { title: 'Reuniões', icon: faChurch, direct: '/admin/meet' },
    { title: 'Turmas', icon: faCubes, direct: '/admin/room' },
  ]

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.initNavbar();
  }

  onSelected(index: any, url: string) {
    this.indexPage = index;
    this.router.navigateByUrl(url)
  } 

  initNavbar() :any{
    this.itens.forEach((item, i) => {
      if (this.router.url == item.direct) {
        this.indexPage = i;
      }
    })
  }
}
