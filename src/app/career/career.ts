import { Component } from '@angular/core';
import { ICareer } from '../icareer.interface';
import { careers } from '../career';
import { ICompanies } from '../icompanies.interface';
import { companies } from '../companies';

@Component({
  selector: 'app-career',
  imports: [],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {
  companies: ICompanies[] = companies;
  career: ICareer[] = careers;
}
