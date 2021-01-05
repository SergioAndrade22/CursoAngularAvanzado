import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() {
    const promise: Promise<string> = this.count3();

    promise.then(
      msj => console.log('Done!', msj)
    ). catch(
      error => console.error('Promise fail!', error)
    );
  }

  ngOnInit(): void {}

  count3(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        console.log(counter);
        if (counter === 3){
          resolve('OK!');
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
