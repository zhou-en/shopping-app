import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { compareSegments } from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated =  new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    // alias event emitter
    // @Output('bpCreate') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    // newServerName = '';
    // newServerContent = '';
    @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
    constructor() {
    }

    ngOnInit(): void {
    }

    onAddServer(nameInput: HTMLInputElement) {
        console.log(this.serverContentInput);
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value
        })
        // this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value
        })
        // this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent})
    }


}
