import { Component } from '@angular/core';
import { STEPS } from './steps/steps';
import {Step} from './step/step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  protected steps: Step[] = STEPS;
}
