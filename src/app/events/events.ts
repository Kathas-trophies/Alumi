import { Component } from '@angular/core';
import { EVENTS } from '../events';
import { IEvents } from '../ievents.interface';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  events: IEvents[] = EVENTS;
}
