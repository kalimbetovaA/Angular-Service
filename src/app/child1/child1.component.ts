import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../services/shared.service';
import {SharedValue} from '../sharedValue';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Input()
  sharedValues!: SharedValue[];
  @Input()
  deleteSharedValue!: Function;
  @Input()
  setSharedValue!: Function;
  constructor() { }

  ngOnInit(): void {
  }

}
