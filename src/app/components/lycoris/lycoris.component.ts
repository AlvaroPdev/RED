import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lycoris',
  imports: [],
  templateUrl: './lycoris.component.html',
  styleUrl: './lycoris.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LycorisComponent {
  
  constructor(private router: Router) {}

  onLycorisClick() {
    // Navegar a la animación de reboot
    this.router.navigate(['/reboot']);
  }
}
