import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = [
    {display: 'Home', href: 'http://www.maxtrain.com', title: 'Max'},
    {display: 'Google', href: 'http://www.google.com', title: 'Google'},
    {display: 'Microsoft', href: 'http://www.microsoft.com', title: 'Microsoft'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
