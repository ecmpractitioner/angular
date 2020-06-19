import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector:'[app-servers]',//this is similar to css selector way. Add a div in the html to use this componenet
  // selector:'.app-servers',//this is similar to css class. Add this as class attribute in html to use this componenet
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServer: boolean = false;
  serverCreationStatus: string = 'No server has been created';
  serverName: string = 'Default Server';
  serverCreated: boolean = false;
  constructor() {
    setTimeout(() => {
      this.addServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverName ? this.serverCreationStatus = 'Server has been created with name ' + this.serverName : this.serverCreationStatus = "Server name cannot be blank";
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
