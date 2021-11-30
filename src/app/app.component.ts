import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    oddNumbers: number[] = [];
    evenNumber: number[] = [];
    onIntervalFired(firedNumber: number) {
        console.log(firedNumber);
        if (firedNumber % 2 === 0) {
            this.evenNumber.push(firedNumber);
        } else {
            this.oddNumbers.push(firedNumber);
        }
    }
}
