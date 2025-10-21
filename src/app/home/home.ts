import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IEvents } from '../ievents.interface';
import { EVENTS } from '../events';
import { ICompanies } from '../icompanies.interface';
import { companies } from '../companies';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

//event + partner Initialization
export class Home implements OnInit {
  events: IEvents[] = [];
  companies: ICompanies[] = [];

  constructor() {}

  ngOnInit(): void {
    this.events = EVENTS.filter((event) => event.id === 1 || event.id === 4 || event.id === 7);

    this.companies = companies.filter(
      (companie) => companie.id === 1 || companie.id === 2 || companie.id === 3
    );
  }
}
