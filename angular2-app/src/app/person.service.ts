import { Injectable } from '@angular/core';

export interface Person {
  firstName?: string;
  familyName?: string;
  age?: number;
  address: {
    city?: string;
    street?: string;
    postCode?: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private storageKey = 'persons';

  getPersons(): Person[] {
    const personsJson = localStorage.getItem(this.storageKey);
    return personsJson ? JSON.parse(personsJson) : [];
  }

  getById(id: number): Person | null {
    const persons = this.getPersons();
    return persons[id] || null;
  }

  addPerson(person: Person): void {
    const persons = this.getPersons();
    persons.push(person);
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }

  removePerson(id: number): void {
    const persons = this.getPersons();
    if (id >= 0 && id < persons.length) {
      persons.splice(id, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(persons));
    }
  }
}
