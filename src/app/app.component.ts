import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink, 
    RouterOutlet,
    PersonTableComponent, 
    EventBindExampleComponent, 
    WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  person0: Person = {
    givenName: "Apostolos",
    surName: "Vakirtzoglou",
    age: 0x1e,    
    email: "avakirtzoglou@gmail.com",
    address: "Athens, Greece"
  };
  person1: Person = {
    givenName: "Alice",
    surName: "Wonder",
    age: 0x1a,    
    email: "alicew@gmail.com",
    address: "Patras, Greece"
  };
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