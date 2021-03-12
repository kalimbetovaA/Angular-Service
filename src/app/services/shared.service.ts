import { Injectable } from '@angular/core';
import {SharedValue} from '../sharedValue';
import {LoggingService} from './logging.service';


@Injectable()
export class SharedService {
  sharedValues = [ new SharedValue('Mark', 'Mark description'),
    new SharedValue('Ruffalo', 'Ruffalo description'),
    new SharedValue('Tom', 'Tom description'),
    new SharedValue('Kim', 'Kim description')];
  constructor(private loggingService: LoggingService) { }

  getSharedValues(): SharedValue[]{
    return this.sharedValues;
  }

  addSharedValue(name: string, description: string): void{
    this.sharedValues.push(new SharedValue(name, description));
    this.loggingService.log(name + ' was added!');
  }
  deleteSharedValue(sharedValue: SharedValue): void{
    this.sharedValues.splice(this.sharedValues.indexOf(sharedValue), 1);
    this.loggingService.log(sharedValue.name + ' was deleted!');
  }


}
