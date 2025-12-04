import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonService, Person } from '../person.service';

@Component({
  selector: 'app-details-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-component.component.html',
  styleUrl: './details-component.component.css'
})
export class DetailsComponentComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private personService = inject(PersonService);

  public person: Person | null = null;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = Number(params['id']);
      this.person = this.personService.getById(id);
    });
  }
}
