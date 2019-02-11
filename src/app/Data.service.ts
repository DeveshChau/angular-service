import { Injectable, EventEmitter } from "@angular/core";

import { LoggingService } from "./logging.service";

@Injectable()
export class DataService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    statusUpdate = new EventEmitter<string>()

    constructor(private _loggingService: LoggingService){}

    addAccount(name: string, status: string) {
        this.accounts.push({name:name, status:status});
        this._loggingService.logStatusChange(status);
    }
    
    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this._loggingService.logStatusChange(status);
    }
}