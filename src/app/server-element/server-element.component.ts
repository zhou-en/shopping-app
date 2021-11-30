import {
    Component,
    Input,
    OnInit,
    ViewEncapsulation,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {
    // property binding through alias
    @Input('srvElement') element: {
        type: string,
        name: string,
        content: string
    }
    @Input() name: string;
    @ViewChild('heading', {static: true}) header: ElementRef;
    // access parent element after content init
    @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

    constructor() {
        console.log('Constructor called');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called');
        console.log(changes);
    }

    ngOnInit(): void {
        console.log('ngOnInit called');
        console.log('text: ' + this.header.nativeElement.textContent);
        console.log('test content of paragraph: ' + this.paragraph.nativeElement.textContent);
    }

    ngDoCheck() {
        console.log('ngDoCheck called!')
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
        console.log('test content of paragraph: ' + this.paragraph.nativeElement.textContent);
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        console.log('text: ' + this.header.nativeElement.textContent);
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

}
