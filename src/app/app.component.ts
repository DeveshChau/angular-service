import { Component, OnInit } from '@angular/core';
import { DataService } from './Data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  accounts: {name: string, status: string}[]=[];

  constructor(private _DataService: DataService){}

  ngOnInit(){
    this.accounts = this._DataService.accounts
  }
  

}
