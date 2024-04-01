import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: "Apostolos",
    surName: "Vakirtzoglou",
    age: 0x1e,    
    email: "avakirtzoglou@gmail.com"  
  };
}
