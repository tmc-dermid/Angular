import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { PersonService, Person } from '../person.service';

@Component({
  selector: 'app-add-person-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-person-component.component.html',
  styleUrls: ['./add-person-component.component.css']
})
export class AddPersonComponentComponent {

  public person: Person = { address: {} };

  private personService = inject(PersonService);
  private router = inject(Router);

  save(): void {
    this.personService.addPerson(this.person);
    this.router.navigate(['/']);
  }
}
