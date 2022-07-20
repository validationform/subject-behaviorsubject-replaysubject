import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    const subject = new Subject<number>();

    subject.subscribe({
      next: (value) => console.log('sub1:', value),
    });
    subject.subscribe({
      next: (value) => console.log('sub2:', value),
    });
    console.log('Subject');
    subject.next(1);
    subject.next(2);
  }
}
