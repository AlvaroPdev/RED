import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedComponent } from './components/red/red.component';
import { LycorisComponent } from './components/lycoris/lycoris.component';

@Component({
  selector: 'app-root',
  imports: [RedComponent, RouterOutlet, LycorisComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'RED';
}
