import { Component, VERSION } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent {
  subject = new ReplaySubject();

  ngOnInit() {
    console.log('ReplaySubjectComponent');
    this.subject.next('1');
    this.subject.next('2');

    this.subject.subscribe(
      (value) => console.log('Sub1 ' + value),
      (error) => console.error('Sub1 ' + error),
      () => console.log('Sub1 Complete')
    );

    this.subject.next('3');
    this.subject.next('4');

    this.subject.subscribe((value) => {
      console.log('sub2 ' + value);
    });

    this.subject.next('5');
    this.subject.complete();

    this.subject.error('err');
    this.subject.next('6');

    this.subject.subscribe(
      (value) => {
        console.log('sub3 ' + value);
      },
      (error) => console.error('sub3 ' + error),
      () => console.log('Complete')
    );
  }
}
