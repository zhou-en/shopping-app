import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    // attribute selector
    // selector: '[app-servers]',
    //class selector
    // selector: '.app-servers',
    // inline template
    // template: `
    //   <app-server></app-server>
    //   <app-server></app-server>`,
    // inline style
    // styles: [`
    //   h3 {
    //     color: dodgerblue;
    //   }
    // `]
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverName = '';
    serverCreated = false;
    servers = ['Testserver', 'Testserver 2']
    constructor() {
        setTimeout(()=> {
            this.allowNewServer = true;
        }, 2000)
    }

    ngOnInit(): void {
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'server was created, name is: '+ this.serverName;
    }

    onUpdateServerName(event: any) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}
