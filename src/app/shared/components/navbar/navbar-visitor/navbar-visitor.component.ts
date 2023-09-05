import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-visitor',
  templateUrl: './navbar-visitor.component.html',
  styleUrls: ['./navbar-visitor.component.scss']
})
export class NavbarVisitorComponent {

  lista = [
    { name: "Crianças", url: `/hub/visitor/main`, active: false },
    { name: "Culto", url: `/hub/visitor/meetings`, active: false }
  ]
  indexPage = 0;

  selectIcon(name: string) {
    var icon;
    const sizeIcon = 28;
    switch (name) {
      case 'Culto':
        // icon = <FaChurch size={sizeIcon} />
        break;
      case 'Crianças':
        // icon = <FaCubes size={sizeIcon} />
        break;
      default:
        // icon = <FaCode size={sizeIcon} />;
        break;
    }

    return icon;
  }

  navegated(url: string, index: number) {
   this.indexPage = index
  }

}
