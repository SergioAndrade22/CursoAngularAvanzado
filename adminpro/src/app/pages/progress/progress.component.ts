import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  value: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(val: number): void {
    this.value = val > 0 ?
      (this.value + val) > 100 ? 100 : (this.value + val)
      :
      (this.value + val) < 0 ? 0 : (this.value + val);
  }
}
