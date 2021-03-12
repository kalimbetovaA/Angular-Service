import { Component, OnInit } from '@angular/core';
import {SharedValue} from '../sharedValue';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {
  sharedValues!: SharedValue[];
  sharedValue = new SharedValue('', '');
  deleteSharedValues!: Function;
  setSharedValueForChild!: Function;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.setSharedValueForChild = this.setSharedValue.bind(this);
    this.deleteSharedValues = this.deleteSharedValue.bind(this);
  }

  getSharedValues(): void{
    this.sharedValues = this.sharedService.getSharedValues();
  }
  deleteSharedValue(sharedValue: SharedValue): void{
    this.sharedService.deleteSharedValue(sharedValue);
  }

  setSharedValue(sharedValue: SharedValue): void{
    this.sharedValue = sharedValue;
  }

}
