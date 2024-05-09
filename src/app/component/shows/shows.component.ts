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
    { id: 11, name: 'Mr. robot', type: 'Show' },
    { id: 12, name: 'Shogun' , type: 'Show'},
    { id: 13, name: 'Game of Thrones' , type: 'Show'},
    { id: 14, name: 'Dark Knigt' , type: 'Movie' },
    { id: 15, name: 'Moon Knight' , type: 'Show'},
    { id: 16, name: 'Avengers' , type: 'Movie'},
    { id: 17, name: 'Star Wars' , type: 'Movie'},
    { id: 18, name: 'Ashoka' , type: 'Fantasy'},
    { id: 19, name: 'Flash' , type: 'Movie'},
    { id: 20, name: 'Mandaloraian' , type: 'Fantasy'}
  ];


  openNewTab(){
    window.open('/details');
  }

}
