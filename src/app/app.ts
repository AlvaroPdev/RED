import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedComponent } from './components/red/red.component';

@Component({
  selector: 'app-root',
  imports: [RedComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'RED';
}
