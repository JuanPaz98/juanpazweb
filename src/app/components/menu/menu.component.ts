import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  active = false;

  constructor() { }

  ngOnInit(): void {
  }

  activeToggle(){
    this.active = !this.active;
    console.log(this.active);
  }

}
