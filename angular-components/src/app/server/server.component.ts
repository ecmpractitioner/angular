import {Component} from '@angular/core';

//whatever you pass within component are the metadata about this class which will be stored
@Component({
  selector:'app-server',//name should be unique. This is how this componenet is used
  templateUrl:'./server.component.html' // this holds the html code for this componenet
})
export class ServerComponent {
  serverId: number=20;
  serverStatus: string='offline';

  getServerStatus(){
    return this.serverStatus;
  }

}
