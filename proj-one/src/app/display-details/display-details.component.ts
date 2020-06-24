import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  toggleText:boolean = false;
  log=[];
  count:number=1;
  constructor() { }

  ngOnInit(): void {
  }

  onClickDisplay(){
    this.toggleText=!this.toggleText;
    this.log.push(new Date());
    
  }

  getColor(){
    const a=this.log.length>=5?'blue':'white';
    return a;
  }
}
