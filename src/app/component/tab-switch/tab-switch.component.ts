import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.css']
})
export class TabSwitchComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
  name = '!!!';
  viewMode = 'tab1';
}
