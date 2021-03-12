import {Component, Input, OnInit} from '@angular/core';
import {SharedValue} from '../sharedValue';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Input()
  sharedValue!: SharedValue;
  @Input()
  deleteSharedValue!: Function;
  constructor() { }

  ngOnInit(): void {
  }

}
