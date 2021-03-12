import { Component, OnInit } from '@angular/core';
import {SharedValue} from '../sharedValue';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit {

  sharedValue = new SharedValue('','');
  addSharedValues!: Function;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.addSharedValues = this.addSharedValue.bind(this);
  }

  addSharedValue(sharedValue: SharedValue): void{
    this.sharedService.addSharedValue(sharedValue.name, sharedValue.description);
  }

}
