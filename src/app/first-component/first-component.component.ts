import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponent implements OnInit {
  
  message:string='';

  constructor() { }

  ngOnInit() {
  }

}
