import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress')
  txtProgress: ElementRef = {nativeElement: null};

  @Input()
  title: string = 'Incrementador';

  @Input()
  value: number = 50;

  @Output()
  changedValue: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changeValue(val: number): void {
    this.value = val > 0 ?
      (this.value + val) > 100 ? 100 : (this.value + val)
      :
      (this.value + val) < 0 ? 0 : (this.value + val);
    this.changedValue.emit(this.value);
  }

  onChanges(event: number): void {
    if (event > 100) {
      this.value = 100;
    }
    else if (event < 0) {
      this.value = 100;
    }
    else {
      this.value = event;
    }

    this.txtProgress.nativeElement.value = this.value;

    this.changedValue.emit(this.value);
  }
}
