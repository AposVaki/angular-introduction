import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
    selector: 'app-for-directive-example',
    standalone: true,
    templateUrl: './for-directive-example.component.html',
    styleUrl: './for-directive-example.component.css',
    imports: [PersonTableComponent]
})
export class ForDirectiveExampleComponent {
  users: Person[] = 
  [
    {
      givenName: "Bob",
      surName: "Smith",
      age: 32,
      email: "bobsmith@example.com",
      address: "New York, USA"
    },
    {
      givenName: "Charlie",
      surName: "Brown",
      age: 45,
      email: "charlieb@example.com",
      address: "Los Angeles, USA"
    },
    {
      givenName: "David",
      surName: "Johnson",
      age: 38,
      email: "davidj@example.com",
      address: "London, UK"
    },
    {
      givenName: "Emma",
      surName: "Davis",
      age: 29,
      email: "emmad@example.com",
      address: "Sydney, Australia"
    },
    {
      givenName: "Frank",
      surName: "Miller",
      age: 41,
      email: "frankm@example.com",
      address: "Toronto, Canada"
    },
    {
      givenName: "Grace",
      surName: "Wilson",
      age: 34,
      email: "gracew@example.com",
      address: "Berlin, Germany"
    },
    {
      givenName: "Henry",
      surName: "Moore",
      age: 27,
      email: "henrym@example.com",
      address: "Paris, France"
    },
    {
      givenName: "Ivy",
      surName: "Lee",
      age: 31,
      email: "ivyl@example.com",
      address: "Tokyo, Japan"
    },
    {
      givenName: "Jack",
      surName: "Taylor",
      age: 39,
      email: "jackt@example.com",
      address: "Mumbai, India"
    }
  ]
}
