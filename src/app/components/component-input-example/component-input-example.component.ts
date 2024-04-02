import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
    selector: 'app-component-input-example',
    standalone: true,
    templateUrl: './component-input-example.component.html',
    styleUrl: './component-input-example.component.css',
    imports: [PersonTableComponent]
})
export class ComponentInputExampleComponent {
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
}
