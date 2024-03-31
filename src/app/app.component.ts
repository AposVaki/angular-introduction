import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Apostolos';

  person = {
    givenName: "Apostolos",
    surName: "Vakirtzoglou",
    age: 0x1e,    email: "avakirtzoglou@gmail.com"  };
}