import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menu = {display: 'Home', href: 'http://www.amazon.com', title:'Amazon'};

  constructor() { }

  ngOnInit() {
  }

}
