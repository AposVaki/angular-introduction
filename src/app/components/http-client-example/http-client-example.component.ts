import { Component, OnInit, inject } from '@angular/core';
import { ChuckNorrisJoke, DadJoke } from 'src/app/shared/interfaces/jokes';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  ngOnInit(): void {
    this.refreshDadJoke();
    this.refreshChuckNorrisJoke();
  }
  jokeService = inject(JokesService);
  dadJoke = '';
  chuckNorrisJoke = '';

  refreshDadJoke() {
    this.jokeService.getDadJoke().subscribe((data: DadJoke) => {
      this.dadJoke = data.joke;})
  }
  refreshChuckNorrisJoke() {
    this.jokeService.getChuckNorrisJoke().subscribe((data: ChuckNorrisJoke) => {
      console.log(data.value);
      this.chuckNorrisJoke = data.value;
    })
  }

}
