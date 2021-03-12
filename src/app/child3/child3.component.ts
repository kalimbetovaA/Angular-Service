import {Component, Input, OnInit} from '@angular/core';
import {SharedValue} from '../sharedValue';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  @Input() sharedValue!: SharedValue;
  @Input() addSharedValue!: Function;
  constructor() { }

  ngOnInit(): void {
  }

}
