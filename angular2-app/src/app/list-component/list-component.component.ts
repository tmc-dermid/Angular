import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonService, Person } from '../person.service';

@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent implements OnInit {
  private personService = inject(PersonService);

  public persons: Person[] = [];

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

  removePerson(index: number) {
    this.personService.removePerson(index);
    this.persons = this.personService.getPersons();
  }
}
