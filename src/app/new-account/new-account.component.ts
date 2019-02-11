import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../Data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private _loggingService: LoggingService,
              private _DataService: DataService ){
                _DataService.statusUpdate.subscribe(
                  (status:string)=>alert("new status: "+status))
              }

  onCreateAccount(accountName:string, status:string) {
    this._DataService.addAccount(accountName,status);
    //this._loggingService.logStatusChange(status);
  }
}
