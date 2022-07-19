import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})

export class SubjectComponent implements OnInit {
  obs: Observable<number>;
  incrementer = 1;
  setIntervalId: any;
  subscription: Subscription;
  //number: number = 1;

  ngOnInit(): void {
    this.obs = new Observable((observer: Observer<number>) => {
      this.setIntervalId = setInterval(() => {
        observer.next(this.incrementer++);
      }, 1000);
    });
    
    this.subscription = this.obs.subscribe((resposnse) => {
      console.log(resposnse);
    });
  }
  test(): void {
    this.subscription.unsubscribe();
    clearInterval(this.setIntervalId);
  }
}
