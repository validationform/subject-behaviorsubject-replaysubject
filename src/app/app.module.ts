import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject/replay-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
