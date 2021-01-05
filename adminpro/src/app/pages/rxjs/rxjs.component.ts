import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.count3().subscribe(
      num => console.log('Subs: ', num),
      error => console.error('Error on obs: ', error),
      () =>  console.log('Obs finished execution.')
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('Closed page');
    this.subscription.unsubscribe();
  }

  count3(): Observable<any>{
    return new Observable<any>( observer => {
      let counter = 0;
      const interval = setInterval( () => {
        counter += 1;
        const out = {
          counter
        };
        observer.next(out);
      }, 1000);
    }).pipe(
      map( response => response.counter ),
      filter( (value, index) => {
        return value % 2 === 1;
      })
    );
  }
}
