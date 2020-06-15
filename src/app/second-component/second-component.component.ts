import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponent implements OnInit {

  message:string=''; 
  
  constructor() { }

  ngOnInit() {
  }

}
