import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverName: string;
  serverBluePrint: string;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(event: Event) {

    this.elemnts.push({
      type: 'server',
      name: this.serverName,
      content: this.serverBluePrint
    });
  }

  onAddServerBlupePrint(event: Event) {
    this.elemnts.push({
      type: 'blueprint',
      name: this.serverName,
      content: this.serverBluePrint
    });
  }

}
