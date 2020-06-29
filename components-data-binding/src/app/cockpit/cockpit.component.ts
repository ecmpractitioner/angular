import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  serverName: string;
  serverContent: string;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    
    this.serverCreated.emit({ serverName: this.serverName, serverContent: this.serverContent });
  }

  onAddServerBlupePrint() {
    this.blueprintCreated.emit({ serverName: this.serverName, serverContent: this.serverContent });
  }

}
