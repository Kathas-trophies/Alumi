import { Component } from '@angular/core';
import { ICompanies } from '../../icompanies.interface';
import { companies } from '../../companies';

@Component({
  selector: 'app-companies',
  imports: [],
  templateUrl: './companies.html',
  styleUrl: './companies.css',
})
export class Companies {
  companies: ICompanies[] = companies;
}
