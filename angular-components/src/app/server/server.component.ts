// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-server',
//   templateUrl: './server.component.html',
//   styleUrls: ['./server.component.css']
// })
// export class ServerComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import {Component} from '@angular/core';

//whatever you pass within component are the metadata about this class which will be stored
@Component({
  selector:'app-server',//name should be unique. This is how this componenet is used
  templateUrl:'./server.component.html' // this holds the html code for this componenet
})
export class ServerComponent {

}
