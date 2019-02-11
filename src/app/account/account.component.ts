import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../Data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private _loggingService: LoggingService,
    private _DataService: DataService ){}

  onSetTo(status: string) {
    this._DataService.updateStatus(this.id,status)
    //this._loggingService.logStatusChange(status);
    this._DataService.statusUpdate.emit(status);
  }
}
