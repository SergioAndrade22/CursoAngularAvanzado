import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  valueB: number = 50;
  valueG: number = 20;

  constructor() { }

  ngOnInit(): void {
  }
}
