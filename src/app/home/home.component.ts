import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  h1Style:boolean=false;
  users:object;
  constructor(private data:DataService) { }
  
  ngOnInit() {
    
  }
  firstClick(){
    this.h1Style=!this.h1Style;
  };

  getData(){
    this.data.getData().subscribe(data=>{
      this.users=data;
      console.log(this.users);
    })
  }

}
