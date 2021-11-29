import { Component, OnInit } from '@angular/core';

@Component({
  // attribute selector
  // selector: '[app-servers]',
  //class selector
  selector: '.app-servers',
  // inline template
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  // inline style
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
