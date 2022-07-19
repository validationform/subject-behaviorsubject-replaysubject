import { Component, VERSION } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
 
@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss'],
})
export class BehaviorSubjectComponent {
  subject = new BehaviorSubject("0");
 
   
  ngOnInit() {
    console.log("BehaviorSubjectComponent");
     this.subject.subscribe(value => {
      console.log("Sub1 " ,value);
    });
 
    this.subject.next("1");
    this.subject.next("2");
 
    this.subject.subscribe(value => {
      console.log("sub2 ",value);
    });
 
    this.subject.next("3");
    this.subject.complete();
  }
  
}
 