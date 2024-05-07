import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showes = [
    { id: 11, name: 'Mr. robot', type: 'Fantasy' },
    { id: 12, name: 'Shogun' , type: 'Novel'},
    { id: 13, name: 'Game of Thrones' , type: 'Novel'},
    { id: 14, name: 'House of Dragons' , type: 'Novel' },
    { id: 15, name: 'Moon Knight' , type: 'Fantasy'},
    { id: 16, name: 'Loki' , type: 'Fantasy'},
    { id: 17, name: 'Fallout' , type: 'Fantasy'},
    { id: 18, name: 'Ashoka' , type: 'Fantasy'},
    { id: 19, name: 'Flash' , type: 'Fantasy'},
    { id: 20, name: 'Mandaloraian' , type: 'Fantasy'}
  ];

}
