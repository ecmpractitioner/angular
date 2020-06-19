import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector:'[app-servers]',//this is similar to css selector way. Add a div in the html to use this componenet
 // selector:'.app-servers',//this is similar to css class. Add this as class attribute in html to use this componenet
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServer: boolean=false;
  constructor() {
    setTimeout(() => {
      this.addServer=true;
    }, 10000);
   }
 
  ngOnInit(): void {
  }

}
