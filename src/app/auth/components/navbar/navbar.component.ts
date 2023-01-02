import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // isMenuOpen = false;
  // toggleMenu(): void{
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  isMenu:boolean = false;
  menuo= true;
  menuc= false;

  toggleMenu(){
    this.isMenu = !this.isMenu;
    this.menuo = !this.menuo;
    this.menuc = !this.menuc;
  }

}
