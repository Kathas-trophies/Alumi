import { Component, OnInit } from '@angular/core';
import { ICompanies } from '../../icompanies.interface';
import { companies } from '../../companies';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-companies',
  imports: [RouterLink],
  templateUrl: './companies.html',
  styleUrl: './companies.css',
})
export class Companies implements OnInit {
  company: ICompanies | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    let CompanyId = Number(this.route.snapshot.params['id']);
    this.company = companies.find((p) => p.id === CompanyId);
  }
}
