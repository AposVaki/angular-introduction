import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent, EventBindExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Apostolos';
  person0: Person = {
    givenName: "Apostolos",
    surName: "Vakirtzoglou",
    age: 0x1e,    
    email: "avakirtzoglou@gmail.com",
    address: "Athens, Greece"
  }
  person1: Person = {
    givenName: "Alice",
    surName: "Wonder",
    age: 0x1a,    
    email: "alicew@gmail.com",
    address: "Patras, Greece"
  }
}