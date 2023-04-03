import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name='NISHA';
  address='asansole';

  uname=new FormControl('');
  updateName()
  {
    this.uname.setValue('AMITAVA')
  }

  ngOnInit(){
    console.log('I am nginit!!!!! '+this.name);
  }

  constructor()
  {
    console.log('I am constructor!!!!!'+this.address);
  }
  details(){
    alert(this.name +' stays in '+this.address);
  }


  
}
