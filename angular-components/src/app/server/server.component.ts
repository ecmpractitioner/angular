import {Component} from '@angular/core';

//whatever you pass within component are the metadata about this class which will be stored
@Component({
  selector:'app-server',//name should be unique. This is how this componenet is used
  templateUrl:'./server.component.html', // this holds the html code for this componenet
  styles:[
    `
    .online{
      color:white;
    }
  `
  ]
})
export class ServerComponent {
  serverId: number=20;
  serverStatus: string='offline';

  constructor(){

    const random = Math.random();
    this.serverStatus=random<0.5?"Offline":"Online";
    
  }
  getServerStatus(){
    return this.serverStatus;
  }

  getServerStatusColor(){
  //debugger;
    return this.serverStatus==="Offline"?"red":"green";
  }

}
